import { Sidebar } from "@/components/Sidebar";
import { ShoppingCart } from "lucide-react";

const Productos = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto p-6 lg:p-8">
          <div className="bg-card rounded-2xl border border-border shadow-lg p-8 animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-3xl font-bold text-foreground">Productos</h1>
            </div>
            <p className="text-muted-foreground">
              Página de productos en construcción            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Productos;
