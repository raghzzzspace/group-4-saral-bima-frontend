import React from 'react';

const summaryData = {
    policyId: 'INSURIFY-2024-87654321',
    holder: 'Sarah Johnson',
    coverage: 'Comprehensive Motor Insurance',
    premium: '₹25,000',
    startDate: '2024-03-01',
    endDate: '2025-02-28',
    keyFeatures: [
        'Accidental Damage Protection', 'Third-Party Liability Cover', 
        'Own Damage Cover', 'Theft Protection', 'Roadside Assistance (24/7)', 
        'Personal Accident Cover'
    ],
    benefits: [
        'Quick & Hassle-Free Claim Processing', 'Dedicated Customer Support (24/7)', 
        'No-Claim Bonus (up to 50%)', 'Cashless Repair at Network Garages', 
        'Flexible Premium Payment Options', 'Add-on Covers Available'
    ]
};

const PolicySummaryDisplay = () => {
    
    // Data list structure for summary details
    const DetailItem = ({ label, value }) => (
        <div className="flex justify-between border-b border-gray-100 py-2">
            <span className="text-sm font-medium text-gray-500">{label}:</span>
            <span className="text-sm font-semibold text-gray-800">{value}</span>
        </div>
    );

    // List structure for tags (Key Features/Benefits)
    const TagList = ({ tags }) => (
        <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag, index) => (
                <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-700 border border-purple-200"
                >
                    {tag}
                </span>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
                Policy Summary
            </h2>

            {/* Summary Details */}
            <div className="mb-8 space-y-2">
                <DetailItem label="Policy ID" value={summaryData.policyId} />
                <DetailItem label="Policy Holder" value={summaryData.holder} />
                <DetailItem label="Coverage Type" value={summaryData.coverage} />
                <DetailItem label="Annual Premium" value={summaryData.premium} />
                <DetailItem label="Start Date" value={summaryData.startDate} />
                <DetailItem label="End Date" value={summaryData.endDate} />
            </div>

            {/* Key Features Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                    Key Features
                </h3>
                <TagList tags={summaryData.keyFeatures} />
            </div>

            {/* Benefits Section */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700">
                    Benefits
                </h3>
                <TagList tags={summaryData.benefits} />
            </div>

            {/* Download Button */}
            <button 
                className="mt-auto ml-auto px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                onClick={() => console.log('Downloading Summary...')}
            >
                Download Summary
            </button>
        </div>
    );
};

export default PolicySummaryDisplay;