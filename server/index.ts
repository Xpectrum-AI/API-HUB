import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { initBaseAuth } from '@propelauth/node';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize PropelAuth
const {
    validateAccessTokenAndGetUser,
    fetchUserMetadataByUserId,
} = initBaseAuth({
    authUrl: process.env.AUTH_URL || "",
    apiKey: process.env.PROPELAUTH_API_KEY || "",
});

// Extend Express Request type to include user
interface AuthenticatedRequest extends Request {
    user?: any;
}

// Middleware to validate authentication
const requireAuth = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ error: 'No authorization header' });
    }

    try {
        const user = await validateAccessTokenAndGetUser(authHeader);
        // Attach user to request for use in route handlers
        req.user = user;
        next();
    } catch (err) {
        console.error('Auth error:', err);
        return res.status(401).json({ error: 'Invalid token' });
    }
};

// Public route
app.get('/api/public', (req: Request, res: Response) => {
    res.json({ message: 'This is a public endpoint' });
});

// Protected route
app.get('/api/protected', requireAuth, (req: AuthenticatedRequest, res: Response) => {
    const user = req.user;
    res.json({ 
        message: 'This is a protected endpoint',
        user: {
            userId: user.userId,
            email: user.email
        }
    });
});

// User metadata route
app.get('/api/user/metadata', requireAuth, async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user = req.user;
        const metadata = await fetchUserMetadataByUserId(user.userId);
        res.json({ metadata });
    } catch (err) {
        console.error('Error fetching metadata:', err);
        res.status(500).json({ error: 'Failed to fetch user metadata' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 