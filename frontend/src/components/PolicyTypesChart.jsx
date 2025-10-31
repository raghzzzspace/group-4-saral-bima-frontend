import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';

const policyData = [
  { name: 'Auto', count: 3200 },
  { name: 'Home', count: 2500 },
  { name: 'Life', count: 1800 },
  { name: 'Health', count: 2000 },
];

const PolicyTypesChart = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700">Policy Types</h3>
      <p className="text-sm text-gray-500 mb-4">Distribution of active insurance policies by type.</p>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={policyData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-sm" />
            <YAxis hide={true} domain={[0, 3500]} />
            <Tooltip />
            <Bar 
              dataKey="count" 
              fill="#6A5ACD" 
              className="fill-purple-700"
              radius={[5, 5, 0, 0]}
              // Custom label to show the count above the bar
              label={({ x, y, width, value }) => (
                <text x={x + width / 2} y={y} fill="#000" textAnchor="middle" dy={-10} className="font-bold text-xs">
                  {value}
                </text>
              )}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PolicyTypesChart;