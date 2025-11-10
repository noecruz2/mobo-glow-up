import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Productos from "./pages/Productos";
import Tienda from "./pages/Tienda";
import RecepcionProductos from "./pages/RecepcionProductos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/biblioteca-guias" element={<Index />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/solicitudes" element={<Tienda />} />
          <Route path="/generar-envio-dta" element={<Index />} />
          <Route path="/extemporaneas" element={<Index />} />
          <Route path="/status-demos" element={<Index />} />
          <Route path="/recepcion-productos" element={<RecepcionProductos />} />
          <Route path="/bitacora-discrepancias" element={<Index />} />
          <Route path="/historial" element={<Index />} />
          <Route path="/ayuda" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
