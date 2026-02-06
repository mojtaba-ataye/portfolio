import { ArrowRight, Mail } from "lucide-react";

function Hero() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="px-4 pt-20 pb-16 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-700 rounded-full bg-blue-50">
              Open to Internship Opportunities
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-blue-600">Mojtaba Ataye</span>
              <br />
              Computer Science Student
            </h1>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 sm:text-xl lg:mx-0">
              Junior at University of Afghanistan, passionate about building web
              applications and solving problems through code.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700 group"
              >
                View Projects
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-gray-700 transition-colors bg-white border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center flex-1 lg:justify-end">
            <div className="relative">
              <div className="flex items-center justify-center w-64 h-64 shadow-xl sm:w-80 sm:h-80 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl">
                <div className="text-8xl">👨‍💻</div>
              </div>
              <div className="absolute w-24 h-24 bg-blue-600 -bottom-4 -right-4 rounded-2xl opacity-10"></div>
              <div className="absolute w-16 h-16 bg-blue-400 -top-4 -left-4 rounded-xl opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
