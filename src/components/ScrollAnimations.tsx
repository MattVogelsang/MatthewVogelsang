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

    // Add scroll-triggered animations to all sections
    const sections = document.querySelectorAll('section, .animate-on-scroll');
    sections.forEach((section) => {
      section.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(section);
    });

    // Parallax effect for background elements
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

    // Add floating animation to certain elements
    const floatingElements = document.querySelectorAll('.floating');
    floatingElements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
      element.classList.add('animate-float');
    });

    // Add typing effect to text elements
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach((element) => {
      const text = element.textContent || '';
      element.textContent = '';
      element.classList.add('typing-animation');
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          (element as HTMLElement).textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      // Start typing when element comes into view
      const typingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            typeWriter();
            typingObserver.unobserve(entry.target);
          }
        });
      });
      
      typingObserver.observe(element);
    });

    // Add glow effect on hover
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