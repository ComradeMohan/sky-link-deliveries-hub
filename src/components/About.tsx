
import React from 'react';
import { Users, TrendingUp, Award, MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-sky-50 to-white">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Background design elements */}
              <div className="absolute -z-10 top-10 left-10 w-40 h-40 bg-skylink-200 rounded-full blur-xl opacity-40"></div>
              <div className="absolute -z-10 bottom-10 right-10 w-60 h-60 bg-teal-200 rounded-full blur-xl opacity-40"></div>
              
              {/* Main image */}
              <div className="relative z-10 bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-skylink-600 to-teal-500 flex items-center justify-center p-8">
                  {/* Drone team illustration */}
                  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Buildings */}
                    <rect x="30" y="100" width="40" height="100" fill="#f8fafc" />
                    <rect x="80" y="80" width="50" height="120" fill="#f1f5f9" />
                    <rect x="140" y="120" width="30" height="80" fill="#f8fafc" />
                    <rect x="180" y="70" width="60" height="130" fill="#f1f5f9" />
                    <rect x="250" y="110" width="30" height="90" fill="#f8fafc" />
                    
                    {/* Windows */}
                    <rect x="35" y="110" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="55" y="110" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="35" y="130" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="55" y="130" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    
                    <rect x="90" y="90" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="110" y="90" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="90" y="110" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="110" y="110" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="90" y="130" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    <rect x="110" y="130" width="10" height="10" fill="#0a72f5" opacity="0.3" />
                    
                    {/* Drones */}
                    <g transform="translate(80, 40)" className="animate-float">
                      <rect x="10" y="5" width="20" height="10" rx="2" fill="#ffffff" />
                      <rect x="0" y="7" width="10" height="2" fill="#ffffff" />
                      <rect x="30" y="7" width="10" height="2" fill="#ffffff" />
                      <circle cx="0" cy="8" r="3" fill="#ffffff" />
                      <circle cx="40" cy="8" r="3" fill="#ffffff" />
                    </g>
                    
                    <g transform="translate(180, 30)" className="animate-float" style={{animationDelay: '1s'}}>
                      <rect x="10" y="5" width="20" height="10" rx="2" fill="#ffffff" />
                      <rect x="0" y="7" width="10" height="2" fill="#ffffff" />
                      <rect x="30" y="7" width="10" height="2" fill="#ffffff" />
                      <circle cx="0" cy="8" r="3" fill="#ffffff" />
                      <circle cx="40" cy="8" r="3" fill="#ffffff" />
                    </g>
                    
                    <g transform="translate(130, 60)" className="animate-float" style={{animationDelay: '0.5s'}}>
                      <rect x="10" y="5" width="20" height="10" rx="2" fill="#ffffff" />
                      <rect x="0" y="7" width="10" height="2" fill="#ffffff" />
                      <rect x="30" y="7" width="10" height="2" fill="#ffffff" />
                      <circle cx="0" cy="8" r="3" fill="#ffffff" />
                      <circle cx="40" cy="8" r="3" fill="#ffffff" />
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* Stats card */}
              <div className="absolute -bottom-10 -right-10 bg-white rounded-lg shadow-lg p-6 z-20 animate-fade-in" style={{animationDelay: '0.4s'}}>
                <div className="text-center">
                  <h4 className="text-skylink-600 font-bold text-lg">Since 2023</h4>
                  <p className="text-gray-600 text-sm mt-1">Leading the aerial delivery revolution</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in order-1 lg:order-2" style={{animationDelay: '0.2s'}}>
            <h2 className="section-title text-left">
              About <span className="gradient-text">SkyLink</span>
            </h2>
            <p className="text-gray-600">
              SkyLink is a pioneer in drone delivery technology, providing businesses with a reliable, efficient, and 
              environmentally friendly alternative to traditional delivery methods. Our mission is to revolutionize 
              last-mile delivery through cutting-edge drone technology and seamless integration capabilities.
            </p>
            <p className="text-gray-600">
              Founded by aviation and technology experts, SkyLink has quickly become the leading drone delivery 
              integration platform, serving businesses across e-commerce, food delivery, healthcare, and more.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Expert Team</h4>
                  <p className="text-gray-600 text-sm">Aviation specialists, software engineers, and logistics experts</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Rapid Growth</h4>
                  <p className="text-gray-600 text-sm">300% YoY growth with operations across major cities</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Award-Winning</h4>
                  <p className="text-gray-600 text-sm">Recognized for innovation in logistics technology</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full gradient-bg flex items-center justify-center mr-4 flex-shrink-0">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">24/7 Support</h4>
                  <p className="text-gray-600 text-sm">Dedicated customer and developer support team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600">
              Join the growing list of businesses that have transformed their delivery operations with SkyLink.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Company logos would go here - using placeholders */}
            <div className="h-12 w-28 bg-gray-200 rounded-md opacity-60 animate-pulse-light"></div>
            <div className="h-12 w-32 bg-gray-200 rounded-md opacity-60 animate-pulse-light"></div>
            <div className="h-12 w-24 bg-gray-200 rounded-md opacity-60 animate-pulse-light"></div>
            <div className="h-12 w-36 bg-gray-200 rounded-md opacity-60 animate-pulse-light"></div>
            <div className="h-12 w-28 bg-gray-200 rounded-md opacity-60 animate-pulse-light"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
