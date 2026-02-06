import { Github, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: 'Task Manager Pro',
      description: 'A full-featured task management application with drag-and-drop functionality and real-time updates.',
      features: [
        'Drag and drop task organization',
        'Priority levels and due dates',
        'Responsive design for mobile and desktop',
      ],
      techStack: ['React', 'Tailwind CSS', 'Local Storage'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Weather Dashboard',
      description: 'Clean and intuitive weather application showing current conditions and 5-day forecasts.',
      features: [
        'Real-time weather data integration',
        'Location search and geolocation',
        'Clean UI with weather animations',
      ],
      techStack: ['React', 'API Integration', 'CSS3'],
      image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website showcasing projects, skills, and contact information.',
      features: [
        'Fully responsive design',
        'Smooth scrolling navigation',
        'Contact form integration',
      ],
      techStack: ['React', 'Tailwind CSS', 'Vite'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Recipe Finder',
      description: 'Discover and save your favorite recipes with this intuitive recipe search application.',
      features: [
        'Search recipes by ingredients',
        'Save favorite recipes',
        'Nutritional information display',
      ],
      techStack: ['JavaScript', 'HTML', 'CSS', 'Recipe API'],
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Study Timer',
      description: 'Pomodoro-style study timer to boost productivity and manage study sessions effectively.',
      features: [
        'Customizable timer intervals',
        'Session tracking and statistics',
        'Break reminders',
      ],
      techStack: ['React', 'JavaScript', 'Tailwind CSS'],
      image: 'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in web development and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48 bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
