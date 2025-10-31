import React from 'react';
import { UserHeader } from '../components/UserHeader';

export const UserLayout = ({ children }) => {
    return (
        <div className="min-h-screen w-screen bg-gray-50 overflow-x-hidden">
            <UserHeader />

            <main className="w-full h-full pt-20 px-4 sm:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
};
