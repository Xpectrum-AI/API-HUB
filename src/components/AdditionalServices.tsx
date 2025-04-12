import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Calendar,
  CreditCard,
  FileText,
  Settings,
  Users,
  Bell,
  MessageSquare,
  BarChart
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

export default function AdditionalServices() {
  const quickStats = [
    { label: "Active Appointments", value: "156", icon: Calendar },
    { label: "Pending Payments", value: "$45.2K", icon: CreditCard },
    { label: "Total Users", value: "2,345", icon: Users },
    { label: "Success Rate", value: "98%", icon: BarChart }
  ];

  const endpoints = [
    {
      title: "Appointment Management",
      description: "Schedule and manage appointments",
      icon: Calendar,
      color: "bg-blue-500/10 text-blue-500",
      endpoints: [
        "GET /appointments",
        "POST /schedule",
        "PUT /appointments/{id}"
      ]
    },
    {
      title: "Payment Processing",
      description: "Handle payments and transactions",
      icon: CreditCard,
      color: "bg-green-500/10 text-green-500",
      endpoints: [
        "GET /payments",
        "POST /process",
        "GET /transactions"
      ]
    },
    {
      title: "Document Services",
      description: "Manage and process documents",
      icon: FileText,
      color: "bg-yellow-500/10 text-yellow-500",
      endpoints: [
        "GET /documents",
        "POST /upload",
        "GET /templates"
      ]
    },
    {
      title: "Notifications",
      description: "Send and manage notifications",
      icon: Bell,
      color: "bg-purple-500/10 text-purple-500",
      endpoints: [
        "POST /notify",
        "GET /notifications",
        "PUT /preferences"
      ]
    },
    {
      title: "Communication",
      description: "Handle messaging and communications",
      icon: MessageSquare,
      color: "bg-pink-500/10 text-pink-500",
      endpoints: [
        "POST /messages",
        "GET /threads",
        "PUT /status"
      ]
    },
    {
      title: "Analytics",
      description: "Track and analyze service usage",
      icon: BarChart,
      color: "bg-indigo-500/10 text-indigo-500",
      endpoints: [
        "GET /metrics",
        "GET /reports",
        "GET /analytics"
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Additional Services
        </h1>
        <p className="text-lg text-muted-foreground">
          Comprehensive suite of additional API services and tools
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
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
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
        <Card className="bg-gradient-to-br from-indigo-500/5 to-purple-500/5 border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <CardTitle>Service Configuration</CardTitle>
                <CardDescription>Configure additional services and integrations</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="mr-4">Configure Services</Button>
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
                <CardTitle>Access Management</CardTitle>
                <CardDescription>Manage service access and permissions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="mr-4">Manage Access</Button>
            <Button variant="outline">View Logs</Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
} 