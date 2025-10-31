import React from 'react';

const UploadPolicySection = () => {
    // Placeholder function for handling file drop/click
    const handleFileUpload = (e) => {
        e.preventDefault();
        // Logic to handle file upload
        console.log("File change event triggered");
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Upload Policy Document
            </h2>

            {/* Drag & Drop Area - Enhanced Styling */}
            <div 
                className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50 text-center cursor-pointer hover:border-purple-600 hover:bg-purple-100 transition-all duration-200"
                onClick={() => document.getElementById('file-upload').click()}
                onDragOver={(e) => {
                    e.preventDefault();
                    e.currentTarget.classList.add('border-purple-600', 'bg-purple-100'); // Optional: Add drag-over highlight
                }}
                onDragLeave={(e) => {
                    e.currentTarget.classList.remove('border-purple-600', 'bg-purple-100');
                }}
                onDrop={handleFileUpload}
            >
                {/* Enhanced Cloud Upload Icon (SVG) */}
                <svg className="w-10 h-10 text-purple-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.884-7.83l-.004-.004A6 6 0 0115.75 8a6 6 0 014.5 9.778M16 16l-4-4m0 0l-4 4m4-4v9"></path>
                </svg>
                
                <p className="font-semibold text-purple-800">Drag & Drop or <span className="underline">Click to Browse</span></p>
                <p className="mt-1 text-xs text-purple-500">Supported formats: PDF, DOCX, etc.</p>
                <input type="file" id="file-upload" className="hidden" onChange={handleFileUpload} />
            </div>

            {/* Uploaded Files List */}
            <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                <ul className="list-none p-0 mt-2 space-y-1 text-sm text-purple-600">
                    {/* Placeholder for uploaded file with an icon */}
                    <li className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-2.414-2.414A1 1 0 0015.586 6H7a2 2 0 00-2 2v11a2 2 0 002 2z"></path></svg>
                        <span>policy_document_A.pdf</span>
                    </li>
                </ul>
            </div>

            {/* Generate Button */}
            <button 
                className="mt-auto px-5 py-2 bg-purple-600 text-white text-base font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md"
                onClick={() => console.log('Generating Summary...')}
            >
                Generate Summary
            </button>
        </div>
    );
};

export default UploadPolicySection;