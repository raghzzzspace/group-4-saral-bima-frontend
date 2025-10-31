import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import PolicyAnalysisPanel from '../../components/PolicyAnalysisPanel';

const PolicyAnalysis = () => {
  return (
    <AdminLayout>
      {/* Header and Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Policy Risk & Premium Analysis
          </h1>
          <p className="text-sm text-gray-500">
            Analyze risk factors and predict optimal premiums for policy groups.
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

      {/* Analysis Filters & Controls */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
          Analysis Parameters
        </h2>
        <div className="grid grid-cols-6 gap-4 items-end">
          
          {/* Filter 1: Policy Type */}
          <div className="col-span-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Policy Type</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-purple-500">
              <option>Auto</option>
              <option>Home</option>
              <option>Life</option>
              <option>Health</option>
            </select>
          </div>

          {/* Filter 2: Geographic Region */}
          <div className="col-span-1">
            <label className="block text-xs font-medium text-gray-500 mb-1">Region</label>
            <select className="w-full p-2 border border-gray-300 rounded-lg bg-white focus:ring-purple-500">
              <option>North</option>
              <option>South</option>
              <option>East</option>
            </select>
          </div>

          {/* Filter 3: Customer Age Range */}
          <div className="col-span-2">
            <label className="block text-xs font-medium text-gray-500 mb-1">Age Range (Min - Max)</label>
            <div className="flex space-x-2">
                <input type="number" placeholder="Min Age" className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-purple-500" />
                <input type="number" placeholder="Max Age" className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-purple-500" />
            </div>
          </div>

          {/* Action Button */}
          <div className="col-span-2 flex justify-end">
            <button className="px-5 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
              Run Analysis
            </button>
          </div>
        </div>
      </div>

      {/* Analysis Results Panel */}
      <div className="bg-white p-6 rounded-xl shadow-md min-h-[50vh]">
        <PolicyAnalysisPanel />
      </div>

    </AdminLayout>
  );
};

export default PolicyAnalysis;