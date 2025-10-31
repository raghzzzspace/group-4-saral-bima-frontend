import React from 'react';

// Sample data matching the image
const data = [
  { vehicleNumber: 'MH04AB1234', make: 'Toyota', model: 'Corolla', fuelType: 'Petrol', rtoLocation: 'Mumbai', age: 5, policyType: 'Comprehensive', competitor: 'Bajaj Allianz', extractionDate: '2024-03-15' },
  { vehicleNumber: 'DL01CD5678', make: 'Honda', model: 'Civic', fuelType: 'Petrol', rtoLocation: 'Delhi', age: 3, policyType: 'Third Party', competitor: 'HDFC ERGO', extractionDate: '2024-03-14' },
  { vehicleNumber: 'KA05EF9012', make: 'Hyundai', model: 'Creta', fuelType: 'Diesel', rtoLocation: 'Bengaluru', age: 2, policyType: 'Comprehensive', competitor: 'ICICI Lombard', extractionDate: '2024-03-13' },
  { vehicleNumber: 'TN10GH3456', make: 'Maruti Suzuki', model: 'Swift', fuelType: 'Petrol', rtoLocation: 'Chennai', age: 4, policyType: 'Third Party', competitor: 'SBI General', extractionDate: '2024-03-12' },
  { vehicleNumber: 'RJ27IJ7890', make: 'Tata', model: 'Nexon', fuelType: 'Electric', rtoLocation: 'Jaipur', age: 1, policyType: 'Comprehensive', competitor: 'Reliance General', extractionDate: '2024-03-11' },
];

const VehicleDataTable = () => {

  const getPolicyBadge = (policy) => {
    const isComprehensive = policy.includes('Comprehensive');
    return (
      // Badge text size remains smaller (text-xs) for a compact look
      <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
        isComprehensive 
          ? 'bg-blue-50 text-blue-700 border border-blue-200'
          : 'bg-purple-50 text-purple-700 border border-purple-200'
      }`}>
        {policy}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto border border-gray-200 rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-purple-50">
          <tr>
            {['Vehicle Number', 'Make', 'Model', 'Fuel Type', 'RTO Location', 'Age', 'Policy Type', 'Competitor', 'Extraction Date', 'Actions'].map((header) => (
              <th
                key={header}
                // 💡 Increased Header Font Size from text-xs to text-sm
                className={`px-6 py-3 text-left text-sm font-semibold text-purple-800 uppercase tracking-wider ${header === 'Actions' ? 'text-center' : ''}`} 
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-purple-50 transition-colors`}>
              
              {/* 💡 Increased Body Font Size from text-sm to text-base (or text-md if needed) */}
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">{row.vehicleNumber}</td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.make}</td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.model}</td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.fuelType}</td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.rtoLocation}</td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.age}</td>
              
              {/* Policy badge retains text-sm/text-xs for compact look */}
              <td className="px-6 py-4 whitespace-nowrap text-base">
                {getPolicyBadge(row.policyType)}
              </td>
              
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.competitor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-base text-gray-700">{row.extractionDate}</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-base font-medium text-center">
                <button className="text-gray-500 hover:text-purple-700 p-1 rounded-full hover:bg-purple-100 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VehicleDataTable;