import { Award, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
                <Award className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">IELTSPro</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering students to achieve their dream IELTS scores since
              2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-gray-400 hover:text-white transition"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-gray-400 hover:text-white transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#materials"
                  className="text-gray-400 hover:text-white transition"
                >
                  Study Materials
                </a>
              </li>
              <li>
                <a
                  href="#tips"
                  className="text-gray-400 hover:text-white transition"
                >
                  IELTS Tips
                </a>
              </li>
              <li>
                <a
                  href="#tests"
                  className="text-gray-400 hover:text-white transition"
                >
                  Practice Tests
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📧 sourabhmenaria143@gmail.com</li>
              <li>📞 +91 8302348952</li>
              <li>📍 Udaipur, Rajasthan, India</li>
              <li className="pt-2">
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Facebook</title>
                      <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
                  >
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>X</title>
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition"
                  >
                    <svg
                      height="200px"
                      width="200px"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 291.319 291.319"
                      xmlSpace="preserve"
                      fill="#000000"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g>
                          {" "}
                          <path
                            style={{ fill: "#0E76A8" }}
                            d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66 S65.21,0,145.659,0z"
                          ></path>{" "}
                          <path
                            style={{ fill: "#FFFFFF" }}
                            d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077 c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593 s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141 c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 IELTSPro. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-gray-400 hover:text-white text-sm transition"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
