import React from "react";
import { UploadCloud, Clock } from 'lucide-react';
import { PolicyHolderLayout } from '../../layout/policyHolderLayout';

export const UploadPolicy = () => {
    const tags = ["Health Insurance", "Motor Insurance", "Travel Insurance", "Home Insurance"];

    return (
        <PolicyHolderLayout>
            <div className="w-full h-full px-4 sm:px-6 lg:px-8 flex justify-center items-start">
                <div className="w-full max-w-2xl flex flex-col items-center py-12">

                    {/* Upload Card */}
                    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-center border border-gray-100 w-full">
                        <UploadCloud className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">
                            Upload Your Insurance Policy
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Get AI-powered summaries in under 3 minutes
                        </p>

                        {/* Tags */}
                        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap mb-8">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className={`rounded-full px-4 py-1.5 text-sm font-medium cursor-pointer ${tag === 'Motor Insurance'
                                        ? 'bg-indigo-100 text-indigo-700 ring-1 ring-indigo-300'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        } transition-colors`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Upload Button */}
                        <button className="w-full sm:w-auto bg-indigo-600 text-white rounded-lg py-3 px-8 font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Click to Upload
                        </button>
                        <p className="text-gray-400 text-sm mt-3">PDF, DOC up to 10MB</p>
                    </div>

                    {/* Helper Text */}
                    <div className="flex items-center justify-center gap-2 text-gray-600 mt-6">
                        <Clock className="h-5 w-5" />
                        <span>Analysis typically completes in 2–3 minutes</span>
                    </div>
                </div>
            </div>
        </PolicyHolderLayout>
    );
};