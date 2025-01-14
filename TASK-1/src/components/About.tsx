import React from 'react';
import { Code2, Cpu, Palette, Rocket } from 'lucide-react';

export function About() {
  return (
    <section className="relative py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
            <Code2 className="text-blue-400" size={32} />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                As a Computer Science and Engineering student at Vardhaman College of Engineering, 
                I am deeply immersed in the dynamic world of web development.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My passion lies in front-end technologies and UI/UX design, where I blend creativity 
                with technical prowess to forge digital experiences that captivate and engage.
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Currently, I am sharpening my skills in creating intuitive interfaces that speak 
                directly to the user's needs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey is one of continuous learning and growth, driven by a commitment to 
                excel in the digital arena. I am not just preparing for the future; I am striving 
                to redefine it.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <SkillCard
              icon={<Palette className="text-purple-400" />}
              title="UI/UX Design"
              description="Creating intuitive and beautiful user interfaces"
            />
            <SkillCard
              icon={<Cpu className="text-blue-400" />}
              title="Front-end Development"
              description="Building responsive and modern web applications"
            />
            <SkillCard
              icon={<Rocket className="text-emerald-400" />}
              title="Performance"
              description="Optimizing for speed and user experience"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300">
      <div className="p-3 bg-gray-800/50 rounded-lg w-fit group-hover:scale-110 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}