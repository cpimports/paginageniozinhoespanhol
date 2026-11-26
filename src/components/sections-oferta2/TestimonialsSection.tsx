'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Star, CheckCircle2, PlayCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import DynamicCounterBanner from './DynamicCounterBanner';
import { SectionHeading, BottomCurveDivider } from '@/components/landing/ui';

const hostedVideos = [
  { videoUrl: '/videos/testimonio-1.mp4', posterUrl: '/videos/poster-1.webp', title: 'Testimonio 1 - Experiencia con el Kit' },
  { videoUrl: '/videos/testimonio-2.mp4', posterUrl: '/videos/poster-2.webp', title: 'Testimonio 2 - Docente en Aula' },
  { videoUrl: '/videos/testimonio-4.mp4', posterUrl: '/videos/poster-4.webp', title: 'Testimonio 3 - Familia y Aprendizaje' },
];

const commentsData = [
  {
    id: 1,
    avatarUrl: '/images/avatar-carla.webp',
    name: 'Carla Monteiro',
    role: 'Educadora Infantil',
    text: 'Siempre perdía horas preparando actividades inclusivas, pero ahora todo ya está listo y organizado. Esta plataforma transformó por completo mi rutina y facilitó muchísimo mi planificación, me encantó 🥰',
  },
  {
    id: 2,
    avatarUrl: '/images/avatar-vanessa.webp',
    name: 'Vanessa Santos',
    role: 'Docente hace 12 años',
    text: '¡Soy profesora hace 12 años y nunca había encontrado un material tan completo y adaptado para niños con autismo! La variedad de actividades lúdicas es increíble, logro enganchar a mis alumnos como nunca antes.',
  },
  {
    id: 3,
    avatarUrl: '/images/avatar-andre.webp',
    name: 'André Ferreira',
    role: 'Terapeuta Ocupacional',
    text: 'Como terapeuta, siempre busco materiales que unan didáctica con accesibilidad. Geniecitos en Acción lo logra con excelencia. Las familias de mis pacientes están encantadas de poder aplicarlo en casa también.',
  },
  {
    id: 4,
    avatarUrl: '/images/avatar-raquel.webp',
    name: 'Raquel Teodoro',
    role: 'Mamá de Manoela (TEA Nivel 2)',
    text: 'Soy mamá de Manoela, ella tiene autismo nivel 2 y sé lo difícil que es sentir que tu hija enfrenta más obstáculos. Geniecitos en Acción trajo ligereza a nuestra rutina, hacemos una actividad al día y ya notamos un cambio enorme. ¡Es maravilloso!',
  },
];

const VideoCard = ({ title, videoUrl, posterUrl }: { title: string; videoUrl: string; posterUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-3xl border-4 border-white bg-slate-900 shadow-[0_10px_30px_-10px_rgba(27,42,74,0.45)] group">
      <video
        ref={videoRef}
        controls={isPlaying}
        poster={posterUrl}
        preload="metadata"
        src={videoUrl}
        playsInline
        className="h-full w-full object-cover"
        aria-label={title}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Tu navegador no soporta la etiqueta de video.
      </video>

      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={`Reproducir ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer group"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/95 text-white flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 border-2 border-white/80">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

const CommentCard = ({ comment }: { comment: (typeof commentsData)[number] }) => (
  <article className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg">
    <div>
      {/* Cabeçalho do Card: Avaliação por estrelas e Badge de Verificado */}
      <div className="mb-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-1 text-amber-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
          ))}
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-100">
          <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
          Compra verificada
        </span>
      </div>

      {/* Texto do Depoimento */}
      <p className="text-sm sm:text-base leading-relaxed text-ink font-medium">
        &ldquo;{comment.text}&rdquo;
      </p>
    </div>

    {/* Autor: Foto, Nome e Cargo/Perfil */}
    <div className="mt-6 flex items-center gap-3.5 border-t border-slate-100 pt-5">
      <div className="relative">
        <Image
          src={comment.avatarUrl}
          alt={comment.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover border-2 border-sky-100 shadow-2xs"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-display text-base font-extrabold text-ink truncate">
          {comment.name}
        </h4>
        <p className="text-xs font-semibold text-sky-700">
          {comment.role}
        </p>
      </div>
    </div>
  </article>
);

export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [loadVideos, setLoadVideos] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Só carrega os vídeos quando a seção está chegando na tela (economiza dados no celular)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadVideos(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handleDotClick = useCallback((index: number) => api?.scrollTo(index), [api]);

  return (
    <section ref={sectionRef} id="testimonios" className="bg-sky-50/70 pt-16 md:pt-24 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="¡Testimonios reales sobre Geniecitos en Acción!"
          subtitle="Descubre cómo Geniecitos en Acción está facilitando el trabajo de docentes y familias, acelerando el aprendizaje de niños con autismo."
          className="mb-8 md:mb-10"
        />
        <div className="mb-12 flex justify-center">
          <DynamicCounterBanner />
        </div>

        <div className="mx-auto max-w-xl">
          <Carousel
            setApi={setApi}
            opts={{ align: 'center', loop: true }}
            className="relative mx-auto w-full px-12 sm:px-16"
          >
            <CarouselContent>
              {hostedVideos.map((video) => (
                <CarouselItem key={video.videoUrl} className="basis-full flex justify-center">
                  <VideoCard title={video.title} videoUrl={video.videoUrl} posterUrl={video.posterUrl} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              aria-label="Video anterior"
              className="flex left-0 sm:-left-3 md:-left-6 h-10 w-10 sm:h-11 sm:w-11 border-2 border-ink bg-white text-ink shadow-md hover:bg-sky-100 transition-colors z-20"
            />
            <CarouselNext
              aria-label="Próximo video"
              className="flex right-0 sm:-right-3 md:-right-6 h-10 w-10 sm:h-11 sm:w-11 border-2 border-ink bg-white text-ink shadow-md hover:bg-sky-100 transition-colors z-20"
            />
          </Carousel>
          <div className="mt-6 flex items-center justify-center gap-3 py-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  'h-3 rounded-full transition-all duration-300 ease-in-out cursor-pointer',
                  current === index ? 'w-8 bg-primary shadow-md' : 'w-3 bg-ink/20 hover:bg-ink/40',
                )}
                aria-label={`Ir al video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto mt-14 sm:mt-16 text-center">
          <h3 className="font-display text-lg font-extrabold text-ink sm:text-xl md:text-2xl">
            Comentarios de Clientes Satisfechos
          </h3>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-5 sm:gap-6 md:grid-cols-2">
          {commentsData.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <BottomCurveDivider className="text-[#FFFBF3] mt-12 md:mt-16" inverted />
    </section>
  );
}
