import React from 'react';
import { ShieldCheck, Mail, Lock } from 'lucide-react';

export default function LoginPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login form submitted');
    };

    return (
        <div className="fixed inset-0 z-0 w-full h-full bg-gradient-to-br from-violet-100 to-indigo-200 flex flex-col justify-start items-center px-4 py-12 sm:py-16 font-sans overflow-y-auto">

            {/* 1. Logo/Main Title */}
            <div className="flex items-center mb-6 text-indigo-600">
                <ShieldCheck className="h-8 w-8" />
                <h1 className="text-3xl font-bold text-gray-800 ml-2">Saral Bima</h1>
            </div>

            {/* 2. Main Login Card */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-md">

                {/* Card Header */}
                <h2 className="text-3xl font-bold text-gray-900 text-center">
                    Welcome Back
                </h2>
                <p className="text-sm text-gray-500 text-center mb-8">
                    Login to your account
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit}>

                    {/* Email/Mobile Input Group */}
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Mobile Number / Email ID
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                type="text"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                            />
                        </div>
                    </div>

                    {/* Password Input Group */}
                    <div className="mb-6">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Password
                        </label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </span>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full pl-11 pr-3 py-3 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3.5 rounded-lg font-semibold text-sm uppercase tracking-wide hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Links */}
                <div className="flex flex-col sm:flex-row justify-between items-center mt-6 text-sm">
                    <a
                        href="#"
                        className="font-medium text-indigo-600 hover:underline mb-2 sm:mb-0"
                    >
                        Forgot Password?
                    </a>
                    <a href="#" className="text-gray-700 hover:text-black">
                        New User?{' '}
                        <span className="font-medium text-indigo-600 hover:underline">
                            Sign Up
                        </span>
                    </a>
                </div>
            </div>
            {/* End Login Card */}

            {/* 3. Bottom Cards Section */}
            <div className="flex flex-col md:flex-row gap-6 lg:gap-8 mt-10 w-full max-w-4xl">

                {/* FAQ Card */}
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        FAQ Section
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Find answers to common questions about our insurance plans, claims,
                        and account management. We're here to help you understand your
                        coverage better.
                    </p>
                </div>

                {/* News Card */}
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        General Insurance News
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Stay updated with the latest news in the insurance industry. Learn
                        about new regulations, tips for staying safe, and how to make the
                        most of your policies.
                    </p>
                </div>
            </div>
            {/* End Bottom Cards */}

        </div>
    );
}