import React from 'react';

const Resume: React.FC = () => {
  const handleDownload = () => {
    // You can replace this with the actual path to your PDF resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Add your resume PDF to the public folder
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
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Full Stack Developer - University of Miami</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600 dark:text-gray-300">Data Analyst - IBM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 