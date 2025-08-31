import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import { Perfil } from "./pages/Perfil";
import { Aulas } from "./pages/Aulas";
import { Turmas } from "./pages/Turmas";
import { AulaDetalhes } from "./pages/AulaDetalhes";
import { TurmaDetalhes } from "./pages/TurmaDetalhes";
import { Configuracoes } from "./pages/Configuracoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/perfil" element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            } />
            <Route path="/perfil/aulas" element={
              <ProtectedRoute>
                <Aulas />
              </ProtectedRoute>
            } />
            <Route path="/perfil/aulas/:id" element={
              <ProtectedRoute>
                <AulaDetalhes />
              </ProtectedRoute>
            } />
            <Route path="/perfil/turmas" element={
              <ProtectedRoute>
                <Turmas />
              </ProtectedRoute>
            } />
            <Route path="/perfil/turmas/:id" element={
              <ProtectedRoute>
                <TurmaDetalhes />
              </ProtectedRoute>
            } />
            <Route path="/perfil/config" element={
              <ProtectedRoute>
                <Configuracoes />
              </ProtectedRoute>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
