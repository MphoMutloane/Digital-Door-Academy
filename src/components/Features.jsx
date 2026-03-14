import React from 'react';
import { 
  Globe, 
  Clock, 
  Award, 
  Users, 
  BookOpen, 
  MessageCircle,
  TrendingUp,
  Target
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Globe,
      title: "100% Free Access",
      description: "All courses and resources are completely free - no hidden fees, no credit cards required."
    },
    {
      icon: Clock,
      title: "Learn at Your Pace",
      description: "Self-paced learning with structured pathways designed for flexible schedules."
    },
    {
      icon: MessageCircle,
      title: "24/7 WhatsApp Support",
      description: "Get instant help from mentors and peers anytime through our WhatsApp community."
    },
    {
      icon: Award,
      title: "Industry-Relevant Skills",
      description: "Curriculum designed with input from tech industry professionals."
    },
    {
      icon: Users,
      title: "Community Learning",
      description: "Join a community of motivated learners and mentors supporting each other."
    },
    {
      icon: TrendingUp,
      title: "Career Guidance",
      description: "Get advice on job applications, interviews, and career progression."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Digital Door Academy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to removing barriers and opening doors to digital careers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;