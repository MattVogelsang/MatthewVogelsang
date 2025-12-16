import React from 'react';
import umFullStackImg from '../../images/UMFULLSTACK.jpg';
import ibmDataAnalystImg from '../../images/IMBDATAANALYST.jpg';

const Resume: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Matthew-Vogelsang-Full Stack Developer...pdf';
    link.download = 'Matthew-Vogelsang-Full-Stack-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      <div className="section-divider"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text animate-on-scroll">
            Resume
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
          <button
            onClick={handleDownload}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 font-semibold overflow-hidden"
          >
            <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span className="relative z-10">Download Resume</span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
          </button>
        </div>

        <div className="glass-effect p-8 sm:p-10 rounded-3xl animate-on-scroll">
          <div>
            <h3 className="text-3xl font-bold mb-8 gradient-text">Certifications</h3>
            <div className="space-y-8">
              <div className="group flex items-center space-x-6 p-6 glass-effect rounded-2xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-[1.02]">
                <a 
                  href={umFullStackImg} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group/image"
                >
                  <img 
                    src={umFullStackImg} 
                    alt="University of Miami Full Stack Developer Certification" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover/image:border-cyan-500/50 rounded-xl transition-all duration-300"></div>
                </a>
                <div className="flex-1">
                  <div className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2 group-hover:text-cyan-400 transition-colors duration-300">Full Stack Developer</div>
                  <div className="text-base text-gray-600 dark:text-gray-400">University of Miami</div>
                </div>
              </div>
              <div className="group flex items-center space-x-6 p-6 glass-effect rounded-2xl hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
                <a 
                  href={ibmDataAnalystImg} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer group/image"
                >
                  <img 
                    src={ibmDataAnalystImg} 
                    alt="IBM Data Analyst Certification" 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover/image:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-magenta-500/20 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border-2 border-purple-500/0 group-hover/image:border-purple-500/50 rounded-xl transition-all duration-300"></div>
                </a>
                <div className="flex-1">
                  <div className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2 group-hover:text-purple-400 transition-colors duration-300">Data Analyst</div>
                  <div className="text-base text-gray-600 dark:text-gray-400">IBM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  );
};

export default Resume; 