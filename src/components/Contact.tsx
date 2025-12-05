import React from 'react';

interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <section id="contact" className={`bg-gray-20 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to discuss collaboration ideas? We'd love to hear from you!
        </p>

        <div className="mt-4 grid gap-6 md:gap-8 max-w-4xl mx-auto grid-cols-1 md:grid-cols-3">
          {/* Email Contact Method */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm px-6 py-8 transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 text-blue-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
            <div className="mt-4">
              <span className="block text-sm font-medium text-gray-500 mb-1">Email Us</span>
              <a
                href="mailto:wotorimovako@gmail.com"
                className="text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
              >
                wotorimovako@gmail.com
              </a>
            </div>
          </div>

          {/* Telegram Contact Method */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm px-6 py-8 transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 text-blue-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
              />
            </svg>
            <div className="mt-4">
              <span className="block text-sm font-medium text-gray-500 mb-1">Message on Telegram</span>
              <a
                href="https://t.me/wotorii"
                className="text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                @wotorii
              </a>
            </div>
          </div>

          {/* X (Twitter) Contact Method */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm px-6 py-8 transition-transform transition-shadow duration-200 hover:-translate-y-1 hover:shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.9 3H15.7L12 8.1 8.7 3H3.6L9.7 11.6 3.3 21H6.5L10.6 15.4 14.3 21h5.1L13.7 12.1 18.9 3Z" />
            </svg>
            <div className="mt-4">
              <span className="block text-sm font-medium text-gray-500 mb-1">Follow on X</span>
              <a
                href="https://x.com/EkzaSpace"
                className="text-base md:text-lg text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                @EkzaSpace
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 