import { Search, Clock, Target, BarChart3, Shield } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Search,
      title: 'See where revenue is actually leaking',
      description: 'Identify whether losses are coming from qualification gaps, handoff drag, structural blockers, or close execution instead of guessing from outcomes alone.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Clock,
      title: 'Protect licensed-agent selling time',
      description: 'Catch intake friction, verification slowdowns, and dead-end opportunities earlier so more live-call time goes toward real conversion opportunities.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'Coach with cleaner performance context',
      description: 'Separate rep execution issues from source quality, workflow design, and non-convertible opportunities so coaching targets the right problem.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: BarChart3,
      title: 'Improve consistency across the floor',
      description: 'Expose why one agent or one day converts differently from another by making workflow friction and call-path variation easier to measure.',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Forecast with more confidence',
      description: 'Distinguish secured production from fragile or timing-dependent enrollments so pipeline reporting and follow-up discipline become more reliable.',
      color: 'from-blue-600 to-purple-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Agencies Join the Zenyra Beta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Better process visibility. Better management decisions.
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
