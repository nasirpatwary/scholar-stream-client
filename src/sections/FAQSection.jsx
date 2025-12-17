import { useState } from "react";
import Container from "../shared/Container";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Are the scholarships listed on this platform verified?",
    answer:
      "Yes. All scholarships are carefully reviewed and collected from trusted universities, organizations, and official sources to ensure authenticity."
  },
  {
    question: "Is there any fee to use this scholarship platform?",
    answer:
      "No. Our platform is completely free for students. You can browse, search, and apply for scholarships without any hidden charges."
  },
  {
    question: "Can I apply for multiple scholarships at the same time?",
    answer:
      "Absolutely. You are encouraged to apply for multiple scholarships as long as you meet the eligibility criteria for each one."
  },
  {
    question: "Do you offer international scholarships?",
    answer:
      "Yes. We feature both local and international scholarships, including fully funded and partially funded opportunities."
  },
  {
    question: "How often are new scholarships updated?",
    answer:
      "New scholarship opportunities are added regularly, and deadlines are updated to help students stay informed."
  },
  {
    question: "Do I need to create an account to view scholarships?",
    answer:
      "You can browse scholarships without an account, but creating an account allows you to save favorites and track applications."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Container className="my-20">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary dark:text-gray-200">
        Frequently Asked Questions
      </h3>

      <p className="mt-3 text-center text-gray-600 dark:text-gray-400 max-w-[55ch] mx-auto">
        Find answers to the most common questions about scholarships and how our
        platform helps you succeed.
      </p>

      <div className="mt-12 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 dark:border-gray-700 rounded-xl bg-base-100 dark:bg-gray-950"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="font-medium text-gray-800 dark:text-gray-200">
                {faq.question}
              </span>
              <FaChevronDown
                className={`text-gray-500 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {activeIndex === index && (
              <div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default FAQSection;
