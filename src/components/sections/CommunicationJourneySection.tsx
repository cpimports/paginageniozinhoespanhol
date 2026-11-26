'use client';

import { BrainCircuit, Users, Award, PersonStanding } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Award className="h-12 w-12 text-blue-500" />,
    title: 'AUTONOMÍA',
    text: 'Estimula la capacidad del niño para superar desafíos y expresarse de forma independiente, fortaleciendo su seguridad y autonomía en las interacciones cotidianas y en su desarrollo personal.',
  },
  {
    icon: <BrainCircuit className="h-12 w-12 text-purple-500" />,
    title: 'DESARROLLO COGNITIVO',
    text: 'Estimula el desarrollo de las habilidades cognitivas, ayudándolo a comprender y gestionar emociones, mejorando su resolución de problemas y promoviendo un pensamiento más claro y estructurado.',
  },
  {
    icon: <PersonStanding className="h-12 w-12 text-green-500" />,
    title: 'CONFIANZA EN SÍ MISMO',
    text: 'Fortalece la autoestima y la seguridad personal, brindándole herramientas para identificar y regular emociones, enriqueciendo su comunicación verbal y no verbal para interactuar positivamente.',
  },
  {
    icon: <Users className="h-12 w-12 text-yellow-500" />,
    title: 'INCLUSIÓN',
    text: 'Favorece la integración del niño en diferentes entornos sociales y escolares, desarrollando habilidades de comunicación y convivencia que lo ayuden a crear vínculos significativos.',
  },
];

export default function CommunicationJourneySection() {
  return (
    <section id="communication-journey" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-bold text-primary">
            Descubre cómo nuestro kit puede transformar el proceso de comunicación de tu alumno o hijo con autismo
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-card text-center shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col p-6">
              <CardHeader className="items-center p-0 mb-4">
                <div className="p-4 bg-primary/10 rounded-full inline-block">
                  {benefit.icon}
                </div>
              </CardHeader>
              <CardTitle className="font-headline text-xl text-primary mb-2">{benefit.title}</CardTitle>
              <CardContent className="p-0 flex-grow">
                <p className="text-foreground/70">{benefit.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
