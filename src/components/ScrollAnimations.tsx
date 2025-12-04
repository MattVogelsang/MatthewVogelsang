import { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations = ({ children }: ScrollAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section, .animate-on-scroll');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(section);
    });

    const parallaxElements = document.querySelectorAll('.parallax');
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      element.classList.add('animate-float');
    });

    const glowElements = document.querySelectorAll('.glow');
    glowElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('glow');
      });
      element.addEventListener('mouseleave', () => {
        element.classList.remove('glow');
      });
    });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollAnimations; 