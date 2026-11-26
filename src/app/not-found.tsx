
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background">
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-foreground">Página No Encontrada</h2>
      <p className="text-lg mb-8 text-muted-foreground max-w-md">
        ¡Ups! La página que buscas no existe o ha sido movida.
      </p>
      <Button asChild>
        <Link href="/">
          Volver a la Página Principal
        </Link>
      </Button>
    </div>
  )
}
