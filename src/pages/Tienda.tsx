import { Sidebar } from "@/components/Sidebar";
import { StatsCard } from "@/components/StatsCard";
import { Store, CheckCircle, Users, Send, PackageCheck, AlertTriangle, PackageX } from "lucide-react";

const stats = [
  { title: "SKU's - Solicitados", value: 55, icon: CheckCircle, color: "blue" as const },
  { title: "SKU's - Proceso", value: 1, icon: Users, color: "cyan" as const },
  { title: "SKU's - Enviados", value: 4543, icon: Send, color: "orange" as const },
  { title: "SKU's - Recibidos", value: 1301, icon: PackageCheck, color: "green" as const },
  { title: "SKU's - Discrepancia", value: 1, icon: AlertTriangle, color: "red" as const },
  { title: "SKU's - Discrepancia envío", value: 0, icon: PackageX, color: "darkred" as const },
];

const Tienda = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-6">
          {/* Store Header */}
          <div className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden animate-fade-in">
            <div className="bg-secondary p-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                <Store className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h1 className="text-xl font-bold text-white">Tienda</h1>
              </div>
            </div>

            {/* Store Info */}
            <div className="p-6 flex items-center gap-6">
              <div className="w-32 h-32 rounded-xl overflow-hidden shadow-md flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop" 
                  alt="Tienda MOBO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
                  <Store className="h-6 w-6 text-secondary" />
                  386 - Premium Outlets Querétaro
                </h2>
                <p className="text-muted-foreground">premoutsqro@mobo.com.mx</p>
                <span className="inline-block mt-3 px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-semibold rounded-full">
                  TIENDA
                </span>
              </div>
            </div>
          </div>

          {/* Alert Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-lg p-6 text-white animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Tienes 331 Solicitudes de traspaso pendientes</h3>
                <p className="text-white/90 text-sm mt-1">Revisa y gestiona tus solicitudes pendientes</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.title}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <StatsCard {...stat} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tienda;
