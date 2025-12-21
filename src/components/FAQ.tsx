import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What does Zenyra do?',
      answer: 'Zenyra is a comprehensive workflow management platform designed specifically for Medicare agents. It streamlines lead management, automates administrative tasks, organizes your daily workflow, and provides performance insights—all in one unified dashboard. Our intelligent automation helps you stay on top of every opportunity without the hassle of juggling multiple disconnected tools.'
    },
    {
      question: 'Who is the beta for?',
      answer: 'The Zenyra beta is open to all Medicare professionals, including independent agents, small agency teams, call center operations, and everyone from new agents to seasoned Medicare enrollment experts. Whether you handle 10 enrollments or 1,000+ per month, Zenyra scales to meet your needs.'
    },
    {
      question: 'What do I need to join the beta?',
      answer: 'Simply fill out our beta signup form with your information. We collect details about your role, experience level, current tools, and workflow challenges to ensure we prioritize features that matter most to agents like you. No credit card or payment information is required to join the waitlist.'
    },
    {
      question: 'When does the beta launch?',
      answer: 'We\'re currently in the final stages of development and expect to begin rolling out beta invitations in the coming weeks. Beta participants will be invited in waves based on signup timing and profile fit. The sooner you sign up, the sooner you\'ll gain access.'
    },
    {
      question: 'Is my data safe?',
      answer: 'Absolutely. We take data security and privacy extremely seriously. All information is encrypted, stored securely, and never sold to third parties. Zenyra is built with compliance in mind, ensuring your sensitive Medicare enrollment data is protected according to industry standards and regulations.'
    },
    {
      question: 'Will the platform integrate with the tools I already use?',
      answer: 'Yes, Zenyra is built with integration in mind. We understand that Medicare agents rely on various CRMs, lead sources, dialers, and Medicare-specific platforms. Our goal is to centralize your workflow by connecting with the tools you already use, rather than forcing you to abandon them. During beta, we\'ll be prioritizing integrations based on user feedback.'
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
              Everything you need to know about Zenyra
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
