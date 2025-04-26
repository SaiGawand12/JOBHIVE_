
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Briefcase, LogOut, User, Bookmark, FileText, Settings } from "lucide-react";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out",
    });
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <Briefcase className="h-8 w-8 text-job-blue-500" />
              <span className="ml-2 text-xl font-bold text-job-blue-500">JobHive</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/jobs" className={navigationMenuTriggerStyle() + (isActive("/jobs") ? " bg-accent" : "")}>
                    Find Jobs
                  </Link>
                </NavigationMenuItem>
                {user?.userType === "employer" && (
                  <NavigationMenuItem>
                    <Link to="/employers" className={navigationMenuTriggerStyle() + (isActive("/employers") ? " bg-accent" : "")}>
                      For Employers
                    </Link>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>
            
            {user ? (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center text-gray-600 hover:text-job-blue-500">
                      <User className="h-4 w-4 mr-2" />
                      {user.name || "User"}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      {user.userType === "employer" && (
                        <DropdownMenuItem asChild>
                          <Link to="/my-jobs" className="flex items-center cursor-pointer w-full">
                            <FileText className="h-4 w-4 mr-2" />
                            <span>My Jobs</span>
                          </Link>
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem asChild>
                        <Link to="/saved-jobs" className="flex items-center cursor-pointer w-full">
                          <Bookmark className="h-4 w-4 mr-2" />
                          <span>Saved Jobs</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link to="/profile-settings" className="flex items-center cursor-pointer w-full">
                          <Settings className="h-4 w-4 mr-2" />
                          <span>Profile Settings</span>
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="text-red-600 flex items-center cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      <span>Sign Out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                {user.userType === "employer" && (
                  <Button asChild className="bg-job-blue-500 hover:bg-job-blue-600">
                    <Link to="/post-job">Post a Job</Link>
                  </Button>
                )}
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 hover:text-job-blue-500 transition-colors">
                  Login
                </Link>
                <Button asChild className="bg-job-blue-500 hover:bg-job-blue-600">
                  <Link to="/register">Register</Link>
                </Button>
              </>
            )}
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-gray-600">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/jobs" 
              className="block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Jobs
            </Link>
            {user?.userType === "employer" && (
              <Link 
                to="/employers" 
                className="block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For Employers
              </Link>
            )}
            
            {user ? (
              <>
                <div className="block px-3 py-2 text-gray-600 rounded-md">
                  <User className="h-4 w-4 inline mr-2" />
                  {user.name || "User"}
                </div>
                
                {user.userType === "employer" && (
                  <Link 
                    to="/my-jobs" 
                    className="block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <FileText className="h-4 w-4 inline mr-2" />
                    My Jobs
                  </Link>
                )}
                
                <Link 
                  to="/saved-jobs" 
                  className="block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Bookmark className="h-4 w-4 inline mr-2" />
                  Saved Jobs
                </Link>
                
                <Link 
                  to="/profile-settings" 
                  className="block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Settings className="h-4 w-4 inline mr-2" />
                  Profile Settings
                </Link>
                
                {user.userType === "employer" && (
                  <Link 
                    to="/post-job" 
                    className="block px-3 py-2 bg-job-blue-500 text-white hover:bg-job-blue-600 text-center rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Post a Job
                  </Link>
                )}
                
                <button 
                  onClick={handleLogout}
                  className="w-full text-left block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
                >
                  <LogOut className="h-4 w-4 inline mr-2" />
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="block px-3 py-2 text-gray-600 hover:text-job-blue-500 hover:bg-gray-50 rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  className="block px-3 py-2 bg-job-blue-500 text-white hover:bg-job-blue-600 text-center rounded-md"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
