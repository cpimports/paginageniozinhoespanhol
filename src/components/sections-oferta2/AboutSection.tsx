import Image from 'next/image';
import { Hourglass, Focus, PenSquare } from 'lucide-react';
import { SectionHeading, BottomLayeredWaveDivider } from '@/components/landing/ui';

const challenges = [
  { text: 'Pasar horas buscando y adaptando actividades que no siempre funcionan.', icon: Hourglass },
  { text: 'La dificultad de encontrar materiales que realmente capten la atención de los alumnos.', icon: Focus },
  { text: 'La sensación de que falta apoyo y de tener que crear todo desde cero.', icon: PenSquare },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-slate-50/90 pt-12 md:pt-16 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          className="mb-8 md:mb-10"
          title="Preparar actividades para niños con TEA no tiene por qué ser un desafío..."
          subtitle="Muchos docentes y familias pasan horas adaptando materiales, improvisando recursos visuales y buscando estrategias para mantener el interés del niño. Pero no tiene por qué ser así."
        />

        <ul className="mx-auto grid max-w-4xl gap-3.5 md:grid-cols-3">
          {challenges.map(({ text, icon: Icon }) => (
            <li
              key={text}
              className="flex items-start gap-3.5 rounded-2xl border border-rose-100 bg-white p-4 shadow-sm transition-all duration-200 hover:border-rose-200 hover:shadow-md sm:p-5"
            >
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-rose-200/70 bg-white text-rose-600 shadow-2xs">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-relaxed text-ink sm:text-[13.5px]">
                {text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-8 sm:mt-10 max-w-2xl text-center">
          <p className="text-base sm:text-lg text-ink-soft">
            Si te identificas con estos puntos, no estás solo. Y lo más importante: existe un camino más sencillo y eficaz.
          </p>
          <p className="mt-2.5 font-display text-xl font-extrabold text-ink sm:text-2xl">
            Por eso creamos la <span className="text-sky-600 font-black">Plataforma Geniecitos en Acción</span>.
          </p>
        </div>

        {/* Imagem de Comparativo Antes x Depois */}
        <div className="relative mx-auto mt-8 sm:mt-10 max-w-3xl px-2 sm:px-4">
          <Image
            src="/images/about-antes-depois.webp"
            alt="Comparativa: Con el Kit y Sin el Kit Geniecitos en Acción"
            width={1024}
            height={580}
            className="h-auto w-full object-contain drop-shadow-[0_16px_36px_rgba(27,42,74,0.12)]"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 768px, 860px"
          />
        </div>

      </div>
      <BottomLayeredWaveDivider className="text-sky-50 mt-12 md:mt-16" flip />
    </section>
  );
}
