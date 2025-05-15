import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useAuthInfo } from '@propelauth/react';
import { useEffect } from 'react';
import Dashboard from "./pages/Dashboard";
import Insurance from "./pages/Insurance";
import HRMS from "./pages/HRMS";
import Adds from "./pages/Adds";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const authInfo = useAuthInfo();
    const location = useLocation();
    
    if (!authInfo.isLoggedIn) {
        return <Navigate to="/" replace state={{ from: location }} />;
    }

    return <>{children}</>;
};

// Handle initial login redirect
const LoginRedirect = () => {
    const authInfo = useAuthInfo();
    const location = useLocation();
    const from = (location.state as any)?.from?.pathname || '/insurance';

    if (authInfo.isLoggedIn) {
        // Use Navigate for a React-router-native redirect (no flicker)
        return <Navigate to={from} replace />;
    }

    // If not logged in, show the dashboard (public landing page)
    return <Dashboard />;
};

const App = () => {
    const authInfo = useAuthInfo();

    return (
        <QueryClientProvider client={queryClient}>
            <TooltipProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter>
                    <div className="min-h-screen">
                        <Navbar />
                        <main className="container-fluid">
                            <Routes>
                                <Route path="/" element={<LoginRedirect />} />
                                <Route path="/insurance/*" element={
                                    <ProtectedRoute>
                                        <Insurance />
                                    </ProtectedRoute>
                                } />
                                <Route path="/hrms/*" element={
                                    <ProtectedRoute>
                                        <HRMS />
                                    </ProtectedRoute>
                                } />
                                <Route path="/adds/*" element={
                                    <ProtectedRoute>
                                        <Adds />
                                    </ProtectedRoute>
                                } />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                    </div>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;
