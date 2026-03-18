import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      details: 'support@digitaldooracademy.org',
      href: 'mailto:support@digitaldooracademy.org'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+27 (0) 798054459',
      href: 'tel:+27 (0) 798054459'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Johannesburg, South Africa',
      href: '#'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '24/7 Support',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      {/* Simple Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 pt-30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with Digital Door Academy
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-600 text-sm">{method.details}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Simple Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Send a Message</h2>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Simple Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-gray-600 mb-6">Johannesburg, South Africa</p>
          <div className="h-64 bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              title="Digital Door Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114386.40293797865!2d27.98775785!3d-26.1715045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1645567890123!5m2!1sen!2sus"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;