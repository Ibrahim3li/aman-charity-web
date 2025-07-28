import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import ReportsPage from "./pages/ReportsPage";
import MediaLibraryPage from "./pages/MediaLibraryPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import NotFound from "./pages/NotFound";
import UserAccount from "./pages/UserAccount";
import Dashboard from "./pages/Dashboard";
import StoryCustomizationPage from "./pages/StoryCustomizationPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/media" element={<MediaLibraryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/account" element={<UserAccount />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-story" element={<StoryCustomizationPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
