'use client';

import React from 'react';
import Image from 'next/image';
import { CtaButton, SectionHeading, BottomWaveDivider } from '@/components/landing/ui';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { Home, School, Stethoscope } from 'lucide-react';

const activityImages = [
  '/images/activity-6.webp',
  '/images/activity-1.webp',
  '/images/activity-2.webp',
  '/images/activity-3.webp',
  '/images/activity-4.webp',
  '/images/activity-5.webp',
  '/images/activity-7.webp',
  '/images/activity-8.webp',
  '/images/activity-9.webp',
  '/images/activity-10.webp',
  '/images/activity-11.webp',
  '/images/activity-12.webp',
  '/images/activity-13.webp',
];

const places = [
  { icon: School, label: 'En la escuela' },
  { icon: Home, label: 'En casa' },
  { icon: Stethoscope, label: 'En el consultorio' },
];

export default function KitDescriptionSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 1.6, // Mesma velocidade balanceada e fluida
        startDelay: 0,
        stopOnInteraction: false, // Ao soltar, volta a rodar automaticamente
        stopOnMouseEnter: true, // Pausa ao passar o mouse
      }),
    ],
  );

  return (
    <section id="kit-description" className="relative overflow-hidden bg-sky-50 pt-16 md:pt-24 pb-0">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              El Kit que estimula el <span className="text-sky-600 font-black">desarrollo de niños con autismo</span> y
              facilita tu rutina diaria
            </>
          }
          subtitle="Más de 1500 actividades lúdicas e inclusivas para niños con autismo, creadas para estimular la concentración, el lenguaje, la interacción social y el desarrollo cognitivo."
        />

        <div className="mx-auto -mt-6 mb-10 flex max-w-2xl flex-col items-center gap-4 text-center">
          <p className="text-ink-soft">
            El material es 100% digital, disponible en nuestra plataforma en PDF listo para imprimir y usar
            de inmediato en casa, en la escuela o en el consultorio.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {places.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-sky-200 bg-white px-3 py-1.5 text-sm font-semibold text-ink"
              >
                <Icon className="h-4 w-4 text-sky-600" aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mx-auto mb-6 sm:mb-8 max-w-lg text-center font-display text-lg font-extrabold leading-snug tracking-tight text-ink sm:text-xl md:text-2xl">
            Mira algunas de las actividades <br />
            que incluye <span className="text-sky-600">el kit</span>
          </h3>

          {/* Carrossel contínuo interativo: arrastável com dedo no celular e mouse no computador */}
          <div
            ref={emblaRef}
            className="cursor-grab active:cursor-grabbing overflow-hidden py-3 select-none"
            aria-label="Carrusel de vista previa de actividades"
          >
            <div className="flex touch-pan-y gap-4 sm:gap-5">
              {activityImages.map((src, index) => (
                <div
                  key={`${src}-${index}`}
                  className="shrink-0 overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-2.5 shadow-sm shadow-slate-900/5 transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="relative aspect-[4/5] w-[210px] overflow-hidden rounded-xl bg-slate-100 sm:w-[260px] md:w-[290px]">
                    <Image
                      src={src}
                      alt="Ejemplo de actividad adaptada"
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

          <p className="mx-auto mt-8 max-w-xl text-center text-ink-soft">
            ¡Estas son solo algunas de las{' '}
            <strong className="text-ink">más de 1500 actividades exclusivas</strong> que recibes en la Plataforma
            Geniecitos en Acción!
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <CtaButton href="#oferta-especial" size="lg" pulse>
            ¡Quiero acceder al material ahora!
          </CtaButton>
        </div>
      </div>
      <BottomWaveDivider className="text-[#F1F5F9] mt-12 md:mt-16" />
    </section>
  );
}
