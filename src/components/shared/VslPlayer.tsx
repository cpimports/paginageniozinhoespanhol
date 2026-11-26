'use client';

import React, { useEffect } from 'react';

export default function VslPlayer() {
  useEffect(() => {
    const sdkScriptId = 'converteai-sdk-script';
    if (!document.getElementById(sdkScriptId)) {
      const s = document.createElement('script');
      s.id = sdkScriptId;
      s.src = 'https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js';
      s.async = true;
      document.head.appendChild(s);
    }

    // Fallback garantido caso o onload inline não dispare em navegações dinâmicas do Next.js
    const timer = setTimeout(() => {
      const iframe = document.getElementById('ifr_6b076d276b942a563edd7ccd') as HTMLIFrameElement | null;
      if (iframe && (iframe.src === 'about:blank' || !iframe.src || iframe.src.endsWith('about:blank'))) {
        const queryParams = window.location.search || '?';
        const pageUrl = encodeURIComponent(window.location.href);
        iframe.src = `https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/embed.html${queryParams}&vl=${pageUrl}`;
      }
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <div id="ifr_6b076d276b942a563edd7ccd_wrapper" style="margin: 0 auto; width: 100%;">
            <div style="position: relative; padding: 56.25% 0 0 0;" id="ifr_6b076d276b942a563edd7ccd_aspect">
              <iframe
                frameborder="0"
                allowfullscreen
                src="about:blank"
                id="ifr_6b076d276b942a563edd7ccd"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
                referrerpolicy="origin"
                onload="this.onload=null, this.src='https://scripts.converteai.net/f304b502-422a-4d15-8f6c-5e42de7baf1b/players/6b076d276b942a563edd7ccd/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"
              ></iframe>
            </div>
          </div>
        `,
      }}
    />
  );
}
