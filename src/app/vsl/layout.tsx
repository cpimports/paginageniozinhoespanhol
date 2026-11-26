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
      {children}
    </>
  );
}
