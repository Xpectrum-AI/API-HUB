import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Shield,
  FileText,
  Users,
  Clock,
  CheckCircle,
  AlertTriangle,
  BarChart,
  Settings,
  RefreshCcw
} from "lucide-react";

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

export default function InsuranceSection() {
  const quickStats = [
    { label: "Active Policies", value: "2,567", icon: Shield, trend: "+12%" },
    { label: "Pending Claims", value: "156", icon: Clock, trend: "-5%" },
    { label: "Total Premium", value: "$1.2M", icon: BarChart, trend: "+8%" },
    { label: "Success Rate", value: "94%", icon: CheckCircle, trend: "+2%" }
  ];

  const endpoints = [
    {
      title: "Policy Management",
      description: "Handle insurance policies and coverage details",
      icon: Shield,
      color: "bg-blue-500/10 text-blue-500",
      endpoints: [
        "GET /policies",
        "POST /policies",
        "PUT /policies/{id}"
      ]
    },
    {
      title: "Claims Processing",
      description: "Process and manage insurance claims",
      icon: CheckCircle,
      color: "bg-green-500/10 text-green-500",
      endpoints: [
        "GET /claims",
        "POST /claims",
        "PUT /claims/{id}/status"
      ]
    },
    {
      title: "Risk Assessment",
      description: "Evaluate and assess insurance risks",
      icon: AlertTriangle,
      color: "bg-yellow-500/10 text-yellow-500",
      endpoints: [
        "GET /risk-factors",
        "POST /risk-assessment",
        "GET /risk-score/{id}"
      ]
    },
    {
      title: "Premium Calculation",
      description: "Calculate and manage premium rates",
      icon: BarChart,
      color: "bg-purple-500/10 text-purple-500",
      endpoints: [
        "GET /premium-rates",
        "POST /calculate-premium",
        "GET /payment-history"
      ]
    },
    {
      title: "Policy Renewals",
      description: "Manage policy renewal processes",
      icon: RefreshCcw,
      color: "bg-pink-500/10 text-pink-500",
      endpoints: [
        "GET /renewals",
        "POST /renew-policy",
        "GET /renewal-quotes"
      ]
    },
    {
      title: "Document Management",
      description: "Handle insurance-related documents",
      icon: FileText,
      color: "bg-indigo-500/10 text-indigo-500",
      endpoints: [
        "GET /documents",
        "POST /upload-document",
        "GET /document/{id}"
      ]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container mx-auto px-4 py-8 max-w-7xl"
    >
      <motion.div variants={fadeInUp} className="mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
          Insurance API Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive insurance management API endpoints and analytics
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {quickStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="hover:shadow-md transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 text-primary`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-bold">{stat.value}</h3>
                      <span className={`text-xs font-medium ${
                        stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {endpoints.map((endpoint, index) => (
          <motion.div
            key={endpoint.title}
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${endpoint.color} flex items-center justify-center mb-4`}>
                  <endpoint.icon className="w-6 h-6" />
                </div>
                <CardTitle>{endpoint.title}</CardTitle>
                <CardDescription>{endpoint.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {endpoint.endpoints.map((api, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Badge variant="outline" className="font-mono">
                        {api.split(" ")[0]}
                      </Badge>
                      <span className="text-muted-foreground font-mono">
                        {api.split(" ")[1]}
                      </span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4 hover:bg-primary/5">
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div variants={fadeInUp} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-blue-500/5 to-emerald-500/5 border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <CardTitle>API Configuration</CardTitle>
                <CardDescription>Configure API settings and preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="mr-4">Configure API</Button>
            <Button variant="outline">View Settings</Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/5 to-pink-500/5 border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage API access and permissions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="mr-4">Manage Users</Button>
            <Button variant="outline">View Logs</Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
} 