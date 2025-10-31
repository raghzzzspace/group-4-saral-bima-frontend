import { UserLayout } from '../../layout/UserLayout';
import {
  Building2, Bot, Send, ArrowUpRight
} from 'lucide-react';

export const PolicyDashboard = () => {
  const hospitals = ["Hospital 1", "Hospital 2", "Hospital 3", "Hospital 4", "Hospital 5"];

  return (
    <UserLayout>
      {/* Added mt-10 for top spacing */}
      <div className="mt-10">

        {/* Greeting */}
        <h1 className="text-3xl font-bold text-indigo-700 mb-8">
          Hello, [User Name]
        </h1>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Column 1: Policy Info */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Health Policy</h3>
              <p className="text-gray-500 text-sm">
                Coverages, Addons, Sum Insured, Inclusion, Exclusion
              </p>
            </div>
            <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                Health Claim Registration Procedure
              </h3>
            </div>
          </div>

          {/* Column 2: Network Hospitals */}
          <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Nearest Network Hospitals to your location
            </h3>
            <ul className="space-y-3">
              {hospitals.map((hospital) => (
                <li
                  key={hospital}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                >
                  <Building2 className="h-5 w-5 text-indigo-500" />
                  <span className="text-gray-700 font-medium">{hospital}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Help & Support */}
          <div className="bg-white shadow-xl shadow-purple-100 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Help & Support</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Bot className="h-5 w-5 text-indigo-600" />
                  <span className="text-gray-700 font-medium">Chat with Gemini (AI Assistant)</span>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type your query..."
                    className="w-full rounded-lg border-gray-300 py-2 px-4 pr-10 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-indigo-600">
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
            <button className="mt-6 w-full bg-indigo-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors">
              Nearest Cashless Hospitals
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </UserLayout>
  );
};
