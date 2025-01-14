import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "A beautiful web application showcasing modern design principles and React best practices.",
      tags: ["React", "TypeScript", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "Project Two",
      description: "An innovative UI/UX design implementation with focus on accessibility and performance.",
      tags: ["UI/UX", "Next.js", "CSS"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Star className="text-blue-400" size={32} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              Featured Projects
            </span>
          </h2>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, github, demo }: {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
}) {
  return (
    <div className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 hover:from-gray-800 hover:to-gray-900 transition-all duration-500">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500"></div>
      
      <div className="relative">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={github}
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Github size={16} />
            View Source
          </a>
          <a
            href={demo}
            className="flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}