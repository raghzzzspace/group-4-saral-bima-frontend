import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const sampleAnalysisData = [
  { group: 'Low Risk', premium: 15000, claims: 50 },
  { group: 'Medium Risk', premium: 22000, claims: 120 },
  { group: 'High Risk', premium: 35000, claims: 250 },
];

// Dummy data for product recommendations
const recommendations = [
    { product: 'Comprehensive Plus', riskProfile: 'High Risk', features: ['Roadside Assistance', 'Zero Depreciation'], premiumAdjustment: '+10% Premium' },
    { product: 'Standard Protect', riskProfile: 'Medium Risk', features: ['Standard Coverage', 'Theft Protection'], premiumAdjustment: 'Base Premium' },
    { product: 'Economy Starter', riskProfile: 'Low Risk', features: ['Basic Liability'], premiumAdjustment: '-5% Premium' },
];

const PolicyAnalysisPanel = () => {
  return (
    <div className="h-full flex flex-col">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        Analysis Results & Strategy
      </h3>
      <p className="text-sm text-gray-500 mb-6">
        Visual representation of risk factors and recommended pricing/product strategy.
      </p>

      {/* Grid for Chart and Recommendations */}
      <div className="grid grid-cols-3 gap-6 flex-grow">
        
        {/* Risk & Premium Chart (2/3 width) */}
        <div className="col-span-2 h-96 border border-gray-200 rounded-lg p-4">
            <h4 className="text-lg font-medium text-gray-700 mb-2">Risk Group vs. Premium</h4>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart data={sampleAnalysisData} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="group" />
                    <YAxis yAxisId="left" orientation="left" stroke="#6A5ACD" label={{ value: 'Premium (INR)', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" stroke="#DC2626" label={{ value: 'Claims Count', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend wrapperStyle={{ position: 'relative', bottom: 0 }} />
                    
                    <Line yAxisId="left" type="monotone" dataKey="premium" stroke="#6A5ACD" name="Recommended Premium" strokeWidth={2} />
                    <Line yAxisId="right" type="monotone" dataKey="claims" stroke="#DC2626" name="Historical Claims Count" strokeWidth={2} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        
        {/* Product Recommendations Panel (1/3 width) */}
        <div className="col-span-1 border border-purple-200 rounded-lg p-4 bg-purple-50 flex flex-col">
            <h4 className="text-lg font-bold text-purple-800 mb-4">Product Recommendations</h4>
            <div className="space-y-4 overflow-y-auto">
                {recommendations.map((rec, index) => (
                    <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                        <p className="text-base font-semibold text-gray-900">{rec.product}</p>
                        <p className="text-xs text-red-600 font-medium my-1">{rec.riskProfile} Client</p>
                        <p className="text-xs text-gray-600">
                            **Features:** {rec.features.join(', ')}
                        </p>
                        <p className="text-sm font-bold text-green-700 mt-2">{rec.premiumAdjustment}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyAnalysisPanel;