import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
  const challenges = [
    'Managing leads across multiple platforms',
    'Repetitive administrative work',
    'Slow follow-up times',
    'Compliance-sensitive workflows',
    'Difficulty monitoring performance',
    'Need for real-time information and organized systems'
  ];

  const solutions = [
    'Smart workflow organization',
    'Automated reminders and task handling',
    'AI-assisted lead management',
    'Integrated tools for communication and documentation',
    'Performance insights and daily productivity tracking',
    'All your tools unified in one place'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Medicare Agents Who Want More
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stop juggling disconnected tools and endless spreadsheets. Zenyra brings everything together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Agent Challenges</h3>
              </div>
              <ul className="space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-30"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Zenyra's Solution</h3>
                </div>
                <ul className="space-y-4">
                  {solutions.map((solution, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full">
              <span className="text-gray-700 font-medium">Transform your workflow today</span>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
