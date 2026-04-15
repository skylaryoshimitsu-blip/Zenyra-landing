import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Zenyra focused on in beta?',
      answer:
        'Zenyra is focused on helping Medicare agencies see where revenue is leaking inside the sales process. In beta, the emphasis is workflow visibility, qualification breakdowns, handoff friction, and clearer coaching insight—not inflated promises about everything at once.'
    },
    {
      question: 'Who is the beta for?',
      answer:
        'The beta is best suited for Medicare agency owners, operators, sales leaders, and active teams that want a clearer view into workflow drag, lead-quality issues, and performance inconsistency. It is especially relevant for teams that want to pressure-test what is actually happening inside calls and handoffs.'
    },
    {
      question: 'What do I need to join?',
      answer:
        'You only need to submit the beta form with your role, agency details, current workflow, and pain points. That helps prioritize the teams that are the strongest fit for the current beta stage. No credit card is required.'
    },
    {
      question: 'Is Zenyra already proven to increase close rate?',
      answer:
        'Not yet. The current data is strong enough to show where preventable process loss is happening, but beta is where agencies help validate what improves once that visibility is introduced into real workflows.'
    },
    {
      question: 'Will Zenyra replace the tools we already use?',
      answer:
        'The goal is not to force agencies to rip out their existing stack. The beta is designed to help clarify where workflow breakdowns, qualification failures, and management blind spots exist so agencies can decide how Zenyra should fit into the tools and process they already rely on.'
    },
    {
      question: 'Is my information secure?',
      answer:
        'Yes. Information submitted through the beta process is handled with security and privacy in mind. It is used to evaluate fit, prioritize product direction, and support beta onboarding—not sold to third parties.'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              What agency owners and operators usually want to know before joining the beta
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-8 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { FAQ };
export default FAQ;
