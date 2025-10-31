import React from 'react';
import AdminLayout from '../../layout/adminLayout'; 
import VehicleDataTable from '../../components/VehicleDataTable'; 

const ActuarialData = () => {
  return (
    <AdminLayout>
      {/* Header and Search Bar */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Vehicle Data Extraction
          </h1>
          <p className="text-sm text-gray-500">
            Extracted competitor vehicle details for Q1 2024
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

      {/* Main Content Card */}
      <div className="bg-white p-6 rounded-xl shadow-md min-h-[85vh]"> {/* min-h-screen alternative */}
        
        {/* Filter Bar */}
        <div className="flex items-center space-x-3 mb-8">
          
          {/* Quarter Dropdown */}
          <select className="p-2 border border-gray-300 rounded-lg bg-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500">
            <option>Q1 2024</option>
            <option>Q4 2023</option>
          </select>
          
          {/* Search by Vehicle Number */}
          <input 
            type="text" 
            placeholder="Search by vehicle number..." 
            className="p-2 border border-gray-300 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Filter Buttons */}
          {['Make', 'Fuel Type', 'RTO Location', 'Age'].map((label) => (
            <button key={label} className="flex items-center p-2 border border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-700">
              {label} 
              <span className="ml-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </span>
            </button>
          ))}
        </div>

        {/* Table Section */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Competitor Vehicle Details
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Extracted data from competitor motor policies for analysis.
        </p>

        {/* Vehicle Data Table Component */}
        <VehicleDataTable />

      </div>
    </AdminLayout>
  );
};

export default ActuarialData;