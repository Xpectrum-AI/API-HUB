import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Users,
  FileText,
  Calendar,
  DollarSign,
  Clock,
  UserPlus,
  Briefcase,
  AlertCircle,
  Settings
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

export default function HRMSSection() {
  const quickStats = [
    { label: "Total Employees", value: "1,234", icon: Users },
    { label: "Leave Requests", value: "45", icon: Calendar },
    { label: "Active Projects", value: "23", icon: Briefcase },
    { label: "Pending Reviews", value: "78", icon: Clock }
  ];

  const endpoints = [
    {
      title: "Employee Management",
      description: "Manage employee data and profiles",
      icon: Users,
      color: "bg-blue-500/10 text-blue-500",
      endpoints: [
        "GET /employees",
        "POST /employees",
        "PUT /employees/{id}"
      ]
    },
    {
      title: "Leave Management",
      description: "Handle employee leave requests",
      icon: Calendar,
      color: "bg-green-500/10 text-green-500",
      endpoints: [
        "GET /leaves",
        "POST /leave-request",
        "PUT /leave/{id}"
      ]
    },
    {
      title: "Payroll",
      description: "Process and manage payroll",
      icon: DollarSign,
      color: "bg-yellow-500/10 text-yellow-500",
      endpoints: [
        "GET /payroll",
        "POST /process-payroll",
        "GET /salary/{id}"
      ]
    },
    {
      title: "Recruitment",
      description: "Manage recruitment process",
      icon: UserPlus,
      color: "bg-purple-500/10 text-purple-500",
      endpoints: [
        "GET /jobs",
        "POST /applications",
        "GET /candidates"
      ]
    },
    {
      title: "Documents",
      description: "Handle employee documents",
      icon: FileText,
      color: "bg-pink-500/10 text-pink-500",
      endpoints: [
        "GET /documents",
        "POST /upload",
        "GET /document/{id}"
      ]
    },
    {
      title: "Performance",
      description: "Track employee performance",
      icon: AlertCircle,
      color: "bg-indigo-500/10 text-indigo-500",
      endpoints: [
        "GET /reviews",
        "POST /evaluation",
        "GET /metrics/{id}"
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
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          HRMS API Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Human Resource Management System API endpoints and tools
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
        <Card className="bg-gradient-to-br from-purple-500/5 to-blue-500/5 border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>Configure HRMS system preferences</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="mr-4">Configure System</Button>
            <Button variant="outline">View Settings</Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/5 to-green-500/5 border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <CardTitle>Access Control</CardTitle>
                <CardDescription>Manage roles and permissions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Button variant="default" className="mr-4">Manage Roles</Button>
            <Button variant="outline">View Permissions</Button>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
} 