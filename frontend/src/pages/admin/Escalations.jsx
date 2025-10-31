import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import StatsCard from '../../components/StatsCard'; // Component for the top metrics
import EscalationTable from '../../components/EscalationTable'; // Component for the main table

const Escalations = () => {
  const statsData = [
    { label: "Total Cases", value: "1,245", color: "text-purple-700" },
    { label: "Open Cases", value: "189", color: "text-red-600" },
    { label: "Resolved Cases", value: "987", color: "text-green-600" },
    { label: "Avg. Resolution Time", value: "2.5 Days", color: "text-blue-600" },
  ];

  return (
    <AdminLayout>
      {/* Header and Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Escalation Database
        </h1>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search cases, customers, etc..." 
            className="p-2 pl-10 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
      </div>

      {/* 1. Stats Cards Grid */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        {statsData.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* 2. Filter Bar and Export Button */}
      <div className="flex justify-between items-center mb-6 p-4 bg-white rounded-xl shadow-md">
        <div className="flex space-x-3">
          {['All Statuses', 'All Priorities', 'All Agents', 'Anytime'].map((filter, index) => (
            <select 
              key={index}
              className="p-2 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>{filter}</option>
            </select>
          ))}
        </div>
        
        <button className="flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors shadow-md text-sm">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Export Data
        </button>
      </div>

      {/* 3. Escalation Table */}
      <div className="bg-white p-6 rounded-xl shadow-md min-h-[50vh]">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Escalation Cases</h2>
        <EscalationTable />
      </div>
    </AdminLayout>
  );
};

export default Escalations;