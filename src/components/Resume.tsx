import React from 'react';
import umFullStackImg from '../images/UMFULLSTACK.jpg';
import ibmDataAnalystImg from '../images/IMBDATAANALYST.jpg';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // You can replace this with the actual path to your PDF resume
    const link = document.createElement('a');
    link.href = '/Matthew-Vogelsang-Full Stack Developer 2.pdf'; // Updated resume PDF
    link.download = 'Matthew-Vogelsang-Full-Stack-Developer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-text animate-on-scroll">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Download my resume to learn more about my experience and qualifications
          </p>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </button>
        </div>

        <div className="glass p-6 sm:p-8 rounded-2xl animate-on-scroll">
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-blue-600">Certifications</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <a 
                  href={umFullStackImg} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={umFullStackImg} 
                    alt="University of Miami Full Stack Developer Certification" 
                    className="w-full h-full object-cover"
                  />
                </a>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">Full Stack Developer</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">University of Miami</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href={ibmDataAnalystImg} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={ibmDataAnalystImg} 
                    alt="IBM Data Analyst Certification" 
                    className="w-full h-full object-cover"
                  />
                </a>
                <div>
                  <div className="font-semibold text-gray-800 dark:text-gray-200">Data Analyst</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">IBM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 