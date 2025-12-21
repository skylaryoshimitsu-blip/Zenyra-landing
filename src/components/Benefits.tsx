import { Clock, TrendingUp, FileCheck, Shield, Zap, Package } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Increase Efficiency',
      description: 'Automate repetitive tasks and focus on what matters most—building relationships and closing enrollments.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Boost Lead Conversion Rates',
      description: 'Never miss a follow-up opportunity with intelligent reminders and prioritization that keeps you on top of every lead.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileCheck,
      title: 'Reduce Administrative Work',
      description: 'Cut down on paperwork and data entry with streamlined processes designed for Medicare enrollment workflows.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Stay Organized & Compliant',
      description: 'Built-in compliance features ensure your workflows meet Medicare regulations without the guesswork.',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Improve Client Follow-Up Speed',
      description: 'Respond faster with organized information at your fingertips and automated communication workflows.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Package,
      title: 'All Tools in One Place',
      description: 'Stop switching between multiple platforms. Zenyra unifies your essential tools into one powerful dashboard.',
      color: 'from-purple-600 to-blue-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Medicare Agents Choose Zenyra
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built specifically for the unique challenges of Medicare enrollment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
