import { Clock, TrendingUp, FileCheck, Shield, Zap, Package } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Protect licensed agent sell time',
      description: 'Expose the handoff friction, verification drag, and late-stage fallout that quietly eat into productive talk time.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      title: 'Improve conversion consistency',
      description: 'See where performance is being suppressed by workflow issues, not just rep behavior, so conversion becomes more repeatable across the floor.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileCheck,
      title: 'Create cleaner coaching visibility',
      description: 'Separate bad execution from bad intake, weak lead quality, and structural disqualification so coaching targets the right problem.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Reduce avoidable process loss',
      description: 'Catch authority gaps, plan-fit blockers, and workflow breakdowns earlier instead of discovering them after the call is already deep.',
      color: 'from-purple-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Make sourcing decisions with better context',
      description: 'Give managers clearer insight into which losses came from lead quality, which came from workflow drag, and which were truly coachable.',
      color: 'from-blue-600 to-purple-600'
    },
    {
      icon: Package,
      title: 'Operate from one management view',
      description: 'Bring call outcomes, risk signals, and performance patterns into one place so agencies can manage the process instead of guessing around it.',
      color: 'from-purple-600 to-blue-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Agency Owners Are Paying Attention to Zenyra
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The value is not more noise or more dashboards. It is better visibility into where production is slowing down, where revenue is being lost, and where managers can intervene sooner.
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
