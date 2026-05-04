import { ArrowRight, Sparkles } from 'lucide-react';
interface HeroProps {
  onJoinBeta: () => void;
  onLearnMore: () => void;
}
export function Hero({ onJoinBeta, onLearnMore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.08),transparent_40%)]"></div>
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Beta for Medicare Agencies and Sales Teams</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            You&apos;re Not Just Losing Sales.<br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              You&apos;re Losing Visibility Into Why.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Zenyra helps Medicare agencies see where revenue is leaking inside the sales process so managers can improve conversion efficiency, coaching leverage, agent consistency, and operational visibility.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={onJoinBeta}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Apply for Beta Access
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onLearnMore}
              className="bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-200"
            >
              Learn How It Works
            </button>
          </div>
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">103</div>
                  <div className="text-sm text-gray-600">Real sales calls analyzed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">15.5%</div>
                  <div className="text-sm text-gray-600">Baseline close rate observed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">0–43%</div>
                  <div className="text-sm text-gray-600">Session close-rate swing</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">60 min</div>
                  <div className="text-sm text-gray-600">Lost call caught too late</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
