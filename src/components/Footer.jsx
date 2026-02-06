import { Github, Linkedin, Mail, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mojtaba.ataye.dev@gmail.com", label: "Email" },
  ];

  return (
    <footer className="px-4 py-12 text-white bg-gray-900 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold">Mojtaba Ataye</h3>
            <p className="text-gray-400">Computer Science Student</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex items-center justify-center w-12 h-12 transition-colors bg-gray-800 rounded-lg hover:bg-blue-600"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="pt-8 mt-8 text-center border-t border-gray-800">
          <p className="flex flex-wrap items-center justify-center gap-2 text-gray-400">
            <span>© {currentYear} Mojtaba Ataye. Built with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
