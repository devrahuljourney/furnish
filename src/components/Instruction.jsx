import React, { useState } from 'react';

const Instructions = () => {
  const faqs = [
    {
      question: "Description",
      answer: (
        <>
          <h4 className="font-semibold">Queen</h4>
          <p>Mattress Size: L62.5 X W83 X H37 Inches</p>
          <p>Alternative Size: L60 X W78 Inches</p>
          <h4 className="font-semibold">King</h4>
          <p>Mattress Size: L74.5 X W83 X H37 Inches</p>
          <p>Alternative Size: L72 X W78 Inches</p>
          <p><strong>Assembly:</strong> Required by Customer own</p>
          <p><strong>Warranty:</strong> 5 Years Warranty</p>
          <p><strong>Primary Material:</strong> Solid Sheesham wood</p>
          <p><strong>Secondary Material:</strong> MDF</p>
          <p><strong>SKU:</strong> Queen: RF331406 | King: RF331410</p>
        </>
      ),
    },
    {
      question: "Care Instructions",
      answer: (
        <ul className="list-disc ml-6">
          <li>Always follow the recommended weight limit for products.</li>
          <li>Direct sunlight over a prolonged period of time can cause joint open/finish faded and deterioration of wood.</li>
          <li>When planning your room, arrange your furniture so that it is protected from sunlight. Always use coasters or mats while keeping hot materials on the surface.</li>
          <li>Avoid harsh, abrasive cleaners and do not use scrapers or razor blades to clean glass.</li>
          <li>Products can be dismantled and re-assembled multiple times in case of shifting/moving around furniture.</li>
          <li>Color / polish can fade due to prolonged exposure to sunlight.</li>
          <li>Avoid using abrasive materials like scrub pads for cleaning the surface as they may scratch the surface.</li>
          <li>Use a soft sponge / cloth for cleaning stains. Pure alcohol can be used to clean stubborn stains followed with a mild detergent cleaning process.</li>
          <li>We recommend a 6-monthly wax rub-down for solid-wood furniture.</li>
          <li>Most of our furniture is made of natural materials, which will have natural differences and the occasional minor blemish.</li>
          <li>For MDF, keep MDF products away from direct sunlight, water, heaters, wet or rough surfaces.</li>
          <li>Clean the surfaces regularly with a soft, white, clean, cotton cloth.</li>
          <li>We do not recommend using MDF products outdoors.</li>
          <li>To keep the surfaces looking their best, avoid bringing them in contact with materials that could stain them or make them dirty.</li>
        </ul>
      ),
    },
    {
      question: "Product Warranty",
      answer: (
        <p>
          This product comes with a 2-Year Manufacturing and 5-Year Termites Warranty. The warranty is only valid if the product has been used for domestic purposes only. The warranty will be applicable only if care instructions are followed.
        </p>
      ),
    },
    {
      question: "Return and Refund",
      answer: (
        <div>
          <p>
            If you find a defective or damaged product, you can apply for a return at support@rajwadafurnish.com. The following conditions will be applied for the return:
          </p>
          <ul className="list-disc ml-6">
            <li>Returns and refund requests will be accepted only for genuine reasons.</li>
            <li>You can return your items within 7 days of receipt of your shipment.</li>
            <li>Items must be unopened or should be in their original condition with proper packaging.</li>
            <li>Refund: Post receiving the products back at our warehouse, a refund shall be initiated within 5-7 days.</li>
          </ul>
          <a href="#" className="text-blue-500 underline">Read more...</a>
        </div>
      ),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[800px] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Product Information</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full text-lg font-semibold focus:outline-none flex justify-between items-center"
            >
              {faq.question}
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            {activeIndex === index && (
              <div className="mt-2 text-gray-600">
                {typeof faq.answer === 'string' ? faq.answer : faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructions;
