
import { Hourglass, Focus, PenSquare, XCircle, CheckCircle, Palette, Target, BarChart } from 'lucide-react';

export default function AboutSection() {

  const challenges = [
    {
      text: "Pasar horas buscando y adaptando actividades que no siempre funcionan.",
      icon: <Hourglass className="h-6 w-6 text-destructive" />,
      bgColor: "bg-destructive/10",
    },
    {
      text: "La dificultad de encontrar materiales que realmente capten la atención de los alumnos.",
      icon: <Focus className="h-6 w-6 text-destructive" />,
      bgColor: "bg-destructive/10",
    },
    {
      text: "La sensación de falta de apoyo y de tener que crear todo desde cero.",
      icon: <PenSquare className="h-6 w-6 text-destructive" />,
      bgColor: "bg-destructive/10",
    }
  ];

  const withoutKit = [
    { text: "Horas perdidas adaptando actividades que no siempre dan resultado.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    { text: "Falta de recursos visuales listos para usar.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    { text: "Dificultad para mantener el interés y la participación del alumno.", icon: <XCircle className="h-6 w-6 text-destructive" /> },
    { text: "Necesidad de acompañar cada paso mientras el grupo avanza a otro ritmo.", icon: <XCircle className="h-6 w-6 text-destructive" /> }
  ];

  const withKit = [
    { text: "Actividades listas y adaptadas que funcionan de forma eficaz.", icon: <CheckCircle className="h-6 w-6 text-green-600" />, bgColor: "bg-green-100" },
    { text: "Recursos visuales claros y listos para uso inmediato.", icon: <Palette className="h-6 w-6 text-blue-600" />, bgColor: "bg-blue-100" },
    { text: "Facilidad para mantener el interés y la atención del alumno.", icon: <Target className="h-6 w-6 text-yellow-600" />, bgColor: "bg-yellow-100" },
    { text: "Mayor autonomía del alumno mientras el docente acompaña a toda la clase.", icon: <BarChart className="h-6 w-6 text-purple-600" />, bgColor: "bg-purple-100" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary">
            Preparar actividades para alumnos con TEA no tiene por qué ser un desafío...
          </h2>
          <p className="mt-4 text-lg text-foreground/80 font-semibold max-w-4xl mx-auto">Muchos docentes y familias pasan horas adaptando materiales, improvisando recursos visuales y buscando estrategias para mantener el interés del niño. Pero no tiene por qué ser así.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <ul className="space-y-4">
              {challenges.map((item, index) => (
                <li key={index}>
                  <div className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center text-card-foreground">
                    <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${item.bgColor}`}>
                        {item.icon}
                    </div>
                    <span className="font-semibold text-base">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
            <p className="text-lg text-foreground/80 text-center font-semibold pt-4">
              Si te identificaste con estos puntos, no estás solo. Y lo más importante: existe un camino más sencillo y ligero.
            </p>
            <p className="text-lg text-foreground text-center font-bold pt-2">
              Por eso creamos la Plataforma Geniecitos en Acción.
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* With Kit */}
          <div className="bg-darkPurple/10 p-6 rounded-xl shadow-lg border border-primary/20 order-2 md:order-2">
            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-purple-800">Con Geniecitos en Acción</h3>
             <ul className="space-y-4">
              {withKit.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 ${item.bgColor}`}>
                    {item.icon}
                  </div>
                  <span className="font-semibold text-foreground text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Without Kit */}
          <div className="bg-muted/50 p-6 rounded-xl shadow-md border border-border/20 order-1 md:order-1">
            <h3 className="font-headline text-2xl font-bold text-center mb-6 text-red-800">Sin Geniecitos en Acción</h3>
            <ul className="space-y-4">
              {withoutKit.map((item, index) => (
                <li key={index} className="flex items-center">
                   <div className="flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center mr-4 bg-red-100">
                    {item.icon}
                  </div>
                  <span className="text-foreground/80 text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
