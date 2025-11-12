import { Sidebar } from "@/components/Sidebar";
import { Package, AlertTriangle, FileText, Barcode, RefreshCw, Trash2, RotateCcw } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const RecepcionProductos = () => {
  const productos = [
    { id: 3457417, sku: "AUDCLICK2NEGRO", barras: "••••••••••••", folio: "000106TR73253", guia: "xxxxxxxxxxxxxxxxxx", descripcion: "AUDÍFONOS ALAMBRICOS MOBO SPACE NEGRO", pzasSolicitadas: "*****", pzasNapse: "Falta escanear y agregar el número de piezas", pzasGuia: "*****" },
    { id: 3457418, sku: "IPDCAIAUXILIAR", barras: "••••••••••••", folio: "000106TR73253", guia: "xxxxxxxxxxxxxxxxxx", descripcion: "CABLE AUXILIAR 3.5MM MOBO BULK BLANCO", pzasSolicitadas: "*****", pzasNapse: "Falta escanear y agregar el número de piezas", pzasGuia: "*****" },
    { id: 3457471, sku: "APPCBLADAPTICA3.5BCO", barras: "••••••••••••", folio: "000106TR73253", guia: "xxxxxxxxxxxxxxxxxx", descripcion: "CABLE APPLE ADAPTADOR TIPO C A 3.5 MM BLANCO", pzasSolicitadas: "*****", pzasNapse: "Falta escanear y agregar el número de piezas", pzasGuia: "*****" },
    { id: 3457472, sku: "PRTCAMPMPTRSIPH696324", barras: "••••••••••••", folio: "000106TR73253", guia: "xxxxxxxxxxxxxxxxxx", descripcion: "PROTECTOR DE CAMARA MOBO PREMIUM TRANSPARENTE IPHONE 16 PRO16 PRO MAX", pzasSolicitadas: "*****", pzasNapse: "Falta escanear y agregar el número de piezas", pzasGuia: "*****" },
    { id: 3457473, sku: "BLKCBLUSBATCGRS2A1M", barras: "••••••••••••", folio: "000106TR73253", guia: "xxxxxxxxxxxxxxxxxx", descripcion: "CABLE MOBO USB A - TIPO C GRIS 1A 1M BULK", pzasSolicitadas: "*****", pzasNapse: "Falta escanear y agregar el número de piezas", pzasGuia: "*****" },
    { id: 3457474, sku: "TSAMGXYA174128NGO", barras: "••••••••••••", folio: "000106TR73253", guia: "xxxxxxxxxxxxxxxxxx", descripcion: "TELEFONO CELULAR SAMSUNG GALAXY A17 4128 NEGRO", pzasSolicitadas: "*****", pzasNapse: "Falta escanear y agregar el número de piezas", pzasGuia: "*****" },
  ];

  const recepciones = [
    { id: 134642, ref: "EPAT-1017-134642", tr: "000104TR76180", guia: "xxxxxxxxxxxxxxxxxx", expedicion: "17-octubre-2025", origen: "A001", destino: "T386 - Premium Outlets Querétaro", status: "Atrasada" },
    { id: 133907, ref: "EPAT-1015-133907", tr: "000108TR45272", guia: "xxxxxxxxxxxxxxxxxx", expedicion: "15-octubre-2025", origen: "A001", destino: "T386 - Premium Outlets Querétaro", status: "Atrasada" },
    { id: 125771, ref: "EPAT-0905-125771", tr: "000114TR18214", guia: "xxxxxxxxxxxxxxxxxx", expedicion: "5-septiembre-2025", origen: "A001", destino: "T386 - Premium Outlets Querétaro", status: "Atrasada" },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      
      <main className="flex-1 lg:ml-64 transition-all duration-300">
        <div className="max-w-[1600px] mx-auto p-6 lg:p-8 space-y-6">
          {/* Header */}
          <div className="bg-card rounded-xl shadow-card border border-border/50 overflow-hidden">
            <div className="bg-gradient-to-r from-muted to-muted/50 p-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="h-5 w-5 text-primary" />
                </div>
                <h1 className="text-2xl font-bold text-foreground">Sistema de Gestión de Discrepancias</h1>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-muted/30 border-l-4 border-primary/60 p-4 m-6 rounded-md">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    <span className="font-bold">IMPORTANTE:</span> Toda discrepancia mal generada por error del usuario será{" "}
                    <span className="font-bold text-primary">rechazada automáticamente</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Manuales */}
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2 text-foreground font-semibold">
                <FileText className="h-5 w-5" />
                <h2>Manuales de Apoyo</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Descarga los manuales para identificar discrepancias y recibir productos correctamente:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Manual de Identificación de Discrepancias</h3>
                      <p className="text-sm text-muted-foreground mt-1">Guía para detectar y reportar discrepancias</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-border rounded-lg p-4 hover:shadow-md transition-all">
                  <div className="flex items-start gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">Manual de Recepción de Productos</h3>
                      <p className="text-sm text-muted-foreground mt-1">Proceso completo en Napse</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pasos del Proceso */}
            <div className="p-6 border-t border-border/50">
              <div className="flex items-center gap-2 text-foreground font-semibold mb-4">
                <Package className="h-5 w-5" />
                <h2>Pasos del Proceso</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Descarga el archivo de cotejo</h3>
                    <p className="text-sm text-muted-foreground">Obtén el archivo desde <span className="font-medium">POSONE/Napse</span> y verifica que uses el formato correcto.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Revisa los códigos de color</h3>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-stat-rose"></div>
                        <span className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Indicador 1:</span> Existe discrepancia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-stat-amber"></div>
                        <span className="text-sm text-muted-foreground"><span className="font-medium text-foreground">Indicador 2:</span> Sistema no lee correctamente</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Producto no llegó</h3>
                    <p className="text-sm text-muted-foreground">Haz clic en la <Badge variant="destructive" className="inline-flex mx-1 text-xs">caja roja</Badge> — selecciona <span className="font-medium">"PRODUCTO NO LLEGÓ"</span> — escribe un comentario obligatorio.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Corrección de piezas</h3>
                    <p className="text-sm text-muted-foreground">Si ingresaste mal las piezas, corrígelo desde el selector del SKU correspondiente.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">5</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Finalizar proceso</h3>
                    <p className="text-sm text-muted-foreground">Una vez corregidas todas las discrepancias, finaliza el proceso de recepción.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-stat-slate/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-stat-slate" />
                </div>
                <h3 className="font-semibold text-foreground">Traspaso y Guía</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Se ha asignado con éxito los traspasos con una guía a cada SKU desde el almacén. Como siguiente paso:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-slate mt-1.5"></div>
                  <span>Validar si el producto llegó con problemas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-slate mt-1.5"></div>
                  <span>Marcar discrepancia por paquetería</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-slate mt-1.5"></div>
                  <span>Usar "SKU no llegó" si es necesario</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-slate mt-1.5"></div>
                  <span>Escanear producto para validar</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-stat-gray/10 flex items-center justify-center">
                  <Barcode className="h-5 w-5 text-stat-gray" />
                </div>
                <h3 className="font-semibold text-foreground">Mercancía Escaneada</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Proceso después de escanear:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-gray mt-1.5"></div>
                  <span>Agregar piezas recibidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-gray mt-1.5"></div>
                  <span>Iniciar proceso de cotejo</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-gray mt-1.5"></div>
                  <span>Verificar coincidencia</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-stat-teal/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-stat-teal" />
                </div>
                <h3 className="font-semibold text-foreground">Mercancía Recibida</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Proceso completado:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-teal mt-1.5"></div>
                  <span>Mercancía recibida</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-teal mt-1.5"></div>
                  <span>Guía y SKU verificados</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-teal mt-1.5"></div>
                  <span>Coincidencia confirmada</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg border border-border p-5 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-stat-rose/10 flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-stat-rose" />
                </div>
                <h3 className="font-semibold text-foreground">Discrepancia</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">Este estado se activa cuando:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-rose mt-1.5"></div>
                  <span>Piezas de menos/más</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-rose mt-1.5"></div>
                  <span>SKU no coincide</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-rose mt-1.5"></div>
                  <span>Problemas paquetería</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-stat-rose mt-1.5"></div>
                  <span>Daños en mercancía</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recepcion actual */}
          <div className="bg-card rounded-xl shadow-card border border-border overflow-hidden">
            <div className="bg-primary/5 border-b border-border/50 px-6 py-4">
              <div className="flex items-center gap-3">
                <Package className="h-5 w-5 text-primary" />
                <h2 className="text-lg font-bold text-foreground">Recepción De Mercancía (Productos)</h2>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-primary">#</span> 134913
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-primary">Ref:</span> EPAT-1020-134913
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-primary">TR:</span> 000106TR73253
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-primary">Guía:</span> xxxxxxxxxxxxxxxxxx
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-primary">Expedición:</span> 20-octubre-2025
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-primary">Origen:</span> A001
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <span className="font-semibold text-muted-foreground">Destino:</span> T386 - Premium Outlets Querétaro
                </Badge>
                <Badge variant="destructive">Atrasada</Badge>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Mostrar ejemplo de archivo
                </Button>
                <Button variant="default" size="sm">
                  Cotejar masivamente (archivo Napese)
                </Button>
                <Button variant="secondary" size="sm">
                  Agregar sku con pzs de mas o sku sobrante
                </Button>
                <Button variant="destructive" size="sm">
                  Discrepancia por paquetería
                </Button>
              </div>

              <div className="bg-muted/30 border-l-4 border-destructive/60 p-4 rounded-md">
                <p className="text-sm text-foreground">
                  En caso de detectar alguna sustracción en la mercancía recibida, es obligatorio que subas la evidencia dentro de las primeras 24 horas. Recuerda que la claridad de la evidencia es fundamental para garantizar un dictamen favorable de no serlo será rechazado.
                </p>
              </div>

              {/* Tabla de productos */}
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50 border-b border-border">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">ID</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">CÓDIGO SKU</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">CÓDIGO BARRAS</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">NÚMERO FOLIO</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">NÚMERO DE GUÍA</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">DESCRIPCIÓN</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">PZAS. SOLICITADAS</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">PZAS. NAPSE</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">PZAS. CON GUÍA</th>
                      <th className="px-4 py-3 text-left font-semibold text-foreground">ACCIONES</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productos.map((producto, index) => (
                      <tr key={producto.id} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                        <td className="px-4 py-3 text-muted-foreground">{producto.id}</td>
                        <td className="px-4 py-3 font-medium text-foreground">{producto.sku}</td>
                        <td className="px-4 py-3 text-muted-foreground">{producto.barras}</td>
                        <td className="px-4 py-3 text-muted-foreground">{producto.folio}</td>
                        <td className="px-4 py-3 text-muted-foreground">{producto.guia}</td>
                        <td className="px-4 py-3 text-foreground max-w-xs">{producto.descripcion}</td>
                        <td className="px-4 py-3 text-muted-foreground">{producto.pzasSolicitadas}</td>
                        <td className="px-4 py-3 text-sm text-muted-foreground">{producto.pzasNapse}</td>
                        <td className="px-4 py-3 text-muted-foreground">{producto.pzasGuia}</td>
                        <td className="px-4 py-3">
                          <div className="flex gap-2">
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-destructive hover:text-destructive hover:bg-destructive/10">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                            <Button size="icon" variant="ghost" className="h-8 w-8 text-primary hover:text-primary hover:bg-primary/10">
                              <RotateCcw className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Lista de recepciones */}
              <div className="space-y-3 mt-6">
                {recepciones.map((recepcion) => (
                  <div key={recepcion.id} className="border border-border rounded-lg p-4 hover:shadow-md transition-all">
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-primary">#</span> {recepcion.id}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-primary">Ref:</span> {recepcion.ref}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-primary">TR:</span> {recepcion.tr}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-primary">Guía:</span> {recepcion.guia}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-primary">Expedición:</span> {recepcion.expedicion}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-primary">Origen:</span> {recepcion.origen}
                      </Badge>
                      <Badge variant="outline" className="gap-1">
                        <span className="font-semibold text-muted-foreground">Destino:</span> {recepcion.destino}
                      </Badge>
                      <Badge variant="destructive">{recepcion.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RecepcionProductos;
