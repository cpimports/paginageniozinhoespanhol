
'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import DynamicCounterBanner from '@/components/shared/DynamicCounterBanner';

const hostedVideos = [
    { videoUrl: "/videos/testimonio-1.mp4", posterUrl: "/videos/poster-1.webp", title: "Testimonio 1 - Experiencia con el Kit" },
    { videoUrl: "/videos/testimonio-2.mp4", posterUrl: "/videos/poster-2.webp", title: "Testimonio 2 - Docente en Aula" },
    { videoUrl: "/videos/testimonio-4.mp4", posterUrl: "/videos/poster-4.webp", title: "Testimonio 3 - Familia y Aprendizaje" },
];

const commentsData = [
  {
    id: 1,
    avatarUrl: '/images/avatar-carla.webp',
    avatarFallback: 'CM',
    name: 'Carla Monteiro',
    time: '5h',
    text: 'Siempre perdía horas preparando actividades adaptadas, pero ahora todo está listo y perfectamente organizado. Esta plataforma transformó por completo mi rutina en el aula y facilitó muchísimo mi planificación, me encantó 🥰',
    reactions: { like: 122, love: 15, haha: 2 },
    reply: {
      avatarUrl: '/images/logo.webp',
      name: 'Geniecitos en Acción',
      time: '4h',
      text: '¡Qué alegría leer esto, Carla! 💙 Nuestro propósito es precisamente facilitar la labor docente y hacer el aprendizaje mucho más inclusivo, ameno y efectivo.',
    },
  },
  {
    id: 2,
    avatarUrl: '/images/avatar-vanessa.webp',
    avatarFallback: 'VS',
    name: 'Vanessa Santos',
    time: '2h',
    text: '¡Soy docente desde hace 12 años y nunca encontré un material tan completo y adaptado para niños con autismo! La variedad de actividades lúdicas es increíble, logro captar el interés de mis alumnos como antes era muy difícil.',
    reactions: { like: 89, love: 5 },
  },
  {
    id: 3,
    avatarUrl: '/images/avatar-andre.webp',
    avatarFallback: 'AF',
    name: 'André Ferreira',
    time: '1d',
    text: 'Como terapeuta, siempre busco materiales que unan pedagogía con accesibilidad real. Geniecitos en Acción cumple con creces. Las familias de mis pacientes están encantadas de poder aplicarlo también en casa.',
    reactions: { like: 256, love: 30, haha: 1 },
    reply: {
      avatarUrl: '/images/logo.webp',
      name: 'Geniecitos en Acción',
      time: '23h',
      text: '¡Muchas gracias por tus palabras, André! Saber que el material es valorado y respaldado por profesionales como tú nos confirma que estamos en el camino correcto. ¡Un abrazo!',
    },
  },
  {
    id: 4,
    avatarUrl: '/images/avatar-raquel.webp',
    avatarFallback: 'RT',
    name: 'Raquel Teodoro',
    time: '3d',
    text: 'Soy mamá de Manoela, ella tiene autismo grado 2 y sé lo difícil que es ver a otros niños avanzar mientras mi hija enfrenta mayores retos. Geniecitos en Acción trajo tranquilidad a nuestro hogar: hacemos una actividad al día y los avances se notan. ¡Es maravilloso!',
    reactions: { like: 412, love: 55 },
  },
];


// Video player com capa (poster) de carregamento instantâneo
const VideoFacade = ({ title, videoUrl, posterUrl }: { title: string; videoUrl: string; posterUrl: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-sky-400/20 border-2 border-white/20 group">
      <video
        ref={videoRef}
        controls={isPlaying}
        poster={posterUrl}
        preload="metadata"
        src={videoUrl}
        playsInline
        className="w-full h-full object-cover"
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
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl transition-transform transform group-hover:scale-110 border-2 border-white/80">
            <svg className="w-8 h-8 sm:w-10 sm:h-10 ml-1 fill-white" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};


const FacebookComment = ({ comment }: { comment: typeof commentsData[0] }) => {
  const totalReactions = Object.values(comment.reactions).reduce((a, b) => a + b, 0);

  return (
    <div className="flex space-x-3 w-full">
      <Avatar className="h-10 w-10 flex-shrink-0">
        <Image src={comment.avatarUrl} alt={comment.name} data-ai-hint="person portrait" width={40} height={40} className="object-cover" loading="lazy" sizes="40px" />
        <AvatarFallback>{comment.avatarFallback}</AvatarFallback>
      </Avatar>
      <div className="flex-grow">
        <div className="bg-gray-700/50 rounded-xl p-3 relative">
          <p className="font-semibold text-white text-sm">{comment.name}</p>
          <p className="text-gray-200 text-sm">{comment.text}</p>
          {totalReactions > 0 && (
            <div className="absolute -bottom-4 right-2 flex items-center bg-gray-800 rounded-full px-2 py-0.5 shadow-md border border-gray-700">
              <ThumbsUp className="h-3 w-3 text-blue-500" fill="currentColor"/>
              <Heart className="h-3 w-3 text-red-500 ml-0.5" fill="currentColor"/>
              <span className="text-xs text-gray-300 ml-1.5 font-medium">{totalReactions}</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1 px-3">
          <button className="font-semibold hover:underline">Me gusta</button>
          <button className="font-semibold hover:underline">Responder</button>
          <span>{comment.time}</span>
        </div>
        
        {comment.reply && (
          <div className="flex space-x-3 mt-3">
            <Avatar className="h-8 w-8 flex-shrink-0">
                <Image src={comment.reply.avatarUrl} alt={comment.reply.name} data-ai-hint="company logo" width={32} height={32} className="object-cover" loading="lazy" sizes="32px"/>
                <AvatarFallback>GA</AvatarFallback>
            </Avatar>
             <div className="flex-grow">
              <div className="bg-gray-700/50 rounded-xl p-3">
                <p className="font-semibold text-white text-sm">{comment.reply.name}</p>
                <p className="text-gray-200 text-sm">{comment.reply.text}</p>
              </div>
              <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1 px-3">
                <button className="font-semibold hover:underline">Me gusta</button>
                <button className="font-semibold hover:underline">Responder</button>
                <span>{comment.reply.time}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [loadVideos, setLoadVideos] = useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

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
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = useCallback((index: number) => {
    api?.scrollTo(index);
  }, [api]);

  return (
    <section ref={sectionRef} id="testimonios" className="py-16 md:py-24 bg-gradient-to-br from-indigo-800 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 filter blur-3xl pointer-events-none">
        <div className="absolute top-[-15%] left-[-20%] w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-slow"></div>
        <div className="absolute top-[10%] right-[-25%] w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_75%)] rounded-full animate-cloud-drift-medium opacity-80"></div>
        <div className="absolute bottom-[-10%] left-[5%] w-[450px] h-[250px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_65%)] rounded-full animate-cloud-drift-slow opacity-90"></div>
        <div className="absolute bottom-[5%] right-[0%] w-[300px] h-[200px] bg-[radial-gradient(ellipse_at_center,theme(colors.sky.400)_0%,transparent_70%)] rounded-full animate-cloud-drift-medium"></div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-[25%] left-[85%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[75%] left-[15%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[80%] left-[90%] w-1.5 h-1.5 bg-white rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[5%] left-[60%] w-1 h-1 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-white rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute bottom-[10%] left-[70%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[15%] left-[5%] w-0.5 h-0.5 bg-sky-100 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-[30%] left-[70%] w-1 h-1 bg-white rounded-full filter blur-[0.8px] animate-twinkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-sky-200 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-[85%] left-[55%] w-0.5 h-0.5 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-[5%] left-[35%] w-1 h-1 bg-sky-300 rounded-full filter blur-[1px] animate-twinkle" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute top-[65%] left-[95%] w-1 h-1 bg-white rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '2.8s' }}></div>
        <div className="absolute bottom-[20%] right-[10%] w-0.5 h-0.5 bg-sky-200 rounded-full filter blur-[0.5px] animate-twinkle" style={{ animationDelay: '3.2s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-white mb-4 drop-shadow-md">
            ¡Testimonios reales sobre Geniecitos en Acción!
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Descubre cómo Geniecitos en Acción está facilitando el trabajo de docentes y familias, acelerando el aprendizaje de niños con autismo.
          </p>
           <div className="mt-8">
            <DynamicCounterBanner />
          </div>
        </div>
        
        <div className="mb-16">
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
          >
            <CarouselContent>
              {hostedVideos.map((video, index) => (
                <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                  <div className="p-1">
                    <VideoFacade title={video.title} videoUrl={video.videoUrl} posterUrl={video.posterUrl} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Diapositiva anterior" className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
            <CarouselNext aria-label="Próxima diapositiva" className="text-white bg-primary/50 hover:bg-primary/70 border-0 disabled:bg-slate-700/30 disabled:text-slate-400" />
          </Carousel>
          <div className="flex justify-center items-center space-x-3 mt-6 py-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "h-3 rounded-full transition-all duration-300 ease-in-out cursor-pointer",
                  current === index 
                    ? "w-8 bg-yellow-400 shadow-lg shadow-yellow-400/50" 
                    : "w-3 bg-white/40 hover:bg-white/70"
                )}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto mt-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white text-center mb-6">Comentarios de Clientes Satisfechos</h3>
            <div className="space-y-6">
              {commentsData.map((comment) => (
                <FacebookComment key={comment.id} comment={comment} />
              ))}
            </div>
            <div className="text-center text-gray-400 mt-8 pt-4 border-t border-slate-700">
              <p className="text-sm font-semibold hover:text-white transition-colors cursor-pointer">
                y más de 3.251 comentarios...
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
