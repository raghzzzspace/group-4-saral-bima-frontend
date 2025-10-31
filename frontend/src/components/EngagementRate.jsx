import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const engagementData = [
    { name: '1750', users: 1750 },
    { name: '1900', users: 1900 },
    { name: '1600', users: 1600 },
    { name: '2100', users: 2100 },
    { name: '1850', users: 1850 },
];

const EngagementRate = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700">Engagement Rate</h3>
      <p className="text-sm text-gray-500 mb-4">Active users and average session duration trends weekly.</p>
      
      <div className="flex-grow">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={engagementData} margin={{ top: 20, right: 10, left: 10, bottom: 5 }}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} className="text-xs" />
            <Tooltip />
            <Bar 
              dataKey="users" 
              fill="#9370DB" 
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

export default EngagementRate;