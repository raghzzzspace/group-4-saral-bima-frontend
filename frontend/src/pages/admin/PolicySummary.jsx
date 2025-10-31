import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import UploadPolicySection from '../../components/UploadPolicySection';
import PolicySummaryDisplay from '../../components/PolicySummaryDisplay';

const PolicySummary = () => {
  return (
    <AdminLayout>
      {/* Header and Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Policy Summary Generation
          </h1>
          <p className="text-sm text-gray-500">
            Generate concise summaries from uploaded policy documents.
          </p>
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search policies, customers, etc..." 
            className="p-2 pl-10 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* Main Content: Upload (1/3) and Summary (2/3) */}
      <div className="grid grid-cols-3 gap-6">
        
        {/* Column 1: Upload Section */}
        <div className="col-span-1 bg-white p-6 rounded-xl shadow-md min-h-[70vh]">
          <UploadPolicySection />
        </div>

        {/* Column 2: Summary Display */}
        <div className="col-span-2 bg-white p-6 rounded-xl shadow-md min-h-[70vh]">
          <PolicySummaryDisplay />
        </div>
      </div>
    </AdminLayout>
  );
};

export default PolicySummary;