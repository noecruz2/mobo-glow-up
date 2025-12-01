

const guides = [
  { title: "Generar envío DTA" },
  { title: "Tipos de devoluciones" },
  { title: "Movimiento de operaciones" },
  { title: "Registro de productos" },
  { title: "Conciliación discrepancias" },
  { title: "Módulo discrepancias" },
  { title: "Resolución discrepancias" },
  { title: "Descripción columnas" },
  { title: "Descripción status" },
  { title: "Inicio de sesión" },
  { title: "Confirmación DEMOS" },
  { title: "Solicitudes sin STOCK" },
];

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="max-w-7xl mx-auto p-6 lg:p-8 space-y-8">
          {/* Guides Library Section */}
          <section className="animate-fade-in">
            {/* Header with gradient */}
            <div className="bg-gradient-primary rounded-t-2xl p-6">
              <h1 className="text-2xl font-bold text-white flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                Biblioteca de Guias
              </h1>
            </div>
            
            {/* Guide Cards Grid */}
            <div className="bg-card rounded-b-2xl border border-t-0 border-border shadow-lg p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {guides.map((guide, index) => (
                  <GuideCard 
                    key={index} 
                    title={guide.title}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Help Section */}
          <HelpSection />
        </div>
      </main>
    </div>
  );
};

export default Index;
