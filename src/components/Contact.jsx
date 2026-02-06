import { Mail, Github, Linkedin, Send } from "lucide-react";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Form submission is a placeholder. In production, this would send an email or save to a database.",
    );
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "mojtaba.ataye.dev@gmail.com",
      href: "mailto: mojtaba.ataye.dev@gmail.com",
      color: "bg-red-50 text-red-600 hover:bg-red-100",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mojtaba-ataye",
      href: "https://github.com/mojtaba-ataye",
      color: "bg-gray-50 text-gray-600 hover:bg-gray-100",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mojtaba-ataye",
      href: "https://www.linkedin.com/in/mojtaba-ataye-b2ba63376/",
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100",
    },
  ];

  return (
    <section id="contact" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full"></div>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600">
            I'm currently looking for spring 2026 internship opportunities. Feel
            free to reach out if you'd like to connect!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none resize-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 group"
              >
                Send Message
                <Send
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              Connect With Me
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border border-gray-200 transition-all ${link.color}`}
                  >
                    <div className="flex-shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {link.label}
                      </p>
                      <p className="text-sm text-gray-600">{link.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="p-6 mt-8 border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
              <h4 className="mb-2 text-lg font-bold text-gray-900">
                Looking for Opportunities
              </h4>
              <p className="text-sm text-gray-700">
                I'm actively seeking spring 2026 internship opportunities in
                software engineering and web development. I'm passionate about
                learning and ready to contribute to meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
