import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600"
            >
              Mojtaba Ataye
            </button>
          </div>

          <div className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="font-medium text-gray-700 transition-colors hover:text-blue-600"
              >
                {link}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="px-4 py-2 font-medium text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 transition-colors hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bg-white border-t border-gray-200 md:hidden">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="block w-full py-2 font-medium text-left text-gray-700 transition-colors hover:text-blue-600"
              >
                {link}
              </button>
            ))}
            <a
              href="/resume.pdf"
              className="block w-full px-4 py-2 font-medium text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
