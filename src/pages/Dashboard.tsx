import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Users, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 bg-clip-text text-transparent">
          API Hub Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/insurance">
            <Card className="group border-border/50 hover:bg-accent/5 hover:border-accent transition-all duration-300">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Insurance API</CardTitle>
                <CardDescription className="group-hover:text-muted-foreground/80">
                  Manage insurance plans, policies, and related data
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/hrms">
            <Card className="group border-border/50 hover:bg-accent/5 hover:border-accent transition-all duration-300">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">HRMS API</CardTitle>
                <CardDescription className="group-hover:text-muted-foreground/80">
                  Human Resource Management System endpoints
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/adds">
            <Card className="group border-border/50 hover:bg-accent/5 hover:border-accent transition-all duration-300">
              <CardHeader>
                <div className="mb-4 w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                  <Settings className="w-6 h-6 text-emerald-500" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">Additional Services</CardTitle>
                <CardDescription className="group-hover:text-muted-foreground/80">
                  Payments and Appointments management
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 