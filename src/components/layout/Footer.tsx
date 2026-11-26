'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Using Image for the logo

export default function Footer() {
  const [currentYear, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // This effect can be used for other client-side logic if needed,
    // but initializing the year in useState is sufficient and safer for SSR/SSG.
  }, []);

  return (
    <footer className="border-t border-border/40 py-8 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-center space-y-4">
          <Link href="/" className="flex flex-col items-center space-y-2">
            <Image
              src="/images/logo.webp" 
              alt="Logo Geniecitos en Acción"
              width={90} 
              height={60}
              className="h-auto w-auto max-h-[60px]"
            />
            <span className="font-headline text-lg font-semibold text-primary">Geniecitos en Acción</span>
          </Link>
          <p>&copy; {currentYear} Geniecitos en Acción. Todos los derechos reservados.</p>
          <p>¡Transformando el aprendizaje con actividades lúdicas y eficaces!</p>
        </div>
      </div>
    </footer>
  );
}
