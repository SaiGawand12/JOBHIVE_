
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Index from "./pages/Index";
import JobsPage from "./pages/JobsPage";
import JobDetailPage from "./pages/JobDetailPage";
import EmployersPage from "./pages/EmployersPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostJobPage from "./pages/PostJobPage";
import MyJobsPage from "./pages/MyJobsPage";
import SavedJobsPage from "./pages/SavedJobsPage";
import ProfileSettingsPage from "./pages/ProfileSettingsPage";
import NotFound from "./pages/NotFound";

// New pages
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import PricingPage from "./pages/PricingPage";
import EmployerResourcesPage from "./pages/EmployerResourcesPage";
import CareerAdvicePage from "./pages/CareerAdvicePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <UserProvider>
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            {/* Don't show navbar on login and register pages */}
            <Routes>
              <Route path="/login" element={null} />
              <Route path="/register" element={null} />
              <Route path="*" element={<Navbar />} />
            </Routes>
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/jobs" element={<JobsPage />} />
                <Route path="/jobs/:jobId" element={<JobDetailPage />} />
                <Route path="/employers" element={<EmployersPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/post-job" element={<PostJobPage />} />
                <Route path="/my-jobs" element={<MyJobsPage />} />
                <Route path="/saved-jobs" element={<SavedJobsPage />} />
                <Route path="/profile-settings" element={<ProfileSettingsPage />} />
                
                {/* New routes */}
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/terms-of-service" element={<TermsOfServicePage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/employer-resources" element={<EmployerResourcesPage />} />
                <Route path="/career-advice" element={<CareerAdvicePage />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            
            {/* Don't show footer on login and register pages */}
            <Routes>
              <Route path="/login" element={null} />
              <Route path="/register" element={null} />
              <Route path="*" element={<Footer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
