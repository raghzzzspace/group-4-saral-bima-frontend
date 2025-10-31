import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Data
const genderData = [
  { name: 'Male', value: 68, color: '#6A5ACD' },
  { name: 'Female', value: 32, color: '#BA55D3' },
];

const ageData = [
  { name: '18-30', value: 25 },
  { name: '31-50', value: 50 },
  { name: '51+', value: 25 },
];

const ageColors = ['#9370DB', '#6A5ACD', '#BA55D3'];

const CustomerDemographics = () => {
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <h3 className="text-lg font-semibold text-gray-700">Customer Demographics</h3>
      <p className="text-sm text-gray-500 mb-4">
        Gender distribution & age group trends across customer base.
      </p>

      {/* Gender Chart */}
      <div className="flex items-center justify-between mb-4 flex-grow">
        <div className="w-1/2 h-36">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                innerRadius="45%"
                outerRadius="65%"
                paddingAngle={5}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {genderData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="w-1/2 pl-4 space-y-2">
          {genderData.map((item) => (
            <div key={item.name} className="flex items-center">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600">
                {item.name} — <strong>{item.value}%</strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Age Group Bars */}
      <div className="flex justify-around items-end flex-grow pb-2 mt-2 border-t border-gray-100">
        {ageData.map((group, index) => (
          <div
            key={group.name}
            className="flex flex-col items-center w-1/4"
          >
            <div
              className="w-full rounded-t-lg transition-all duration-500 flex justify-center items-end"
              style={{
                height: `${(group.value / 100) * 100}px`, // Scaled nicely
                backgroundColor: ageColors[index],
              }}
            ></div>
            <p className="mt-2 text-sm text-gray-600">{group.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDemographics;
