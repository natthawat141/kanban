'use client';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';

const Banner = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-110"
        style={{
          backgroundImage: `url('/img/banner.png')`,
          transform: `translateY(${scrollPosition * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      {/* Floating Particles Background */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full">
          {[...Array(20)].map((_, index) => (
            <div
              key={index}
              className="absolute bg-white rounded-full opacity-30"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                transform: `translateY(${scrollPosition * (Math.random() * 0.8 + 0.2)}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            />
          ))}
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-gray-900"></div>

      {/* Content */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4"
        style={{
          transform: `translateY(${scrollPosition * 0.2}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Animated Lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="absolute h-px bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
              style={{
                top: `${index * 25}%`,
                transform: `translateX(${Math.sin(scrollPosition * 0.002 + index) * 50}px)`,
                opacity: 0.5 - (scrollPosition * 0.001)
              }}
            />
          ))}
        </div>

        {/* Title Section */}
        <div className="relative mb-6" data-aos="fade-up">
          <h1 className="text-7xl font-bold relative z-10 p-2
                      text-white
                      hover:scale-105 transition-transform duration-300
                      [text-shadow:_0_0_30px_rgb(255_255_255_/_20%)]"
          >
            <span className="relative inline-block
                         before:content-[''] before:absolute before:-inset-1
                         before:w-full before:h-full before:bg-gradient-to-r 
                         before:from-white/10 before:via-white/20 before:to-white/10
                         before:blur-xl before:transform before:scale-150
                         before:-z-10
                         animate-pulse-slow">
              natthawat
            </span>
            <br />
            <span className="relative inline-block
                         mt-2
                         before:content-[''] before:absolute before:-inset-1
                         before:w-full before:h-full before:bg-gradient-to-r 
                         before:from-white/10 before:via-white/20 before:to-white/10
                         before:blur-xl before:transform before:scale-150
                         before:-z-10
                         animate-pulse-slow">
              sawatdee
            </span>
          </h1>
          
          {/* Animated decorative elements */}
          <div className="absolute -inset-2 bg-gradient-to-r from-white/10 via-white/20 to-white/10 
                       rounded-lg opacity-20 blur-xl animate-pulse" />
          
          {/* Floating particles around the text */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-overlay animate-float"
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                background: 'white',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.3,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`
              }}
            />
          ))}
        </div>

        <p
          className="text-xl max-w-2xl mb-8 opacity-90 text-white"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          การบ้าน week 8 natthawat sawatdee
        </p>

        <button
          className="relative overflow-hidden group px-8 py-4 
                   bg-gradient-to-r from-white/10 to-white/5
                   hover:from-white/20 hover:to-white/10 
                   backdrop-blur-sm transition-all duration-300 
                   rounded-lg shadow-lg
                   border border-white/20 hover:border-white/40"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          {/* Button Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine" />
          </div>

          <span className="relative z-10 font-semibold tracking-wider text-white">
            Learn More
          </span>
        </button>
      </div>
    </div>
  );
};

// Styles
const styles = `
  @keyframes shine {
    from { transform: translateX(-100%); }
    to { transform: translateX(100%); }
  }

  .animate-shine {
    animation: shine 2s infinite;
  }

  @keyframes float {
    0% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
    100% { transform: translateY(0px) rotate(360deg); }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  @keyframes pulse-slow {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }

  .animate-pulse-slow {
    animation: pulse-slow 3s ease-in-out infinite;
  }
`;

// Add the styles to the document
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Banner;