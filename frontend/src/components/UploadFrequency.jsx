import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Sample data for the line chart (Daily policy uploads over the last month)
const uploadData = [
  { day: '1', uploads: 50 },
  { day: '5', uploads: 75 },
  { day: '10', uploads: 60 },
  { day: '15', uploads: 90 },
  { day: '20', uploads: 110 },
  { day: '25', uploads: 80 },
  { day: '30', uploads: 120 },
];

const UploadFrequency = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-semibold text-gray-700">Upload Frequency</h3>
      <p className="text-sm text-gray-500 mb-4">Daily policy document uploads over the last month.</p>
      
      {/* 💡 FIX: Set a defined height for the chart wrapper (e.g., h-64 or h-[250px]) */}
      <div className="flex-grow h-64"> 
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={uploadData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            
            {/* Hiding YAxis for a clean, minimalist look like the other charts */}
            <XAxis dataKey="day" axisLine={false} tickLine={false} />
            <YAxis hide={true} domain={[0, 150]} /> 
            
            <Tooltip 
                contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                    border: '1px solid #ccc', 
                    borderRadius: '4px' 
                }}
                labelFormatter={(value) => `Day: ${value}`}
            />
            
            <Line 
                type="monotone" 
                dataKey="uploads" 
                stroke="#6A5ACD" // Deep purple color
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UploadFrequency;