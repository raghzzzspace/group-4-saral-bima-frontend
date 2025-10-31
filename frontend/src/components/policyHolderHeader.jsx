import React from 'react';
import { ShieldCheck, Bell, User, Search } from 'lucide-react';

export const PolicyHolderHeader = () => {
    return (
        <header className="fixed top-0 left-0 w-screen h-16 bg-indigo-600 text-white flex items-center justify-between px-4 sm:px-6 shadow-md z-50">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <ShieldCheck className="h-7 w-7" />
                <h1 className="text-2xl font-bold">SaralBima</h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 sm:gap-6">
                {/* Search */}
                <div className="relative hidden md:block w-64">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="h-5 w-5 text-indigo-100" />
                    </span>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-indigo-500 placeholder-indigo-100 text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:bg-indigo-400 transition"
                    />
                </div>

                {/* Notification */}
                <button className="relative p-1 rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
                    <Bell className="h-6 w-6" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>

                {/* Profile */}
                <button className="p-1 rounded-full hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white">
                    <User className="h-6 w-6" />
                </button>
            </div>
        </header>
    );
};
