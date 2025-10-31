import React from 'react';
import { PolicyHolderHeader } from '../components/policyHolderHeader';

export const PolicyHolderLayout = ({ children }) => {
    return (
        // Must use h-screen and w-screen to guarantee full viewport size
        <div className="min-h-screen w-screen bg-gray-50 overflow-x-hidden">
            <PolicyHolderHeader />

            <main className="w-full h-full">
                {children}
            </main>
        </div>
    );
};

