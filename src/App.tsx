
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { Header } from "@/components/layout/Header";

// Pages
import Index from "./pages/Index";
import DiscoveryPage from "./pages/discovery/DiscoveryPage";
import ValidationPage from "./pages/validation/ValidationPage";
import DevelopmentPage from "./pages/development/DevelopmentPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col min-w-0">
              <Header />
              <main className="flex-1 p-6 overflow-auto">
                <div className="max-w-full">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/discovery" element={<DiscoveryPage />} />
                    <Route path="/discovery/*" element={<DiscoveryPage />} />
                    <Route path="/validation" element={<ValidationPage />} />
                    <Route path="/validation/*" element={<ValidationPage />} />
                    <Route path="/development" element={<DevelopmentPage />} />
                    <Route path="/development/*" element={<DevelopmentPage />} />
                    {/* Placeholder routes for other modules */}
                    <Route path="/launch" element={<div className="text-center py-20">Módulo de Lançamento - Em Breve</div>} />
                    <Route path="/launch/*" element={<div className="text-center py-20">Módulo de Lançamento - Em Breve</div>} />
                    <Route path="/management" element={<div className="text-center py-20">Módulo de Gestão - Em Breve</div>} />
                    <Route path="/management/*" element={<div className="text-center py-20">Módulo de Gestão - Em Breve</div>} />
                    <Route path="/products" element={<div className="text-center py-20">Página de Produtos - Em Breve</div>} />
                    <Route path="/settings" element={<div className="text-center py-20">Página de Configurações - Em Breve</div>} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
