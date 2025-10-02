import { ChevronRight, Star, Award, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <div
      id="home"
      className="pt-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                🎓 #1 IELTS Training Institute
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Achieve Your Dream
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                IELTS Band Score
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Join thousands of successful students who achieved their target
              band score with our expert-led training, AI-powered practice
              tests, and personalized feedback system.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group">
                Start Free Trial
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-gray-900">
                    5000+ Students
                  </p>
                  <p className="text-xs text-gray-600">Achieved Band 7+</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-bold text-gray-900">4.9</span>
                <span className="text-sm text-gray-600">(2.5k reviews)</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500 to-indigo-700 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 transform -rotate-3 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full"></div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          Sarah Johnson
                        </p>
                        <p className="text-sm text-gray-600">IELTS Band 8.5</p>
                      </div>
                    </div>
                    <Trophy className="w-8 h-8 text-yellow-500" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Listening</span>
                      <span className="font-bold text-blue-600">9.0</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Reading</span>
                      <span className="font-bold text-blue-600">8.5</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Writing</span>
                      <span className="font-bold text-blue-600">8.0</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Speaking</span>
                      <span className="font-bold text-blue-600">8.5</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        style={{ width: "94%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
              <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
