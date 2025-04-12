import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Shield, Users, Settings, ArrowRight, Activity, BarChart } from "lucide-react";
import InsuranceSection from "./InsuranceSection";
import HRMSSection from "./HRMSSection";
import AdditionalServices from "./AdditionalServices";
import { useNavigate, useLocation } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: "insurance",
      path: "/insurance",
      title: "Insurance API",
      description: "Manage insurance plans, policies, and related data",
      icon: Shield,
      color: "bg-blue-500/10 text-blue-500",
      stats: "2.5K+ Policies",
      component: InsuranceSection
    },
    {
      id: "hrms-api",
      path: "/hrms-api",
      title: "HRMS API",
      description: "Human Resource Management System endpoints",
      icon: Users,
      color: "bg-purple-500/10 text-purple-500",
      stats: "1.2K+ Users",
      component: HRMSSection
    },
    {
      id: "adds-api",
      path: "/adds-api",
      title: "Additional Services",
      description: "Payments and Appointments management",
      icon: Settings,
      color: "bg-emerald-500/10 text-emerald-500",
      stats: "500+ Services",
      component: AdditionalServices
    }
  ];

  const quickStats = [
    {
      label: "Total API Calls",
      value: "2.4M+",
      change: "+12.5%",
      icon: Activity,
      color: "text-blue-500"
    },
    {
      label: "Success Rate",
      value: "99.9%",
      change: "+0.2%",
      icon: BarChart,
      color: "text-emerald-500"
    }
  ];

  const handleSectionClick = (section: typeof sections[0]) => {
    setActiveSection(section.id);
    navigate(section.path);
  };

  const handleBackToDashboard = () => {
    setActiveSection(null);
    navigate('/dashboard-api');
  };

  if (activeSection) {
    const section = sections.find(s => s.id === activeSection);
    if (section) {
      const SectionComponent = section.component;
      return (
        <div className="min-h-screen bg-background">
          <Button
            variant="ghost"
            className="m-4 hover:bg-accent"
            onClick={handleBackToDashboard}
          >
            ← Back to Dashboard
          </Button>
          <SectionComponent />
        </div>
      );
    }
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <motion.div variants={fadeInUp} className="mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            API Hub Dashboard
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Access and manage all your API integrations from a single, unified interface
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {quickStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <div className="flex items-center gap-2">
                        <h3 className="text-3xl font-bold">{stat.value}</h3>
                        <span className="text-sm font-medium text-emerald-500">{stat.change}</span>
                      </div>
                    </div>
                    <div className={`p-4 rounded-lg bg-primary/5 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card 
                className="relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-2 hover:border-primary/20"
                onClick={() => handleSectionClick(section)}
              >
                <CardHeader className="pb-2">
                  <div className={`w-12 h-12 rounded-lg ${section.color} flex items-center justify-center mb-4`}>
                    <section.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl flex items-center justify-between group-hover:text-primary transition-colors">
                    {section.title}
                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all" />
                  </CardTitle>
                  <CardDescription className="text-base">{section.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-muted-foreground">{section.stats}</span>
                    <Button variant="ghost" className="group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                      Explore API
                    </Button>
                  </div>
                </CardContent>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-lg pointer-events-none transition-all duration-300" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-12">
          <Card className="bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 border-none">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Need Help Getting Started?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Explore our comprehensive documentation or reach out to our support team for assistance with API integration
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button variant="default" size="lg">View Documentation</Button>
                <Button variant="outline" size="lg">Contact Support</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
} 