'use client';

import React, { useEffect } from 'react';

export default function VslPlayer() {
  useEffect(() => {
    const scriptId = 'vturb-player-script-6b076d276b942a563edd7ccd';
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script');
      s.id = scriptId;
      s.src = 'https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/player.js';
      s.async = true;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <style>
            vturb-smartplayer [slot="preload"],
            vturb-smartplayer .preload,
            vturb-smartplayer .preload--netflix,
            vturb-smartplayer .vt-loading-wrapper,
            .vt-loading-wrapper,
            .preload--netflix {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
              pointer-events: none !important;
            }
          </style>
          <vturb-smartplayer id="vid-6b076d276b942a563edd7ccd" style="display: block; margin: 0 auto; width: 100%;">
            <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0; background: url('https://images.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/thumbnail.jpg') center center / cover no-repeat;">
              <img 
                src="https://images.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/thumbnail.jpg" 
                alt="Vídeo de presentación" 
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" 
                loading="eager"
                fetchpriority="high"
              />
              <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 2; pointer-events: none;">
                <div style="background-color: rgba(1, 150, 38, 0.9); border: 3px solid #ffffff; border-radius: 14px; padding: 12px 24px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); max-width: 90%;">
                  <p style="color: #ffffff; font-weight: 800; font-size: 16px; margin: 0; line-height: 1.2; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">ENSEÑA DE FORMA LÚDICA</p>
                  <div style="margin: 8px auto; width: 44px; height: 32px;">
                    <svg viewBox="0 0 47 33" fill="#ffffff" style="width: 100%; height: 100%;">
                      <path d="M20.921,20.366h-6.423c-0.553,0-1,0.508-1,1.135v8.229c0,0.627,0.447,1.135,1,1.135h7.375l6.25,5.875V24.96L20.921,20.366z"></path>
                      <path d="M28.124,20.215l-3.489-2.225V14.991l3.489,5.224z"></path>
                    </svg>
                  </div>
                  <p style="color: #ffffff; font-weight: 800; font-size: 15px; margin: 0; line-height: 1.2; text-shadow: 0 1px 3px rgba(0,0,0,0.5);">HAZ CLIC PARA VER...</p>
                </div>
              </div>
            </div>
          </vturb-smartplayer>
          <script>
            (function() {
              var p = document.getElementById("vid-6b076d276b942a563edd7ccd");
              if (p) {
                var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
                Object.defineProperty(p, 'innerHTML', {
                  set: function(val) {
                    if (typeof val === 'string' && val.indexOf('preload--netflix') !== -1) {
                      return;
                    }
                    return desc.set.call(this, val);
                  },
                  get: function() {
                    return desc.get.call(this);
                  },
                  configurable: true
                });
              }
            })();
          </script>
        `,
      }}
    />
  );
}
