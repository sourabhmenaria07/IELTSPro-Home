import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Student Visa to Canada",
      image: "PS",
      band: "8.0",
      text: "IELTSPro transformed my preparation completely! The AI speaking practice helped me overcome my fear of speaking, and I scored 8.0 overall. The mock tests were incredibly accurate to the real exam.",
      rating: 5,
    },
    {
      name: "Rahul Mehta",
      role: "Skilled Migration to Australia",
      image: "RM",
      band: "7.5",
      text: "The expert mentorship was a game-changer for me. My tutor identified my weak areas and created a personalized study plan. I achieved 7.5 overall in just 2 months of preparation!",
      rating: 5,
    },
    {
      name: "Ananya Patel",
      role: "UK University Admission",
      image: "AP",
      band: "8.5",
      text: "Best investment in my education! The comprehensive materials and detailed feedback on writing tasks helped me score 8.5. The practice materials were exactly like the real exam.",
      rating: 5,
    },
  ];

  return (
    <div
      id="testimonials"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Success Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Students Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of successful students who achieved their dream IELTS
            scores with IELTSPro.
          </p>
        </div>

        {/* mobile slide */}
        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory md:hidden pb-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-center w-[85%] bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                    Band {testimonial.band}
                  </span>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      Band {testimonial.band}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
