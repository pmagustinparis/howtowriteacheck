import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  return (
    <div className="my-12 md:my-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left font-medium">
            Do I need special paper to print a check?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            No. You can use regular white paper for practice or learning purposes. Official checks should be printed on
            check paper if intended for real transactions.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left font-medium">Is this legally valid?</AccordionTrigger>
          <AccordionContent className="text-gray-600">
            The templates are educational. For real check use, verify with your bank's check format and security
            requirements.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left font-medium">
            Can I fill it in by hand after printing?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Yes, you can print the blank check template and write on it manually.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left font-medium">
            How do I know if I'm writing a check correctly?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Follow our step-by-step guide and use the interactive check writer to practice. The most important elements
            are writing the correct amount in both numbers and words, adding the date, including the recipient's name,
            and signing the check.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left font-medium">
            Why do I need to write the amount in both numbers and words?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            This is a security measure. Writing the amount in both formats helps prevent fraud and ensures clarity. If
            there's a discrepancy between the numerical and written amounts, banks typically honor the written amount.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
