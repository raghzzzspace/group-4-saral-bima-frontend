import React from 'react';

// Sample data matching the image
const data = [
  { id: 'ESC001-2024', customer: 'Alice Johnson', issue: 'Policy coverage dispute for accidental damage claim on vehicle.', status: 'In Progress', priority: 'High', assigned: 'John Doe', updated: '2024-07-28 14:30' },
  { id: 'ESC002-2024', customer: 'Bob Williams', issue: 'Delay in processing life insurance maturity payout.', status: 'Open', priority: 'High', assigned: 'Jane Smith', updated: '2024-07-27 10:15' },
  { id: 'ESC003-2024', customer: 'Carol White', issue: 'Confusion regarding health insurance deductible limits.', status: 'Resolved', priority: 'Medium', assigned: 'Alice Brown', updated: '2024-07-26 16:00' },
  { id: 'ESC004-2024', customer: 'David Green', issue: 'Unclear terms in home insurance policy for natural disasters.', status: 'On Hold', priority: 'Low', assigned: 'John Doe', updated: '2024-07-25 09:00' },
  { id: 'ESC005-2024', customer: 'Eve Black', issue: 'Discrepancy in premium calculation for auto insurance renewal.', status: 'In Progress', priority: 'High', assigned: 'Jane Smith', updated: '2024-07-24 11:45' },
  { id: 'ESC006-2024', customer: 'Frank Blue', issue: 'Difficulty submitting medical reimbursement claims.', status: 'Open', priority: 'Medium', assigned: 'Alice Brown', updated: '2024-07-24 09:00' },
];

const EscalationTable = () => {

  const getStatusBadge = (status) => {
    let colorClasses = '';
    switch (status) {
      case 'In Progress':
        colorClasses = 'bg-yellow-100 text-yellow-800';
        break;
      case 'Open':
        colorClasses = 'bg-blue-100 text-blue-800';
        break;
      case 'Resolved':
        colorClasses = 'bg-green-100 text-green-800';
        break;
      case 'On Hold':
        colorClasses = 'bg-gray-200 text-gray-700';
        break;
      default:
        colorClasses = 'bg-gray-100 text-gray-600';
    }
    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses}`}>
        {status}
      </span>
    );
  };
  
  const getPriorityBadge = (priority) => {
    let colorClasses = '';
    switch (priority) {
      case 'High':
        colorClasses = 'bg-red-100 text-red-800';
        break;
      case 'Medium':
        colorClasses = 'bg-yellow-100 text-yellow-800';
        break;
      case 'Low':
        colorClasses = 'bg-green-100 text-green-800';
        break;
      default:
        colorClasses = 'bg-gray-100 text-gray-600';
    }
    return (
      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${colorClasses}`}>
        {priority}
      </span>
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Case ID', 'Customer Name', 'Issue', 'Status', 'Priority', 'Assigned To', 'Last Updated', 'Action'].map((header) => (
              <th
                key={header}
                className="px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.id}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.customer}</td>
              <td className="px-6 py-4 max-w-sm text-sm text-gray-700">{row.issue}</td>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {getStatusBadge(row.status)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {getPriorityBadge(row.priority)}
              </td>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{row.assigned}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.updated}</td>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-purple-600 hover:text-purple-800 font-semibold">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EscalationTable;