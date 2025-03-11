'use client';

import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Find which section is in view
      const sections = ['about', 'academic', 'experience', 'entrepreneurial', 'extracurricular'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { id: 'about', label: 'ABOUT', icon: '●' },
    { id: 'academic', label: 'ACADEMICS', icon: '●' },
    { id: 'experience', label: 'EXPERIENCE', icon: '●' },
    { id: 'entrepreneurial', label: 'STARTUP', icon: '●' },
    { id: 'extracurricular', label: 'ACTIVITIES', icon: '●' },
  ];

  return (
    <nav className="fixed left-0 top-0 h-screen z-50 group hidden md:block">
      <div className="relative h-full flex items-center">
        {/* Dark background bar */}
        <div className="absolute left-0 top-0 h-full w-[60px] bg-[#111111] group-hover:w-64 transition-all duration-300 ease-in-out shadow-lg" />
        
        {/* Navigation items */}
        <ul className="relative w-full">
          {navItems.map(({ id, label, icon }) => (
            <li key={id} className="relative">
              <a
                href={`#${id}`}
                className="flex items-center h-16 px-5 group/item hover:bg-[#222222] transition-all duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div 
                  className={`w-2 h-2 transition-all duration-300 flex items-center justify-center ${
                    activeSection === id 
                      ? 'text-[#ffc876] scale-150' 
                      : 'text-white group-hover/item:scale-125'
                  }`}
                >
                  {icon}
                </div>
                <span
                  className={`ml-8 text-sm font-bold transition-all duration-300 opacity-0 group-hover:opacity-100 whitespace-nowrap ${
                    activeSection === id 
                      ? 'text-[#ffc876] scale-110' 
                      : 'text-white group-hover/item:scale-105'
                  }`}
                >
                  {label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation; 