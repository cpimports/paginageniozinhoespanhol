import React from 'react';
import Image from 'next/image';
import { Gift } from 'lucide-react';
import { CtaButton, SectionHeading, BottomLayeredWaveDivider } from '@/components/landing/ui';
import ScarcityBar from '@/components/landing/ScarcityBar';

const deliverables = [
  {
    src: '/images/deliverable-bundle.webp',
    alt: 'Paquete de actividades',
    title: '+1500 Actividades Adaptadas para Niños con Autismo',
    description:
      'Colección completa de actividades para estimular habilidades cognitivas, motoras y conductuales, lista para usar en el día a día.',
  },
  {
    src: '/images/deliverable-adapted.webp',
    alt: 'Actividades adaptadas para autismo',
    title: 'Actividades Lúdicas y Adaptadas',
    description:
      'Ejercicios de fácil comprensión, con estímulos visuales y lenguaje simple para promover mayor interés y participación.',
  },
  {
    src: '/images/deliverable-pdf.webp',
    alt: 'PDF Organizado',
    title: 'Acceso De Por Vida y Organizado',
    description: 'Material digital listo para imprimir, con acceso de por vida y organización por categorías.',
  },
];

const bonusImages = [
  { src: '/images/bonus-1.webp', alt: '1º Bono - Mega Paquete de +1,000 Moldes de Goma EVA' },
  { src: '/images/bonus-2.webp', alt: '2º Bono - Kit de Medallas de Reconocimiento' },
  { src: '/images/bonus-3.webp', alt: '3º Bono - +10 Juegos Inclusivos y Comprobados' },
  { src: '/images/bonus-4.webp', alt: '4º Bono - Guía de Adaptación de Actividades para Autistas' },
];

export default function BenefitsSection() {
  return (
    <section id="oque-voce-recebe" className="bg-slate-50/90 pt-16 md:pt-24 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="¿Qué Recibes al Adquirir el Kit?"
          subtitle="Actividades especialmente adaptadas para niños con autismo (TEA), enfocadas en estimular la atención y promover el desarrollo cognitivo de forma lúdica e inclusiva."
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {deliverables.map((item) => (
            <article
              key={item.title}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-slate-300"
            >
              <div className="relative aspect-video bg-slate-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-display text-lg font-extrabold leading-snug text-ink">{item.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Chamada para os Bônus fora do card */}
        <div className="mt-16 sm:mt-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-4 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider text-coral shadow-2xs">
            <Gift className="h-4 w-4 text-coral" aria-hidden="true" />
            Y eso no es todo...
          </span>
        </div>

        {/* Bônus */}
        <div className="mt-6 rounded-[2rem] bg-ink px-4 py-12 sm:px-8 md:py-16">
          <SectionHeading
            dark
            title={<span className="text-marker">+ Bonos exclusivos</span>}
            subtitle="Además del material principal, recibes gratuitamente 12 recursos extra cuidadosamente preparados para hacer tus sesiones y clases más atractivas, dinámicas e inclusivas."
            className="mb-10 md:mb-12"
          />

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2">
            {bonusImages.map((image) => (
              <div
                key={image.src}
                className="group relative overflow-hidden rounded-3xl border-2 border-white/15 bg-white/5 p-2 sm:p-3 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-marker/60 hover:bg-white/10 hover:shadow-2xl"
              >
                <div className="relative aspect-[1080/1350] w-full overflow-hidden rounded-2xl bg-white shadow-inner">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 440px"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="animate-pulse-gentle inline-block rounded-2xl border border-white/15 bg-white/5 px-6 py-4 shadow-lg">
              <p className="font-display text-2xl font-black uppercase tracking-wide text-marker md:text-3xl">
                + 8 Bonos Sorpresa
              </p>
              <p className="mt-2.5 inline-block rounded-full bg-coral px-4 py-1.5 text-xs sm:text-sm font-extrabold text-white shadow-sm">
                LIBERADOS INMEDIATAMENTE TRAS LA COMPRA 🎁🔥
              </p>
            </div>
          </div>
        </div>

        <ScarcityBar className="mt-14" />

        <div className="mt-8 flex flex-col items-center gap-3.5">
          <CtaButton href="#oferta-especial" size="lg" pulse>
            Quiero las actividades ahora <br />
            + Todos los 12 bonos incluidos
          </CtaButton>
          <Image
            src="/images/security-badges-dark.webp"
            alt="Compra Segura, Privacidad Protegida, Pago Seguro"
            width={280}
            height={42}
            className="h-auto w-52 sm:w-60 object-contain opacity-85"
            loading="lazy"
          />
        </div>
      </div>
      <BottomLayeredWaveDivider className="text-sky-50/70 mt-14 sm:mt-16" />
    </section>
  );
}
