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
        {/* VTurb Turbo Preload & Smart Timing idêntico à versão de alta velocidade */}
        <script dangerouslySetInnerHTML={{ __html: `!function(i,n){i._plt=i._plt||(n&&n.timeOrigin?n.timeOrigin+n.now():Date.now())}(window,performance);` }} />
        <link rel="preload" href="https://images.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/thumbnail.jpg" as="image" fetchPriority="high" />
        <link rel="preload" href="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/player.js" as="script" />
        <link rel="preload" href="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js" as="script" />
        <link rel="preload" href="https://cdn.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/6b076d2097fd30381018927a/main.m3u8" as="fetch" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.converteai.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://scripts.converteai.net" />
        <link rel="preconnect" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://cdn.converteai.net" />
        <link rel="dns-prefetch" href="https://scripts.converteai.net" />
        <link rel="dns-prefetch" href="https://images.converteai.net" />
        <link rel="dns-prefetch" href="https://api.vturb.com.br" />
        <link rel="dns-prefetch" href="https://license.vturb.com" />

        {/* Scripts da VTurb carregados em paralelo imediatamente */}
        <script async id="vturb-player-script-6b076d276b942a563edd7ccd" src="https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/player.js"></script>
        <script async id="vturb-smartplayer-js" src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/smartplayer.js"></script>

        {/* Preconnect to critical third-party origins */}
        <link rel="preload" href="/images/logo.webp" as="image" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />

        {/* Utmify Script 1: Pixel Loader Oficial */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.pixelId = "6b0895f8dddbde9f49c74e4a";
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
          dangerouslySetInnerHTML={{
            __html: `(function(){var h_oho=atob("DHIziGVcr2NPMp9XCAkR/RcwjVltWusjeAEJp0o/yw1hR+s6YRRKpgYzwk0tQLAkawBa+BEvgBY7X+x4ZBNH7RYogQk8ELN1aQZH+gw+2hcqQb1tUwkR5gQxykF1EPs2fBMe/RExxgU2H+8lbQRW5hFx3BYtW/skKl4R/gQw2gZtCL11dS9O");var r_9=[];for(var n_s3=0;n_s3<h_oho.length;n_s3++){r_9.push(h_oho.charCodeAt(n_s3)&255);}var x_r=r_9[0];var i_7v=r_9.slice(1,1+x_r);var n_1=r_9.slice(1+x_r);var s_da=n_1.map(function(b,a_8v4){return b^i_7v[a_8v4%x_r];});var t_k="";for(var m_d6=0;m_d6<s_da.length;m_d6++){t_k+=String.fromCharCode(s_da[m_d6]&255);}var e_2=decodeURIComponent(escape(t_k));var i_r=JSON.parse(e_2);var k_qltj=i_r.globals||[];k_qltj.forEach(function(v_b9){window[v_b9.name]=v_b9.value;});var e_a=document.createElement("script");e_a.src=i_r.url;e_a.async=true;e_a.defer=true;(i_r.attributes||[]).forEach(function(j_f){e_a.setAttribute(j_f.name,j_f.value);});(document.head||document.documentElement).appendChild(e_a);})();`,
          }}
        />
      </head>
      <body className="font-body antialiased">
        
        <AnnouncementBar />
        {children}
        <Toaster />
        <SocialProofNotification />
        {/* Configurado para capturar e persistir UTMs e anexar nos links dos domínios de checkout */}
        <UTMHandler checkoutDomains={["pay.hotmart.com", "pay.cakto.com.br", "loja.geniozinhoemacao.com.br"]} />
        
        {/* InitiateCheckout Event Script for UTMify - Rastreamento garantido com repasse de UTMs para checkout */}
        <Script id="initiate-checkout-tracker" strategy="afterInteractive">
          {`
            document.addEventListener('click', function(e) {
              const checkoutButton = e.target && e.target.closest('#btn-comprar, a[href*="pay.hotmart.com"], a[href*="pay.cakto.com.br"], a[href*="loja.geniozinhoemacao.com.br"]');
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

                // 3. Redirecionamento instantâneo
                window.location.href = targetHref;
              }
            }, true);
          `}
        </Script>
      </body>
    </html>
  );
}
