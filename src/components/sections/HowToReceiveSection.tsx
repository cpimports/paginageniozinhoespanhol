import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: <span className="text-4xl">📲</span>,
    title: 'ACCEDE A NUESTRA PLATAFORMA EXCLUSIVA',
    description: 'Ten todo el material en un solo lugar: en nuestra plataforma exclusiva, práctica y organizada para ti.',
  },
  {
    icon: <span className="text-4xl">🖨️</span>,
    title: 'ACCEDE E IMPRIME CUANDO QUIERAS',
    description: 'Descarga e imprime cuando y cuantas veces prefieras, con acceso para siempre.',
  },
  {
    icon: <span className="text-4xl">▶️</span>,
    title: 'APLICA TU KIT DE INMEDIATO',
    description: 'Ponlo en práctica con tus alumnos o hijos y observa los avances día tras día.',
  },
];

export default function HowToReceiveSection() {
  return (
    <section id="how-to-receive" className="py-16 md:py-24 bg-background">
      {/* Background image and overlay removed */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8"> {/* Removed relative z-0 */}
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-2xl sm:text-3xl font-semibold text-primary">
            MIRA CÓMO RECIBIR TU MATERIAL
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 h-12 w-12 flex items-center justify-center">
                  {step.icon}
                </div>
                <CardTitle className="font-headline text-xl text-primary">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-foreground/70">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
