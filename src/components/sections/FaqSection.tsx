import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
  {
    question: "¿El material está alineado con estándares pedagógicos?",
    answer: "¡Sí! Todos nuestros materiales están diseñados siguiendo competencias clave para el desarrollo infantil y la educación especial, garantizando una enseñanza actualizada, inclusiva y eficaz."
  },
  {
    question: "¿Cómo voy a recibir el material?",
    answer: "Geniecitos en Acción es 100% digital. Adquieres acceso a un portal de actividades y recibirás todo directamente en tu correo electrónico de inmediato tras la confirmación del pago, para imprimir cuando quieras en la comodidad de tu hogar."
  },
  {
    question: "¿Si no me gusta el producto, puedo solicitar un reembolso?",
    answer: "¡Claro que sí, no hay problema! Si sientes que no es para ti o no ves resultados, tienes hasta 7 días después de la compra para solicitar la devolución total de tu dinero sin preguntas."
  },
  {
    question: "¿Cuántas actividades incluye el kit?",
    answer: "Incluye +1500 actividades pensadas especialmente para el aprendizaje y desarrollo de tu pequeño, junto con 12 Súper Bonos Exclusivos adicionales."
  },
  {
    question: "¿Puedo usar el kit tanto en el aula como para refuerzo en casa?",
    answer: "¡Por supuesto! Nuestros kits son muy versátiles y son ideales tanto para docentes y terapeutas en el aula, como para familias que desean reforzar el aprendizaje en casa."
  }
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold text-primary mb-2">
            PREGUNTAS FRECUENTES
          </h2>
          <p className="text-lg text-foreground/80 font-semibold">
            RESUELVE TUS DUDAS
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/30 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <AccordionTrigger className="p-6 text-left font-semibold text-lg text-primary hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-foreground/80">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
