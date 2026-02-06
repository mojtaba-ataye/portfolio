function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
      color: "blue",
    },
    {
      title: "Programming",
      skills: ["JavaScript", "Python", "Java", "Data Structures", "OOP"],
      color: "green",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vite", "Chrome DevTools"],
      color: "orange",
    },
    {
      title: "Currently Learning",
      skills: ["TypeScript", "SQL"],
      color: "gray",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 text-blue-700 border-blue-200",
      green: "bg-green-50 text-green-700 border-green-200",
      orange: "bg-orange-50 text-orange-700 border-orange-200",
      gray: "bg-gray-50 text-gray-700 border-gray-300",
    };
    return colors[color] || colors.gray;
  };

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 transition-shadow bg-white border border-gray-200 rounded-xl hover:shadow-lg"
            >
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border ${getColorClasses(
                      category.color,
                    )} transition-transform hover:scale-105`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
