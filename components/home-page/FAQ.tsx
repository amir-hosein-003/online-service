import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

type Faq = {
  ask: string;
  answer: string;
};

const faq: Faq[] = [
  {
    ask: "لورم ایپسوم متن ساختگی با تولید سادگی",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
  },
  {
    ask: "لورم ایپسوم متن ساختگی با تولید سادگی",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
  },
  {
    ask: "لورم ایپسوم متن ساختگی با تولید سادگی",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،",
  },
];

const FAQ = () => {
  return (
    <section className="container mx-auto py-16">
      <h3 className="text-3xl font-bold text-center">سوالات متداول</h3>
      <div className="mt-16">
        <Accordion type="single" collapsible className="border-b">
          {faq.map((item: Faq, index: number) => (
            <AccordionItem
              key={index}
              value={`item_${index + 1}`}
              className="px-4 "
            >
              <AccordionTrigger className="cursor-pointer">
                <p className="font-bold text-lg">{item.ask}</p>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base-content/70">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
