'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'academic', label: 'Academic Profile' },
  { id: 'experience', label: 'Experience' },
  { id: 'entrepreneurial', label: 'Entrepreneurial Experiences' },
  { id: 'extracurricular', label: 'Extracurricular Activities' },
];

export default function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Floating hamburger button */}
      <button
        onClick={toggleMenu}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-[#111111] md:hidden flex items-center justify-center transition-all duration-300 ${
          isMenuOpen ? 'rotate-90' : ''
        }`}
      >
        <div className="relative w-full h-full overflow-hidden rounded-full">
          <Image
            src="/assets/profile.jpg"
            alt="Menu"
            fill
            className="object-cover"
            priority
          />
        </div>
      </button>

      {/* Mobile menu with circular transition */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) calc(100% - 2.5rem))' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) calc(100% - 2.5rem))' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) calc(100% - 2.5rem))' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed bottom-0 right-0 z-40 md:hidden w-full h-screen"
          >
            <div className="absolute inset-0 bg-[#111111] flex flex-col justify-center">
              <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="#111111"
                >
                  <path d="M0,100 C30,30 70,30 100,100" />
                </svg>
              </div>
              
              <div className="flex-1 px-4 overflow-y-auto flex items-center">
                <div className="w-full space-y-8">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-center transition-all duration-300 py-2 ${
                        activeSection === section.id 
                          ? 'text-[#ffc876] text-2xl font-bold' 
                          : 'text-white text-xl font-medium hover:text-[#ffc876]'
                      }`}
                    >
                      {section.label.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 