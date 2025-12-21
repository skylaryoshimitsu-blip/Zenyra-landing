import { Quote, Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Zenyra is going to change the way agents work. I've never had tools this organized.",
      author: "Medicare Agent",
      role: "Independent Agent, 5+ years"
    },
    {
      quote: "Finally, a platform built specifically for Medicare enrollment. This is exactly what we needed.",
      author: "Agency Owner",
      role: "Small Agency, 8 agents"
    },
    {
      quote: "The automation features alone will save me hours every week. Can't wait for the full release.",
      author: "Call Center Manager",
      role: "High-volume operations"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Early Agents Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of Medicare agents already interested in transforming their workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                500+
              </div>
              <div className="text-gray-700 font-semibold">Beta Signups</div>
              <div className="text-sm text-gray-600 mt-1">And growing daily</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <div className="text-gray-700 font-semibold">High Interest Level</div>
              <div className="text-sm text-gray-600 mt-1">Strong market validation</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                95%
              </div>
              <div className="text-gray-700 font-semibold">Want Integration</div>
              <div className="text-sm text-gray-600 mt-1">With existing tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
