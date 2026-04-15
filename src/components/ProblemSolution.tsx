import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

export function ProblemSolution() {
  const challenges = [
    'Deals die late because authority gaps and hidden decision-makers are discovered too far into the call.',
    'Interested prospects still fall out when doctor network conflicts, plan-fit blockers, or structural issues surface after the pitch begins.',
    'Agents lose selling time fixing bad intake, verification errors, and handoff friction before real discovery even starts.',
    'Weak leads, confused callers, structural dead ends, and true sales opportunities get blended together in the same workflow.',
    'Some enrollments look closed on paper but are still conditional, fragile, or at risk of not processing.'
  ];

  const solutions = [
    'Surface where revenue is leaking inside the workflow instead of forcing managers to infer it from close rate alone.',
    'Catch structural blockers and plan-fit friction earlier so agents spend more time on opportunities that can actually close.',
    'Expose intake drag, data-quality issues, and handoff breakdowns that quietly suppress throughput and conversion efficiency.',
    'Separate coachable rep problems from sourcing, routing, and non-convertible opportunity issues so management decisions get cleaner.',
    'Distinguish confirmed production from at-risk production to improve follow-up discipline and forecast reliability.'
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Revenue Problem Most Medicare Agencies Can&apos;t Actually See
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your team may be tracking calls, enrollments, and close rate. That still does not tell you where production is breaking down. Zenyra helps agencies see where losses are happening inside the workflow so managers can act earlier, coach more precisely, and protect licensed-agent sell time before avoidable leakage compounds.
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
                  <h3 className="text-2xl font-bold text-gray-900">How Zenyra helps</h3>
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
              <span className="text-gray-700 font-medium">See what is actually dragging down output before you try to fix performance</span>
              <ArrowRight className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
