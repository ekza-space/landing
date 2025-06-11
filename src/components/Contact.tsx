import React from 'react';

interface ContactProps {
  className?: string;
}

export const Contact: React.FC<ContactProps> = ({ className = '' }) => {
  return (
    <section id="contact" className={`bg-gray-20 py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 md:mb-12 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to discuss collaboration ideas? We'd love to hear from you!
        </p>

        <div className="space-y-8 md:space-y-6 max-w-md mx-auto">
          {/* Email Contact Method */}
          <div className="flex flex-col items-center text-center">
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
            <div>
              <span className="block text-sm font-medium text-gray-500">Email Us</span>
              <a
                href="mailto:wotorimovako@gmail.com"
                className="text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
              >
                wotorimovako@gmail.com
              </a>
            </div>
          </div>

          {/* Telegram Contact Method */}
          <div className="flex flex-col items-center text-center">
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
            <div>
              <span className="block text-sm font-medium text-gray-500">Message on Telegram</span>
              <a
                href="https://t.me/wotorii"
                className="text-xl text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-150"
                target="_blank"
                rel="noopener noreferrer"
              >
                @wotorii
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 