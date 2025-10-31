import React from 'react';
import AdminLayout from '../../layout/adminLayout';
import CustomerDemographics from '../../components/CustomerDemographics';
import PolicyTypesChart from '../../components/PolicyTypesChart';
import UploadFrequency from '../../components/UploadFrequency';
import EngagementRate from '../../components/EngagementRate';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Real-time Analytics Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Data updates daily at midnight.
          </p>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search policies, customers, etc..."
            className="p-2 pl-10 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-[calc(100vh-8rem)]">
        {/* Row 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <CustomerDemographics />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <PolicyTypesChart />
        </div>

        {/* Row 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <UploadFrequency />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
          <EngagementRate />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
