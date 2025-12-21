import { Database, TrendingUp, Users, Target } from 'lucide-react';

export function DataCollection() {
  const dataPoints = [
    {
      icon: Users,
      field: 'Contact & Role Information',
      items: ['Full name', 'Email address', 'Phone number', 'Role (Independent, Agency, Call Center)'],
      purpose: 'Understand our target audience composition'
    },
    {
      icon: TrendingUp,
      field: 'Experience & Volume',
      items: ['Years of experience', 'Monthly enrollments', 'Agency size'],
      purpose: 'Gauge market segment and scale requirements'
    },
    {
      icon: Database,
      field: 'Current Tools & Workflows',
      items: ['Platforms currently used', 'Biggest pain points', 'Workflow challenges'],
      purpose: 'Identify integration needs and feature priorities'
    },
    {
      icon: Target,
      field: 'Interest Level',
      items: ['Low, Medium, or High interest', 'Specific feature requests', 'Timeline expectations'],
      purpose: 'Measure demand signals and prioritize beta invites'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Data-Driven Product Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect detailed signup information to ensure Zenyra meets the real needs of Medicare agents
              and to demonstrate market traction to investors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {dataPoints.map((data, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <data.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{data.field}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {data.items.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Purpose:</span> {data.purpose}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Why This Matters</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By collecting comprehensive signup data, we can demonstrate strong product-market fit to investors,
                  prioritize the most valuable features, and ensure Zenyra addresses the specific challenges faced
                  by different segments of Medicare agents.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your detailed responses help us build a better product and secure the funding needed to accelerate
                  development and bring Zenyra to market faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
