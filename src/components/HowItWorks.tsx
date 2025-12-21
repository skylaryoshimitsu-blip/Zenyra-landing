import { Plug, LayoutDashboard, Zap, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Plug,
      title: 'Connect Your Lead Sources',
      description: 'Zenyra centralizes lead information from common Medicare platforms you already use.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: LayoutDashboard,
      title: 'Organize & Prioritize Automatically',
      description: 'Your dashboard sorts opportunities and tasks so you always know what needs attention next.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Work Smarter, Not Harder',
      description: 'Built-in tools help you communicate, document, and follow compliance-friendly workflows.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: TrendingUp,
      title: 'Track Performance & Improve',
      description: 'See daily, weekly, and monthly insights on activity and outcomes to improve conversions.',
      color: 'from-purple-500 to-blue-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How Zenyra Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to revolutionize your Medicare agent workflow
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
