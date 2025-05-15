import { useAuthInfo, useRedirectFunctions, useLogoutFunction } from '@propelauth/react';
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const authInfo = useAuthInfo();
    const { redirectToLoginPage, redirectToSignupPage } = useRedirectFunctions();
    const logout = useLogoutFunction();
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path: string) => {
        if (authInfo.isLoggedIn) {
            navigate(path);
        } else {
            redirectToLoginPage();
        }
    };

    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-bold">API Hub</h1>
                    {authInfo.isLoggedIn && (
                        <div className="flex space-x-4">
                            <Button 
                                variant={location.pathname.startsWith('/insurance') ? "default" : "ghost"}
                                onClick={() => handleNavigation('/insurance')}
                            >
                                Insurance
                            </Button>
                            <Button 
                                variant={location.pathname.startsWith('/hrms') ? "default" : "ghost"}
                                onClick={() => handleNavigation('/hrms')}
                            >
                                HRMS
                            </Button>
                            <Button 
                                variant={location.pathname.startsWith('/adds') ? "default" : "ghost"}
                                onClick={() => handleNavigation('/adds')}
                            >
                                Adds
                            </Button>
                        </div>
                    )}
                </div>
                <div className="flex items-center space-x-4">
                    {authInfo.isLoggedIn ? (
                        <div className="flex items-center space-x-4">
                            <span className="text-sm text-gray-600">
                                {authInfo.user?.email}
                            </span>
                            <Button variant="outline" onClick={() => logout(true)}>
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <div className="flex space-x-2">
                            <Button variant="outline" onClick={() => redirectToLoginPage()}>
                                Login
                            </Button>
                            <Button onClick={() => redirectToSignupPage()}>
                                Sign Up
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 