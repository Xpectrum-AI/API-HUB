import { useState } from "react";
import { Search, Settings, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { apiEndpoints } from "@/data/apiData";
import Sidebar from "@/components/Sidebar";
import ApiDocumentation from "@/components/ApiDocumentation";
import ApiUsePanel from "@/components/ApiUsePanel";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Adds = () => {
  const [activeEndpoint, setActiveEndpoint] = useState("");
  const [isApiPanelOpen, setIsApiPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const currentEndpoint = activeEndpoint ? apiEndpoints[activeEndpoint] : null;

  // Handle endpoint change
  const handleEndpointChange = (endpoint: string) => {
    setActiveEndpoint(endpoint);
    setIsApiPanelOpen(false); // Close the API panel when changing endpoints
  };

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Left Sidebar */}
      <div className="w-72 border-r border-border bg-card flex flex-col">
        {/* API Title Bar */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-accent/10" 
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <Settings className="h-4 w-4 text-emerald-500" />
              </div>
              <span className="text-sm font-semibold">Additional Services</span>
            </div>
          </div>
          <ThemeToggle />
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b border-border">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground/60" size={16} />
            <input
              type="text"
              placeholder="Search endpoints..."
              className={cn(
                "w-full bg-card/50 text-sm rounded-md py-2 pl-9 pr-3",
                "border border-border focus:outline-none focus:ring-1 focus:ring-ring",
                "placeholder:text-muted-foreground/50"
              )}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Endpoints List */}
        <div className="flex-1 overflow-y-auto">
          <Sidebar 
            activeEndpoint={activeEndpoint} 
            setActiveEndpoint={handleEndpointChange} 
            section="ADDS"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-background">
        {currentEndpoint ? (
          <ApiDocumentation
            endpoint={currentEndpoint.title}
            method={currentEndpoint.method}
            title="Additional Services"
            baseUrl={currentEndpoint.baseUrl}
            path={currentEndpoint.path}
            onUseApi={() => setIsApiPanelOpen(true)}
            isApiPanelOpen={isApiPanelOpen}
          />
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            Select an endpoint from the sidebar to view documentation
          </div>
        )}
      </div>

      {/* API Use Panel */}
      {isApiPanelOpen && currentEndpoint && (
        <div className="w-[450px] border-l border-border bg-card/50 backdrop-blur-sm">
          <ApiUsePanel
            key={activeEndpoint}
            endpoint={currentEndpoint.title}
            method={currentEndpoint.method}
            baseUrl={currentEndpoint.baseUrl}
            path={currentEndpoint.path}
            onClose={() => setIsApiPanelOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Adds; 