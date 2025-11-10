import { Video, FileDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const videoResources = [
  {
    title: "¿Te perdiste de la capacitación en línea?",
    action: "Ver capacitación",
    note: "(Debes estar suscrito al canal Soporte UM)",
  },
  {
    title: '¿Te perdiste de la capacitación de la *NUEVA ACTUALIZACIÓN?',
    action: "Ver capacitación",
    note: "(Debes estar suscrito al canal Soporte UM)",
  },
];

const guideResources = [
  {
    title: "Guía asignación de Folio *NUEVA ACTUALIZACIÓN",
    action: "Descargar guía",
  },
  {
    title: "Guía asignación de Guías *NUEVA ACTUALIZACIÓN",
    action: "Descargar guía",
  },
];

export const HelpSection = () => {
  return (
    <section className="animate-fade-in">
      {/* Header with gradient */}
      <div className="bg-gradient-accent rounded-t-2xl p-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <ExternalLink className="h-5 w-5 text-white" />
          </div>
          Centro de Ayuda y Actualizaciones
        </h2>
      </div>

      {/* Content */}
      <div className="bg-card rounded-b-2xl border border-t-0 border-border shadow-lg p-8">
        <div className="space-y-8">
          {/* Video Resources */}
          <div className="space-y-4">
            {videoResources.map((resource, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-destructive to-destructive/80 flex items-center justify-center flex-shrink-0">
                  <Video className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground mb-2">
                    {resource.title}
                  </p>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-destructive hover:text-destructive/80 font-medium"
                  >
                    {resource.action}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">
                    {resource.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-border" />

          {/* Guide Resources */}
          <div className="space-y-4">
            {guideResources.map((guide, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0">
                  <FileDown className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground mb-2">
                    {guide.title}
                  </p>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-primary hover:text-primary/80 font-medium"
                  >
                    {guide.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
