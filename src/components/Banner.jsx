import React from 'react';
import { ArrowRight, BookOpen, Code, GraduationCap, MessageCircle } from 'lucide-react';
import { useClerk } from '@clerk/react';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { openSignUp } = useClerk();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center">

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Door
            </span>
            <br />
            Academy
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Opening the door to digital opportunities
          </p>

          {/* Mission statement */}
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            A free mobile learning platform providing structured pathways in 
            <span className="font-semibold text-blue-600"> software development</span> and 
            <span className="font-semibold text-purple-600"> data analytics.</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up animation-delay-600">
            <button
              onClick={() => openSignUp({})}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Learning for Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Features/Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in animation-delay-800">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-4 mx-auto">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Software Development</h3>
              <p className="text-sm text-gray-600">Learn to build modern web applications from scratch</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-xl mb-4 mx-auto">
                <GraduationCap className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Analytics</h3>
              <p className="text-sm text-gray-600">Master data analysis and visualization techniques</p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-4 mx-auto">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">24/7 WhatsApp Support</h3>
              <p className="text-sm text-gray-600">Get help anytime from our community mentors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles for global CSS file */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Banner;