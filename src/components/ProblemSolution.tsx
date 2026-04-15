import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
  const problems = [
    'Deals are making it deep into calls, then dying because authority issues, hidden decision-makers, or qualification problems were not surfaced early enough.',
    'Interested prospects are still being lost when doctor network conflicts, plan-fit issues, or structural blockers appear after the pitch is already underway.',
    'Bad intake, weak leads, rep execution, and structural non-convertibility get blended together, making coaching, sourcing, and forecasting less reliable.'
  ];

  const outcomes = [
    'Surface where revenue is leaking inside the workflow instead of forcing managers to guess from close rate alone.',
    'Separate coachable sales problems from structural disqualifications so teams stop treating every loss the same way.',
    'Give managers cleaner visibility into qualification breakdowns, handoff drag, and late-stage fallout before they keep wasting licensed agent time.'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Real Problem Isn’t Activity. It’s Hidden Revenue Leakage.
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Most agencies can see calls, enrollments, and basic rep output. What they usually cannot see is where the process is breaking down, where licensed agent time is being wasted, and which losses were preventable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What agencies are dealing with now</h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{problem}</span>
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
                  <h3 className="text-2xl font-bold text-gray-900">How Zenyra helps</h3>
                </div>
                <ul className="space-y-4">
                  {outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full">
              <span className="text-gray-700 font-medium">See what is actually dragging down output before you try to fix performance</span>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
