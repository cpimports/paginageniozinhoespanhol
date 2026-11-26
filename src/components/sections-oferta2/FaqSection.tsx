import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading, BottomWaveDivider } from '@/components/landing/ui';

const faqData = [
  {
    question: '¿El material está alineado con estándares pedagógicos?',
    answer:
      '¡Sí! Todos nuestros materiales están diseñados siguiendo competencias clave para el desarrollo infantil y la educación especial, garantizando una enseñanza actualizada, inclusiva y eficaz.',
  },
  {
    question: '¿Cómo voy a recibir el material?',
    answer:
      'Geniecitos en Acción es 100% digital. Adquieres acceso a un portal de actividades y recibirás todo directamente en tu correo electrónico de inmediato tras la confirmación del pago, para imprimir cuando quieras en la comodidad de tu hogar.',
  },
  {
    question: '¿Si no me gusta el producto, puedo solicitar un reembolso?',
    answer:
      '¡Claro que sí, no hay problema! Si sientes que no es para ti o no ves resultados, tienes hasta 7 días después de la compra para solicitar la devolución total de tu dinero sin preguntas.',
  },
  {
    question: '¿Cuántas actividades incluye el kit?',
    answer:
      'Incluye +1500 actividades pensadas especialmente para el aprendizaje y desarrollo de tu pequeño, junto con 12 Súper Bonos Exclusivos adicionales.',
  },
  {
    question: '¿Puedo usar el kit tanto en el aula como para refuerzo en casa?',
    answer:
      '¡Por supuesto! Nuestros kits son muy versátiles y son ideales tanto para docentes y terapeutas en el aula, como para familias que desean reforzar el aprendizaje en casa.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 pt-16 md:pt-24 pb-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Resuelve tus dudas" eyebrowTone="blue" title="Preguntas frecuentes" />
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`item-${index}`}
                className="rounded-2xl border border-slate-200/90 bg-white px-5 shadow-2xs transition-all duration-200 data-[state=open]:border-sky-300 data-[state=open]:shadow-sm hover:border-slate-300"
              >
                <AccordionTrigger className="py-5 text-left font-display text-base font-extrabold text-ink hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-ink-soft">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <BottomWaveDivider className="text-ink mt-12 md:mt-16" flip />
    </section>
  );
}
