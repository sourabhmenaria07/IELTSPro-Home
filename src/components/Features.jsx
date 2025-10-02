import { Users, BookOpen, MessageCircle, FileText } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Speaking Practice",
      description:
        "Practice with our advanced AI tutor that provides real-time feedback on pronunciation, fluency, and grammar. Available 24/7 for unlimited practice sessions.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Mock Tests & Band Prediction",
      description:
        "Take full-length IELTS mock tests in real exam conditions. Get instant band score predictions with detailed performance analytics and improvement suggestions.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Mentorship",
      description:
        "Learn from IELTS examiners and certified trainers with 10+ years of experience. Get personalized study plans and one-on-one guidance sessions.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Materials",
      description:
        "Access 500+ practice questions, video lessons, grammar workshops, and vocabulary builders. Updated monthly with latest IELTS patterns and trends.",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Our Features
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Everything You Need to Excel
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive tools and resources designed to help you achieve your
            target IELTS band score efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
