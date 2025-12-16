import { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
}

const ScrollAnimations = ({ children }: ScrollAnimationsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const setupAnimations = () => {
      const sections = document.querySelectorAll('section, .animate-on-scroll');
      sections.forEach((section, index) => {
        section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-500', 'ease-out');
        (section as HTMLElement).style.transitionDelay = `${Math.min(index * 0.03, 0.3)}s`;
        observer.observe(section);
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(setupAnimations, { timeout: 500 });
    } else {
      setTimeout(setupAnimations, 50);
    }

    const floatingElements = document.querySelectorAll('.floating, .floating-tech');
    floatingElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      if (!element.classList.contains('floating-tech')) {
        element.classList.add('animate-float');
      }
    });

    const glowElements = document.querySelectorAll('.glow, .neon-glow');
    glowElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        element.classList.add('glow-active');
      });
      element.addEventListener('mouseleave', () => {
        element.classList.remove('glow-active');
      });
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
};

export default ScrollAnimations; 