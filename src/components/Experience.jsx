import { GraduationCap, Code, Users, Award } from 'lucide-react';

function Experience() {
  const timeline = [
    {
      icon: GraduationCap,
      title: 'University of California',
      subtitle: 'Bachelor of Science in Computer Science',
      date: 'Sep 2024 - Expected May 2028',
      description: 'Currently maintaining a 3.8 GPA with a focus on software engineering and web development.',
      details: [
        'Relevant Coursework: Data Structures, Algorithms, Web Development, Object-Oriented Programming',
        'Dean\'s List: Fall 2024',
      ],
      color: 'blue',
    },
    {
      icon: Code,
      title: 'Personal Project Development',
      subtitle: 'Independent Study',
      date: 'Jan 2024 - Present',
      description: 'Building full-stack web applications to strengthen development skills and create portfolio projects.',
      details: [
        'Developed 12+ projects using React, JavaScript, and modern web technologies',
        'Implemented responsive designs and user-friendly interfaces',
        'Practiced version control with Git and GitHub',
      ],
      color: 'green',
    },
    {
      icon: Users,
      title: 'Computer Science Club',
      subtitle: 'Active Member',
      date: 'Sep 2024 - Present',
      description: 'Participating in coding workshops, hackathons, and collaborative projects with fellow students.',
      details: [
        'Attended weekly coding workshops and tech talks',
        'Collaborated on group projects using agile methodologies',
        'Mentoring freshmen in introductory programming courses',
      ],
      color: 'orange',
    },
    {
      icon: Award,
      title: 'Hackathon Participation',
      subtitle: 'HackUC 2025',
      date: 'Feb 2025',
      description: 'Built a weather notification app in 24 hours with a team of four students.',
      details: [
        'Implemented real-time weather alerts using API integration',
        'Collaborated using Git for version control',
        'Presented project to panel of judges',
      ],
      color: 'gray',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: 'bg-blue-50',
        icon: 'text-blue-600',
        line: 'bg-blue-200',
      },
      green: {
        bg: 'bg-green-50',
        icon: 'text-green-600',
        line: 'bg-green-200',
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'text-orange-600',
        line: 'bg-orange-200',
      },
      gray: {
        bg: 'bg-gray-50',
        icon: 'text-gray-600',
        line: 'bg-gray-200',
      },
    };
    return colors[color] || colors.gray;
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const colors = getColorClasses(item.color);
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  <div className={`md:flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                    <div className="flex-1">
                      <div className={`${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                          <div className="flex items-start gap-4 md:hidden mb-4">
                            <div className={`${colors.bg} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Icon className={colors.icon} size={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                              <p className="text-blue-600 font-medium">{item.subtitle}</p>
                            </div>
                          </div>

                          <div className="hidden md:block mb-4">
                            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                            <p className="text-blue-600 font-medium">{item.subtitle}</p>
                          </div>

                          <p className="text-sm text-gray-500 font-medium mb-3">{item.date}</p>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <ul className="space-y-2">
                            {item.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                                <span className="text-blue-600 mr-2 flex-shrink-0">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10`}>
                        <Icon className={colors.icon} size={28} />
                      </div>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
