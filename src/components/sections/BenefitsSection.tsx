'use client';

import React, { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Progress } from '@/components/ui/progress';
import { useProgress } from '@/hooks/useProgress';

const deliverables = [
  {
    icon: <Image src="/images/deliverable-bundle.webp" alt="Paquete de actividades" data-ai-hint="activity bundle" width={64} height={64} loading="lazy"/>,
    title: 'Más de 1.500 Actividades Adaptadas para Niños con Autismo',
    description: 'Colección completa de actividades para estimular habilidades cognitivas, motoras y conductuales, lista para usar en el día a día.',
    titleClassName: 'font-headline text-2xl text-primary', 
  },
  {
    icon: <Image src="/images/deliverable-adapted.webp" alt="Actividades adaptadas para autismo" data-ai-hint="playful adapted activities" width={64} height={64} loading="lazy" />,
    title: 'Actividades Lúdicas y Adaptadas',
    description: 'Ejercicios de fácil comprensión, con estímulos visuales y lenguaje sencillo para promover una mayor participación.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
  {
    icon: <Image src="/images/deliverable-pdf.webp" alt="PDF Organizado" data-ai-hint="organized pdf" width={64} height={64} loading="lazy" />,
    title: 'Acceso Vitalicio y Organizado',
    description: 'Material digital listo para imprimir, con acceso de por vida y organizado por categorías temáticas.',
    titleClassName: 'font-headline text-2xl text-primary',
  },
];

const bonusImages = [
    { src: '/images/bonus-1.webp', alt: '1º Bono - Mega Paquete de +1,000 Moldes de Goma EVA', hint: 'bonus eva molds' },
    { src: '/images/bonus-2.webp', alt: '2º Bono - Kit de Medallas de Reconocimiento', hint: 'bonus recognition medals' },
    { src: '/images/bonus-3.webp', alt: '3º Bono - +10 Juegos Inclusivos y Comprobados', hint: 'bonus inclusive games' },
    { src: '/images/bonus-4.webp', alt: '4º Bono - Guía de Adaptación de Actividades para Autistas', hint: 'bonus adaptation guide' },
];

export default function BenefitsSection() {
    const progressRef = useRef<HTMLDivElement>(null);
    const progress = useProgress(progressRef);

  return (
    <section id="oque-voce-recebe" className="py-16 md:py-24 relative bg-gradient-to-br from-background to-muted/30">
      {/* CSS-only subtle texture pattern instead of external texture URL */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none -z-10"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)' }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary">
            ¿Qué Recibes al Adquirir el Kit?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/70">
            Actividades especialmente adaptadas para niños con autismo (TEA), enfocadas en estimular la atención y promover el desarrollo cognitivo de forma lúdica e inclusiva.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/90 backdrop-blur-sm flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                 <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={(item.icon as React.ReactElement).props.src}
                      alt={(item.icon as React.ReactElement).props.alt}
                      data-ai-hint={(item.icon as React.ReactElement).props['data-ai-hint']}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                 <CardTitle className={'font-headline text-xl text-primary mt-4 mb-2 flex-grow'}>{item.title}</CardTitle>
                <p className="text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
           <div className="flex items-center justify-center text-center">
            <span className="flex-1 border-t-2 border-dashed border-foreground/20"></span>
            <p className="text-lg text-foreground/80 font-semibold italic animate-pulse px-4">
              Y aún hay más...
            </p>
            <span className="flex-1 border-t-2 border-dashed border-foreground/20"></span>
          </div>
        </div>

        <div className="text-center mt-8">
          <h3 className="font-merriweather text-3xl sm:text-4xl font-semibold text-yellow-500 drop-shadow-md">
            + BONOS EXCLUSIVOS
          </h3>
          <p className="mt-3 text-lg text-foreground/80 max-w-2xl mx-auto font-semibold">
            Además del material principal, recibes completamente gratis recursos extras cuidadosamente preparados para hacer tus clases y sesiones más atractivas, dinámicas e inclusivas.
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bonusImages.map((image, index) => (
                <div key={index} className="w-full">
                    <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-sm mx-auto md:max-w-none">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            data-ai-hint={image.hint}
                            width={819}
                            height={1024}
                            className="w-full h-auto block rounded-2xl"
                            sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 512px"
                            loading="lazy"
                        />
                    </div>
                </div>
            ))}
          </div>

          <div className="my-12 text-center max-w-4xl mx-auto">
              <div className="inline-block animate-pulse-yellow-cta">
                <h4 className="text-2xl md:text-3xl font-extrabold text-yellow-500 uppercase tracking-wide drop-shadow-lg">
                  + 8 Bonos Sorpresa
                </h4>
                <div className="mt-2 inline-block bg-red-600 text-white px-4 py-1 rounded-md shadow-lg">
                  <p className="text-base md:text-lg font-bold">
                    ¡DISPONIBLES TRAS LA COMPRA! 🎁🔥
                  </p>
                </div>
              </div>
          </div>
        </div>

        <div ref={progressRef} className="mt-12 max-w-2xl mx-auto text-center">
            <p className="font-bold text-foreground mb-2">¡Atención! Esta oferta exclusiva terminará en instantes. ¡No pierdas la oportunidad de asegurar todo ahora!</p>
          <div className="bg-yellow-100/70 border-2 border-yellow-300 rounded-lg p-4 shadow-md">
            <p className="font-semibold text-yellow-900 mb-2">
                ⏳ ¡El {Math.floor(progress)}% de los kits promocionales ya han sido vendidos!
            </p>
            <Progress value={progress} className="w-full h-3 bg-gray-200 [&>div]:bg-yellow-400" />
            <p className="text-sm text-yellow-800 mt-2 font-medium">
                Kits disponibles al precio promocional
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Button 
            size="lg" 
            asChild 
            className="shadow-lg hover:shadow-xl bg-yellow-400 hover:bg-yellow-500 text-black font-semibold animate-pulse-yellow-cta transition-shadow"
          >
            <a href="#oferta-especial">
              ¡QUIERO LAS ACTIVIDADES AHORA + BONOS!
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
