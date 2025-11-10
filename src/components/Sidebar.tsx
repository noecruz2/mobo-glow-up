import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { 
  Home, 
  FileText, 
  Truck, 
  Clock, 
  FileCheck, 
  ShoppingCart, 
  Package, 
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/", icon: Home },
  { name: "Solicitudes", href: "/solicitudes", icon: FileText },
  { name: "Generar envío DTA", href: "/generar-envio-dta", icon: Truck },
  { name: "Extemporáneas", href: "/extemporaneas", icon: Clock },
  { name: "Status de Demos", href: "/status-demos", icon: FileCheck },
  { name: "Productos", href: "/productos", icon: ShoppingCart, highlighted: true },
  { name: "Recepción de productos", href: "/recepcion-productos", icon: Package },
  { name: "Bitácora y discrepancias", href: "/bitacora-discrepancias", icon: AlertCircle },
];

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-sidebar text-sidebar-foreground"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 z-40 flex flex-col",
          collapsed ? "w-16" : "w-64",
          "max-lg:hidden"
        )}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
          {!collapsed && (
            <div className="flex flex-col items-center w-full">
              <h1 className="text-2xl font-bold text-sidebar-foreground tracking-wider">MOBO</h1>
              <div className="mt-3 w-full">
                <div className="aspect-square w-20 mx-auto rounded-lg overflow-hidden bg-sidebar-accent">
                  <img 
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop" 
                    alt="Tienda"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm font-semibold text-sidebar-foreground text-center mt-2">
                  Tienda N°386
                </p>
                <p className="text-xs text-sidebar-foreground/70 text-center">
                  premoutsqro@mobo.com.mx
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-all duration-200",
                  collapsed && "justify-center"
                )}
                activeClassName={cn(
                  item.highlighted 
                    ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                    : "bg-sidebar-accent text-sidebar-foreground font-medium"
                )}
              >
                <item.icon className={cn("h-5 w-5 flex-shrink-0", item.highlighted && "text-current")} />
                {!collapsed && (
                  <span className="text-sm font-medium">{item.name}</span>
                )}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Collapse Button */}
        <div className="p-2 border-t border-sidebar-border">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center p-2 rounded-lg hover:bg-sidebar-accent text-sidebar-foreground/80 hover:text-sidebar-foreground transition-colors"
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <>
                <ChevronLeft className="h-5 w-5 mr-2" />
                <span className="text-sm">Colapsar</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};
