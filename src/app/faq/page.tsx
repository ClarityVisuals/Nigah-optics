import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "How do I place an order?",
    answer: "To place an order, simply browse our product catalog, select the items you like, choose any applicable options (like color or prescription), and add them to your cart. Proceed to checkout, fill in your shipping and payment details, and confirm your order. You'll receive an email confirmation shortly after."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment gateways. All transactions are encrypted for your security."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping usually takes 5-7 business days within the continental US. Prescription lenses may require an additional 3-5 business days for processing. Expedited shipping options are available at checkout. You'll receive a tracking number once your order ships."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items in new, unused condition. Prescription eyeglasses and sunglasses can be returned if there's a manufacturing defect or an error in the prescription fulfillment. Please visit our Returns & Exchanges page for detailed information and to initiate a return."
  },
  {
    question: "Can I use my vision insurance?",
    answer: "While we don't directly bill insurance companies, we can provide you with an itemized receipt that you can submit to your vision insurance provider for reimbursement. Many providers offer out-of-network benefits. Please check with your insurance company for details."
  },
  {
    question: "How does the Virtual Try-On feature work?",
    answer: "Our Virtual Try-On feature (coming soon!) will allow you to use your device's camera or upload a photo to see how different frames look on your face. It uses augmented reality technology to provide a realistic preview and can even suggest styles based on your face shape."
  },
  {
    question: "Do you offer prescription lenses?",
    answer: "Yes, we offer a wide range of prescription lenses, including single vision, bifocal, and progressive lenses. You'll need to provide a valid prescription from your optometrist during the order process. We also offer various lens coatings like anti-reflective, blue light filtering, and scratch-resistant coatings."
  },
  {
    question: "How do I know my frame size?",
    answer: "You can usually find your frame size printed on the inside of your current glasses (e.g., 52-18-145). This represents lens width, bridge width, and temple length in millimeters. We also provide detailed measurements for each frame on its product page. Our customer service team can also assist you if you need help."
  }
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <HelpCircle className="h-16 w-16 mx-auto text-primary mb-4" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find answers to common questions about our products, services, and policies.
        </p>
      </header>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-sm rounded-lg border">
              <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Can't find what you're looking for?</h2>
        <p className="text-muted-foreground mb-6">
          Our customer support team is happy to help.
        </p>
        <a href="/contact" className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          Contact Support
        </a>
      </section>
    </div>
  );
}
