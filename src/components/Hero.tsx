
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-sky-50 to-white flex items-center">
      {/* Background elements */}
      <div className="hidden lg:block absolute top-1/4 right-10 w-64 h-64 bg-skylink-100 rounded-full opacity-30 animate-pulse-light"></div>
      <div className="hidden lg:block absolute bottom-1/4 left-10 w-48 h-48 bg-teal-100 rounded-full opacity-30 animate-pulse-light"></div>

      {/* SVG Path Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-24 w-full h-[60vh] opacity-20" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M-100,300 C100,100 400,500 700,300 S1000,400 1300,200" 
            className="drone-path animate-draw"
            strokeLinecap="round"
            strokeDasharray="1000"
            strokeDashoffset="1000"
          />
          <circle cx="700" cy="300" r="5" className="fill-skylink-600 animate-pulse" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="block">Revolutionary</span>
              <span className="gradient-text">Drone Delivery</span>
              <span className="block">Integration Platform</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              Empower your business with cutting-edge drone delivery technology. 
              Seamlessly integrate our services into your existing platform and 
              unlock the future of rapid, efficient deliveries.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary group" size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="border-skylink-600 text-skylink-600 hover:bg-skylink-50">
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-skylink-600">30+</span>
                <span className="text-gray-500">Partner Businesses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-skylink-600">99%</span>
                <span className="text-gray-500">Delivery Success</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-skylink-600">2x</span>
                <span className="text-gray-500">Faster Deliveries</span>
              </div>
            </div>
          </div>

          <div className="relative lg:block animate-fade-in" style={{animationDelay: '0.5s'}}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Drone Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 animate-float">
                  <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    {/* Main drone body */}
                    <rect x="80" y="40" width="40" height="20" rx="5" fill="#0a72f5" />
                    
                    {/* Arms */}
                    <rect x="50" y="45" width="30" height="5" fill="#114bb6" />
                    <rect x="120" y="45" width="30" height="5" fill="#114bb6" />
                    
                    {/* Propellers */}
                    <circle cx="45" cy="47.5" r="10" fill="#eef7ff" stroke="#0a72f5" strokeWidth="2" />
                    <circle cx="155" cy="47.5" r="10" fill="#eef7ff" stroke="#0a72f5" strokeWidth="2" />
                    
                    {/* Camera */}
                    <circle cx="100" cy="70" r="5" fill="#1eaa9d" />
                    
                    {/* Package */}
                    <rect x="90" y="75" width="20" height="15" rx="2" fill="#73ded0" />
                  </svg>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-skylink-200 rounded-full blur-xl opacity-60"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-200 rounded-full blur-xl opacity-60"></div>
            </div>
            
            {/* Map illustration */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-100 to-transparent rounded-xl opacity-70">
              <div className="absolute inset-0 overflow-hidden">
                <svg viewBox="0 0 100 30" className="w-full h-full opacity-30">
                  <path d="M0,15 Q25,5 50,15 T100,15" stroke="#0a72f5" strokeWidth="0.5" fill="none" />
                  <path d="M0,20 Q35,25 70,15 T100,20" stroke="#1eaa9d" strokeWidth="0.5" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
