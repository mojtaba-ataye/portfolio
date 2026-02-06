import { GraduationCap, Code, Target } from "lucide-react";

function About() {
  const stats = [
    {
      icon: GraduationCap,
      label: "Current Year",
      value: "Sophomore",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Code,
      label: "Projects Built",
      value: "8+",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Target,
      label: "Goal",
      value: "Spring 2026 Internship",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ];

  return (
    <section id="about" className="px-4 py-20 bg-white sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-relaxed text-center text-gray-600">
            I'm a passionate Computer Science student at the University of
            Afghanistan with a strong interest in web development and software
            engineering. I love turning ideas into reality through code and am
            constantly learning new technologies to expand my skill set.
            Currently seeking summer 2026 internship opportunities where I can
            contribute to meaningful projects and grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 transition-shadow bg-white border border-gray-200 rounded-xl hover:shadow-lg"
              >
                <div
                  className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={stat.color} size={24} />
                </div>
                <h3 className="mb-1 text-sm font-medium text-gray-500">
                  {stat.label}
                </h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
