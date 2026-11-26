import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Geniecitos en Acción - Actividades Educativas para Niños con Autismo',
  description: 'Kit completo de actividades educativas e interativas, listas para aplicar en casa o en la escuela, transformando la rutina de aprendizaje de niños con autismo (TEA).',
};

export default function VslLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/embed.html" />
      <script dangerouslySetInnerHTML={{ __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);` }} />
      <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/player.js" as="script" />
      <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
      <link rel="preload" href="https://cdn.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/6b076d2097fd30381018927a/main.m3u8" as="fetch" />
      <link rel="dns-prefetch" href="https://cdn.converteai.net" />
      <link rel="dns-prefetch" href="https://scripts.converteai.net" />
      <link rel="dns-prefetch" href="https://images.converteai.net" />
      <link rel="dns-prefetch" href="https://license.vturb.com" />
      {children}
    </>
  );
}
