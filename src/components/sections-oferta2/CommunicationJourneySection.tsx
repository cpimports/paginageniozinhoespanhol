'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { BrainCircuit, Users, Award, PersonStanding, Sparkles } from 'lucide-react';
import { SectionHeading, BottomCurveDivider } from '@/components/landing/ui';

// 10 imagens reais de crianças aplicando as atividades na prática:
const practiceImages = [
  '/images/pratica-1.webp',
  '/images/pratica-2.webp',
  '/images/pratica-3.webp',
  '/images/pratica-4.webp',
  '/images/pratica-5.webp',
  '/images/pratica-6.webp',
  '/images/pratica-7.webp',
  '/images/pratica-8.webp',
  '/images/pratica-9.webp',
  '/images/pratica-10.webp',
];

const benefits = [
  {
    icon: Award,
    title: 'Autonomía',
    color: 'bg-sky-100 text-sky-700',
    bar: 'bg-sky-400',
    text: 'Estimula la capacidad de tu alumno o hijo para superar desafíos y expresarse de forma independiente, fortaleciendo su confianza e independencia en las interacciones cotidianas.',
  },
  {
    icon: BrainCircuit,
    title: 'Desarrollo cognitivo',
    color: 'bg-violet-100 text-violet-700',
    bar: 'bg-violet-400',
    text: 'Estimula el desarrollo de habilidades cognitivas clave, facilitando la comprensión y gestión de emociones y potenciando la resolución de problemas de forma estructurada.',
  },
  {
    icon: PersonStanding,
    title: 'Confianza en sí mismo',
    color: 'bg-emerald-100 text-emerald-700',
    bar: 'bg-emerald-400',
    text: 'Fortalece la autoestima y la seguridad personal, brindando herramientas lúdicas para mejorar la comunicación verbal y no verbal e interactuar con entusiasmo.',
  },
  {
    icon: Users,
    title: 'Inclusión',
    color: 'bg-amber-100 text-amber-700',
    bar: 'bg-amber-400',
    text: 'Favorece la integración armónica en diferentes entornos sociales, desarrollando habilidades de relación que le permitan disfrutar de amistades y aprendizajes compartidos.',
  },
];

export default function CommunicationJourneySection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 1.6, // Velocidade balanceada e fluida (nem muito lento, nem muito rápido)
        startDelay: 0,
        stopOnInteraction: false, // Quando o usuário soltar o dedo ou mouse, volta a rodar suavemente
        stopOnMouseEnter: true, // Pausa suave ao passar o mouse por cima
      }),
    ],
  );

  return (
    <section id="communication-journey" className="bg-[#F1F5F9] pt-16 md:pt-24 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Descubre cómo nuestro kit puede transformar la comunicación de tu alumno o hijo con autismo"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, color, bar, text }) => (
            <article
              key={title}
              className="relative flex flex-col items-center text-center overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span aria-hidden="true" className={`absolute inset-x-0 top-0 h-1.5 ${bar}`} />
              <span className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${color}`}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-display text-lg font-extrabold text-ink">{title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
            </article>
          ))}
        </div>

        {/* Bloco: Atividades na prática com carrossel interativo e arrastável */}
        <div className="mt-14 sm:mt-18">
          <div className="mb-7 sm:mb-9 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-300/80 bg-sky-50 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-sky-800 shadow-2xs">
              <Sparkles className="h-3.5 w-3.5 text-sky-600" aria-hidden="true" />
              En la Práctica
            </span>
            <h3 className="mt-2.5 font-display text-xl sm:text-2xl md:text-[1.65rem] font-extrabold text-ink tracking-tight">
              Mira nuestras actividades siendo aplicadas en la práctica 💙
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-ink-soft max-w-lg mx-auto">
              Conoce momentos reales de desarrollo, aprendizaje e interacción con las actividades del kit
            </p>
          </div>

          {/* Carrossel contínuo interativo: arrastável com dedo no celular e mouse no computador */}
          <div
            ref={emblaRef}
            className="cursor-grab active:cursor-grabbing overflow-hidden py-3 select-none"
            aria-label="Carrusel de actividades en la práctica"
          >
            <div className="flex touch-pan-y gap-4 sm:gap-5">
              {practiceImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="shrink-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm shadow-slate-900/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[3/4] w-[210px] overflow-hidden rounded-xl bg-slate-100 sm:w-[260px] md:w-[290px]">
                    <Image
                      src={src}
                      alt="Niño realizando actividad adaptada en la práctica"
                      fill
                      className="object-cover pointer-events-none select-none"
                      sizes="(max-width: 640px) 210px, (max-width: 768px) 260px, 290px"
                      loading={index < 4 ? 'eager' : 'lazy'}
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomCurveDivider className="text-white mt-12 md:mt-16" />
    </section>
  );
}
