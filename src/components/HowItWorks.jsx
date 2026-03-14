import React from 'react';
import { UserPlus, BookOpen, Code, Briefcase } from 'lucide-react';
import { useClerk } from '@clerk/react';

const HowItWorks = () => {

    const { openSignUp } = useClerk();


    const steps = [
        {
            icon: UserPlus,
            title: "Create Free Account",
            description: "Sign up in seconds - no payment details needed, just your commitment to learn."
        },
        {
            icon: BookOpen,
            title: "Choose Your Path",
            description: "Pick between Software Development or Data Analytics based on your interests."
        },
        {
            icon: Code,
            title: "Start Learning",
            description: "Access curated resources, complete projects, and track your progress."
        },
        {
            icon: Briefcase,
            title: "Launch Your Career",
            description: "Get certified, build your portfolio, and apply for entry-level tech roles."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Journey to Tech</h2>
                    <p className="text-xl text-gray-600">Four simple steps to start your digital career</p>
                </div>

                <div className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div key={index} className="text-center relative group">
                                    {/* Animated circle */}
                                    <div className="relative mb-6">
                                        <div className="w-20 h-20 mx-auto relative">
                                            {/* Pulsing effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-300"></div>

                                            {/* Main icon circle */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Step number */}
                                            <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600 font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                                                {index + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        Step {index + 1}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                            {step.title}
                                        </span>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>

                                    {/* arrow between steps  */}
                                    {index < steps.length - 1 && (
                                        <div className="hidden lg:block absolute top-10 -right-4 text-gray-300">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* call to action */}
                    <div className="text-center mt-12">
                        <p className="text-gray-500">
                            Ready to begin? <button onClick={() => openSignUp({})} className="text-blue-600 font-semibold hover:text-blue-700 hover:underline">Create your free account</button> and start your journey today!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;