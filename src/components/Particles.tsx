import React, { useEffect } from 'react';

const Particles: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const particleCount = 60;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      const duration = Math.random() * 20 + 10;
      particle.style.animationDuration = `${duration}s`;
      
      const delay = Math.random() * 5;
      particle.style.animationDelay = `${delay}s`;
      
      container.appendChild(particle);
    }
  }, []);

  return <div id="particles-container" className="particles-container" />;
};

export default Particles;