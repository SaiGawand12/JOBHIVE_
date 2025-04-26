
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@/contexts/UserContext";
import { useToast } from "@/hooks/use-toast";
import { User, Settings, Save } from "lucide-react";

const ProfileSettingsPage = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Redirect if not logged in
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please log in to access profile settings",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    // Pre-fill with existing data
    setName(user.name);
    setEmail(user.email);

    // Load additional profile data if exists
    try {
      const profileData = JSON.parse(localStorage.getItem(`profile_${user.id}`) || "{}");
      setBio(profileData.bio || "");
      setLocation(profileData.location || "");
      setWebsite(profileData.website || "");
    } catch (err) {
      console.error("Failed to load profile data:", err);
    }
  }, [user, navigate, toast]);

  const saveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save profile data
      const profileData = { bio, location, website };
      localStorage.setItem(`profile_${user?.id}`, JSON.stringify(profileData));

      // Update user name if changed
      if (user && name !== user.name) {
        // Get all users
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        
        // Find and update current user
        const updatedUsers = users.map((u: any) => {
          if (u.id === user.id) {
            return { ...u, name };
          }
          return u;
        });
        
        // Save back to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        
        // Update current user data
        const currentUser = { ...user, name };
        localStorage.setItem("user", JSON.stringify(currentUser));
        
        // Force a page reload to update the UI with new user name
        window.location.reload();
      } else {
        toast({
          title: "Profile updated",
          description: "Your profile settings have been saved",
        });
      }
    } catch (err) {
      console.error("Failed to save profile:", err);
      toast({
        title: "Error",
        description: "Failed to update profile settings",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-1">Manage your personal information and preferences</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <form onSubmit={saveProfile}>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium flex items-center">
                    <User className="h-5 w-5 mr-2 text-job-blue-500" />
                    Personal Information
                  </h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        readOnly
                        disabled
                        className="w-full bg-gray-50"
                      />
                      <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
                    </div>
                    <div>
                      <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <Textarea
                        id="bio"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full"
                        placeholder="Tell us a little about yourself"
                        rows={4}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h2 className="text-lg font-medium flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-job-blue-500" />
                    Additional Information
                  </h2>
                  <div className="mt-4 space-y-4">
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location
                      </label>
                      <Input
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full"
                        placeholder="City, Country"
                      />
                    </div>
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
                        Website
                      </label>
                      <Input
                        id="website"
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full"
                        placeholder="https://your-website.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="mr-3"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-job-blue-500 hover:bg-job-blue-600"
                >
                  {isLoading ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingsPage;
