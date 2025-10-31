import React from 'react';

const StatsCard = ({ label, value, color }) => {
  return (
    <div className="bg-white p-5 rounded-xl shadow-md text-center">
      <h3 className={`text-3xl font-bold ${color} mb-1`}>{value}</h3>
      <p className="text-sm font-medium text-gray-500">{label}</p>
    </div>
  );
};

export default StatsCard;