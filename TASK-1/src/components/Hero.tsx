import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 animate-gradient"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-40 relative">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            <span className="text-blue-400 font-medium tracking-wider">WELCOME TO MY PORTFOLIO</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 animate-gradient-x">
                D Abhishek Yadav
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
              Crafting beautiful digital experiences through code and design.
              <span className="block mt-2 text-blue-400">Front-end Developer & UI/UX Enthusiast</span>
            </p>
            
            <div className="flex gap-6 mt-8">
              <SocialLink href="https://github.com/codewithshek" icon={<Github />} label="GitHub" />
              <SocialLink href="https://www.linkedin.com/in/dabhishekyadav/" icon={<Linkedin />} label="LinkedIn" />
              <SocialLink href="mailto:contact@dabhishekyadav.com" icon={<Mail />} label="Email" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300"
    >
      <span className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-800 transition-all duration-300">
        {icon}
      </span>
      <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
        {label}
      </span>
    </a>
  );
}