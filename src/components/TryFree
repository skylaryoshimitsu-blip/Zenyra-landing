import { ArrowRight, Zap, BarChart3, ShieldCheck } from 'lucide-react';

const SCORER_URL = 'https://score.zenyra.app';

const features = [
  {
    icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
    text: 'Compliance gap detection across 11 SalesPlates',
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-purple-600" />,
    text: 'Instant coaching report with priority actions',
  },
  {
    icon: <Zap className="w-5 h-5 text-blue-600" />,
    text: 'Lead quality verdict — Pursue, Nurture, or Exit',
  },
];

export function TryFree() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background radial gradients matching hero */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.07),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(147,51,234,0.07),transparent_40%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">

          {/* Section label */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Free Call Scorer — No credit card required</span>
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              See Zenyra in Action —{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                On Your Own Calls
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Upload a recorded Medicare sales call and get a full SalesPlates score,
              coaching report, and lead quality analysis in under 60 seconds.
              No account needed.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="grid md:grid-cols-2">

              {/* Left — features */}
              <div className="p-10 flex flex-col justify-center">
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                  Every free analysis includes
                </p>
                <ul className="space-y-5 mb-10">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0 w-9 h-9 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center">
                        {f.icon}
                      </div>
                      <span className="text-gray-700 font-medium leading-snug pt-1.5">
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Limit note */}
                <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                  <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                  3 free analyses per day · No signup required to try
                </div>
              </div>

              {/* Right — CTA */}
              <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 p-10 flex flex-col justify-center items-center text-center">
                {/* Decorative circles */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10">
                  {/* Mock grade ring */}
                  <div className="w-24 h-24 rounded-full bg-white/15 border-4 border-white/30 flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-4xl" style={{ fontFamily: 'system-ui' }}>A</span>
                  </div>

                  <h3 className="text-white font-bold text-2xl mb-3">
                    Score Your First Call Free
                  </h3>
                  <p className="text-blue-100 text-sm mb-8 leading-relaxed max-w-xs">
                    Upload any MP3 or WAV recording from your dialer.
                    Results in under 60 seconds.
                  </p>

                  <a
                    href={SCORER_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Try Free Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <p className="text-blue-200 text-xs mt-5">
                    MP3 or WAV · Any call length · 3 free/day
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom trust line */}
          <p className="text-center text-sm text-gray-400 mt-6">
            Want unlimited scoring for your whole team?{' '}
            <button
              onClick={() => document.getElementById('beta-program')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-blue-600 font-medium hover:underline"
            >
              Apply for Zenyra Beta →
            </button>
          </p>

        </div>
      </div>
    </section>
  );
}
