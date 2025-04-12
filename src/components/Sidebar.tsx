import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { apiEndpoints } from "@/data/apiData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeEndpoint: string;
  setActiveEndpoint: (endpoint: string) => void;
  section: "HRMS" | "ADDS" | "Insurance";
}

const getMethodColor = (method: string) => {
  switch (method.toUpperCase()) {
    case 'GET':
      return 'bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20';
    case 'POST':
      return 'bg-orange-500/10 text-orange-500 hover:bg-orange-500/20';
    case 'PUT':
      return 'bg-blue-500/10 text-blue-500 hover:bg-blue-500/20';
    case 'DELETE':
      return 'bg-red-500/10 text-red-500 hover:bg-red-500/20';
    case 'PATCH':
      return 'bg-purple-500/10 text-purple-500 hover:bg-purple-500/20';
    default:
      return 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20';
  }
};

const sectionCategories = {
  HRMS: [
    "Employee Data",
    "Employee Insurance",
    "Harassment Reports",
    "Insurance Plan",
    "Leave Balance",
    "Leave Requests",
    "Payroll",
    "Salary Info",
    "Taxes",
    "Company Policies"
  ],
  ADDS: [
    "Payments",
    "Appointments"
  ],
  Insurance: [
    "Applications",
    "Plan Quote",
    "Policies",
    "Riders",
    "Rider Applications",
    "Rider Quotes",
    "Term Life Plans"
  ]
};

const Sidebar = ({ activeEndpoint, setActiveEndpoint, section }: SidebarProps) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Group endpoints by category and filter based on section
  const groupedEndpoints = Object.entries(apiEndpoints).reduce((acc, [id, endpoint]) => {
    if (sectionCategories[section].includes(endpoint.category)) {
      if (!acc[endpoint.category]) {
        acc[endpoint.category] = [];
      }
      acc[endpoint.category].push({ ...endpoint, id });
    }
    return acc;
  }, {} as Record<string, (typeof apiEndpoints[keyof typeof apiEndpoints] & { id: string })[]>);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="py-2">
      {Object.entries(groupedEndpoints).map(([category, endpoints]) => (
        <div key={category} className="mb-1">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span className="font-medium">{category}</span>
            {expandedCategories.includes(category) ? (
              <ChevronDown size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </button>
          {expandedCategories.includes(category) && (
            <div className="pl-4 space-y-1">
              {endpoints.map((endpoint) => (
                <button
                  key={endpoint.id}
                  onClick={() => setActiveEndpoint(endpoint.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors rounded-md group",
                    activeEndpoint === endpoint.id ? "bg-accent text-accent-foreground" : ""
                  )}
                >
                  <span className="truncate flex-1 text-left">{endpoint.title}</span>
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "ml-2 font-mono text-xs",
                      getMethodColor(endpoint.method)
                    )}
                  >
                    {endpoint.method}
                  </Badge>
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
