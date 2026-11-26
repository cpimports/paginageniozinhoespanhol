import type {Metadata} from 'next';
import { Inter, Alegreya, Merriweather } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import SocialProofNotification from '@/components/shared/SocialProofNotification';
import UTMHandler from '@/components/shared/UTMHandler';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const alegreya = Alegreya({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-alegreya',
});

const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  style: 'italic',
  variable: '--font-merriweather',
});

export const metadata: Metadata = {
  title: 'Geniecitos en Acción - Actividades Educativas para Niños con Autismo',
  description: 'Kit completo de actividades educativas e interactivas, listas para aplicar en casa o en la escuela, transformando la rutina de aprendizaje de niños con autismo (TEA).',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${alegreya.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <head>
        {/* VTurb Turbo Preload & Smart Timing */}
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/embed.html" />
        <script dangerouslySetInnerHTML={{ __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);` }} />
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/6b076d2097fd30381018927a/main.m3u8" as="fetch" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://license.vturb.com" />
        <link rel="preconnect" href="https://scripts.converteai.net" />
        <link rel="preconnect" href="https://cdn.converteai.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.converteai.net" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js" as="script" />

        {/* Preconnect to critical third-party origins */}
        <link rel="preload" href="/images/logo.webp" as="image" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />

        {/* Utmify Script 1: Pixel Loader Oficial */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "689374be46b9142a86a43379";
              var a = document.createElement("script");
              a.setAttribute("async", "");
              a.setAttribute("defer", "");
              a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
              document.head.appendChild(a);
            `,
          }}
        />

        {/* Utmify Script 2: Captura Oficial de UTMs dos Anúncios e Repasse para o Checkout */}
        <script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-subids
          async
          defer
        ></script>
      </head>
      <body className="font-body antialiased">
        
        <AnnouncementBar />
        {children}
        <Toaster />
        <SocialProofNotification />
        {/* Configurado para capturar e persistir UTMs e anexar nos links dos domínios de checkout */}
        <UTMHandler checkoutDomains={["pay.cakto.com.br", "loja.geniozinhoemacao.com.br"]} />
        
        {/* InitiateCheckout Event Script for UTMify - Rastreamento garantido com repasse de UTMs para checkout */}
        <Script id="initiate-checkout-tracker" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              const checkoutButton = e.target && e.target.closest('#btn-comprar, a[href*="pay.cakto.com.br"], a[href*="loja.geniozinhoemacao.com.br"]');
              if (checkoutButton) {
                e.preventDefault();

                // 1. Rastrear evento InitiateCheckout no Pixel da Utmify
                try {
                  if (window.utmify_pixel && typeof window.utmify_pixel.track === 'function') {
                    window.utmify_pixel.track('InitiateCheckout');
                  }
                } catch (err) {}

                // 2. Garantir que o link do checkout leve 100% dos parâmetros UTM capturados
                var targetHref = checkoutButton.href;
                try {
                  var storedUtms = localStorage.getItem('utms');
                  if (storedUtms && !targetHref.includes('utm_source=')) {
                    var sep = targetHref.includes('?') ? '&' : '?';
                    targetHref = targetHref + sep + storedUtms;
                  }
                } catch (err) {}

                // 3. Pequeno intervalo para o navegador enviar o pixel com sucesso antes do redirecionamento
                setTimeout(function() {
                  window.location.href = targetHref;
                }, 350);
              }
            }, true);
          `}
        </Script>
      </body>
    </html>
  );
}
