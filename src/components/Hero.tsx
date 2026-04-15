import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onJoinBeta: () => void;
  onLearnMore: () => void;
}

export function Hero({ onJoinBeta, onLearnMore }: HeroProps) {
  const metrics = [
    {
      value: '103',
      label: 'Real sales calls analyzed'
    },
    {
      value: '15.5%',
      label: 'Baseline close rate observed'
    },
    {
      value: '0–43%',
      label: 'Session close-rate swing'
    },
    {
      value: '60 min',
      label: 'Lost call caught too late'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGRkIj48ZyBmaWxsPSIjOTNjM2VlIiBmaWxsLW9wYWNpdHk9IjAuMDUiPjxwYXRoIGQ9Ik0zNiAxNGMwLTEuMS0uOS0yLTItMmgtMmMtMS4xIDAtMiAuOS0yIDJ2MmMwIDEuMS45IDIgMiAyaDJjMS4xIDAgMi0uOSAyLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Beta for Medicare Agencies and Sales Teams</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            You’re Not Just Losing Sales.<br />
            You’re Losing
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Visibility Into Why.</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            Zenyra helps Medicare agencies see where revenue is leaking inside the sales process—from weak handoffs and bad qualification to late-stage deal collapse—so managers can improve conversion efficiency, coaching, and agent consistency.
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Built around real call-pattern analysis, Zenyra is designed to surface workflow drag, structural disqualifications, and missed coaching visibility before they keep draining agent time and suppressing production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onJoinBeta}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Request Beta Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onLearnMore}
              className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200"
            >
              See If Your Agency Is a Fit
            </button>
          </div>

          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
