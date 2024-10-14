import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DollarSign, Sun, Battery, Calendar } from 'lucide-react';

const SolarCalculator: React.FC = () => {
  const [systemSize, setSystemSize] = useState(5);
  const [systemEfficiency, setSystemEfficiency] = useState(80);
  const [generationHours, setGenerationHours] = useState(5);
  const [systemCost, setSystemCost] = useState(15000);
  const [electricityRate, setElectricityRate] = useState(0.12);
  const [monthlyBill, setMonthlyBill] = useState(150);
  const [years, setYears] = useState(25);
  const [calculationResults, setCalculationResults] = useState<any[]>([]);
  const [totalSavings, setTotalSavings] = useState(0);
  const [roiYear, setRoiYear] = useState(0);

  useEffect(() => {
    calculateSavings();
  }, [systemSize, systemEfficiency, generationHours, systemCost, electricityRate, monthlyBill, years]);

  const calculateSavings = () => {
    const dailyGeneration = systemSize * (systemEfficiency / 100) * generationHours;
    const annualGeneration = dailyGeneration * 365;
    const annualSavings = annualGeneration * electricityRate;
    const annualBillWithoutSolar = monthlyBill * 12;

    let results = [];
    let cumulativeSavings = 0;
    let cumulativeCostWithoutSolar = 0;
    let roiYearFound = false;

    for (let year = 0; year <= years; year++) {
      const costWithSolar = year === 0 ? systemCost : systemCost + (annualBillWithoutSolar - annualSavings) * year;
      cumulativeCostWithoutSolar = annualBillWithoutSolar * year;
      cumulativeSavings = year === 0 ? 0 : annualSavings * year - systemCost;

      if (!roiYearFound && cumulativeSavings > 0) {
        setRoiYear(year);
        roiYearFound = true;
      }

      results.push({
        year,
        annualGeneration: Math.round(annualGeneration),
        annualSavings: Math.round(annualSavings),
        cumulativeSavings: Math.round(cumulativeSavings),
        costWithSolar: Math.round(costWithSolar),
        costWithoutSolar: Math.round(cumulativeCostWithoutSolar),
      });
    }

    setCalculationResults(results);
    setTotalSavings(Math.round(cumulativeSavings));
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Solar Savings Calculator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Size (kW)
              </label>
              <input
                type="number"
                value={systemSize}
                onChange={(e) => setSystemSize(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Efficiency (%)
              </label>
              <input
                type="number"
                value={systemEfficiency}
                onChange={(e) => setSystemEfficiency(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Generation Hours per Day
              </label>
              <input
                type="number"
                value={generationHours}
                onChange={(e) => setGenerationHours(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                System Cost ($)
              </label>
              <input
                type="number"
                value={systemCost}
                onChange={(e) => setSystemCost(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Electricity Rate ($/kWh)
              </label>
              <input
                type="number"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Number(e.target.value))}
                className="w-full p-2 border rounded"
                step="0.01"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Average Monthly Electricity Bill ($)
              </label>
              <input
                type="number"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years to Calculate
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Savings Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <DollarSign className="w-12 h-12 text-green-500 mr-4" />
              <div>
                <p className="text-xl font-semibold">${totalSavings.toLocaleString()}</p>
                <p className="text-gray-600">Total Savings over {years} years</p>
              </div>
            </div>
            <div className="flex items-center">
              <Calendar className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <p className="text-xl font-semibold">{roiYear} years</p>
                <p className="text-gray-600">Return on Investment (ROI)</p>
              </div>
            </div>
            <div className="flex items-center">
              <Battery className="w-12 h-12 text-yellow-500 mr-4" />
              <div>
                <p className="text-xl font-semibold">{calculationResults[1]?.annualGeneration.toLocaleString()} kWh</p>
                <p className="text-gray-600">Annual Energy Production</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">ROI Graph</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={calculationResults} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="year" 
                label={{ value: 'Years', position: 'insideBottomRight', offset: -10 }}
              />
              <YAxis 
                label={{ value: 'Cumulative Cost ($)', angle: -90, position: 'insideLeft' }}
                tickFormatter={(value) => `$${value.toLocaleString()}`}
              />
              <Tooltip 
                formatter={(value: number) => [`$${value.toLocaleString()}`, undefined]}
                labelFormatter={(label) => `Year ${label}`}
              />
              <Legend verticalAlign="top" height={36} />
              <Line 
                type="monotone" 
                dataKey="costWithSolar" 
                name="Cost with Solar" 
                stroke="#8884d8" 
                strokeWidth={2}
                dot={false}
              />
              <Line 
                type="monotone" 
                dataKey="costWithoutSolar" 
                name="Cost without Solar" 
                stroke="#82ca9d" 
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4">Savings Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Year</th>
                  <th className="p-2">Annual Generation (kWh)</th>
                  <th className="p-2">Annual Savings ($)</th>
                  <th className="p-2">Cumulative Savings ($)</th>
                  <th className="p-2">Cost with Solar ($)</th>
                  <th className="p-2">Cost without Solar ($)</th>
                </tr>
              </thead>
              <tbody>
                {calculationResults.map((result) => (
                  <tr key={result.year} className="border-b">
                    <td className="p-2">{result.year}</td>
                    <td className="p-2">{result.annualGeneration.toLocaleString()}</td>
                    <td className="p-2">{result.annualSavings.toLocaleString()}</td>
                    <td className="p-2">{result.cumulativeSavings.toLocaleString()}</td>
                    <td className="p-2">{result.costWithSolar.toLocaleString()}</td>
                    <td className="p-2">{result.costWithoutSolar.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolarCalculator;