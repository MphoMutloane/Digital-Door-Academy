import React from 'react';
import { Target, Eye } from 'lucide-react';

const AboutPage = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* Header with Background Image */}
            <section className="relative py-16 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Students celebrating graduation"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-24">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Opening the door to digital opportunity for underprivileged youth
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                            <Target className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            To provide free, structured learning pathways in software development and data analytics
                            for underprivileged youth, removing financial barriers and opening doors to digital careers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Vision Section with Background Image */}
            <section className="relative py-20 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Students working in tech"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white/90"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
                            <Eye className="w-8 h-8 text-purple-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                            A world where every young person, regardless of their background or financial situation,
                            has the opportunity to build a successful career in technology and transform their future.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;