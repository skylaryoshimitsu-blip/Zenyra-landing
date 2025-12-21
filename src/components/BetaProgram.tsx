import { Users, MessageSquare, Lightbulb, Star } from 'lucide-react';

interface BetaProgramProps {
  onJoinBeta: () => void;
}

export function BetaProgram({ onJoinBeta }: BetaProgramProps) {
  const targetUsers = [
    {
      icon: Users,
      title: 'Independent Agents',
      description: 'Solo practitioners looking to maximize productivity and efficiency'
    },
    {
      icon: Users,
      title: 'Small Agencies',
      description: 'Teams of 2-10 agents seeking better coordination and lead management'
    },
    {
      icon: Users,
      title: 'High-Volume Call Centers',
      description: 'Operations handling hundreds of enrollments monthly'
    },
    {
      icon: Users,
      title: 'All Experience Levels',
      description: 'From new agents to seasoned Medicare professionals'
    }
  ];

  const expectations = [
    {
      icon: Star,
      title: 'Early Access',
      description: 'Be among the first to use cutting-edge features designed for Medicare agents'
    },
    {
      icon: MessageSquare,
      title: 'Direct Feedback Channel',
      description: 'Share your insights and help us build the perfect tool for your needs'
    },
    {
      icon: Lightbulb,
      title: 'Shape the Future',
      description: 'Influence our product roadmap and feature development priorities'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzAtMS4xLS45LTItMi0yaC0yYy0xLjEgMC0yIC45LTIgMnYyYzAgMS4xLjkgMiAyIDJoMmMxLjEgMCAyLS45IDItMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Exclusive Beta Program</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Zenyra Beta
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Help us build the future of Medicare enrollment technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Users className="w-7 h-7" />
                Who the Beta is For
              </h3>
              <div className="space-y-4">
                {targetUsers.map((user, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <user.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{user.title}</h4>
                        <p className="text-blue-100 text-sm">{user.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Star className="w-7 h-7" />
                What to Expect
              </h3>
              <div className="space-y-4">
                {expectations.map((expectation, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/15 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <expectation.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{expectation.title}</h4>
                        <p className="text-blue-100 text-sm">{expectation.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={onJoinBeta}
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 inline-flex items-center gap-2"
            >
              <Star className="w-5 h-5" />
              Request Beta Access Now
            </button>
            <p className="text-blue-100 mt-4 text-sm">Limited spots available • No credit card required</p>
          </div>
        </div>
      </div>
    </section>
  );
}
