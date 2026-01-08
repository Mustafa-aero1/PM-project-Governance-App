
import React, { useState } from 'react';
import { generatePMContent } from '../services/geminiService';

const Section1_7: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [ev, setEv] = useState(4500);
  const [ac, setAc] = useState(5000);
  const [pv, setPv] = useState(5000);

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `
      Act as a Project Controller using PMBOK 8th Edition.
      Process: 1.7 Monitor and Control Project Performance.
      
      Current Metrics:
      - EV: $${ev}
      - AC: $${ac}
      - PV: $${pv}
      
      Your task:
      1. Calculate CPI (EV/AC) and SPI (EV/PV).
      2. Interpret project health.
      3. Generate a Work Performance Report.
      IMPORTANT: DO NOT USE ANY ASTERISKS (*) IN YOUR RESPONSE.
    `;
    const result = await generatePMContent(prompt);
    setOutput(result);
    setLoading(false);
  };

  const inputClasses = "w-full bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all font-medium";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold uppercase">Inputs</span>
            <h2 className="text-lg font-bold text-slate-800">Performance Metrics</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-full">
              <label className="block text-sm font-semibold text-slate-700 mb-1">Earned Value (EV)</label>
              <input type="number" value={ev} onChange={(e) => setEv(Number(e.target.value))} className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Actual Cost (AC)</label>
              <input type="number" value={ac} onChange={(e) => setAc(Number(e.target.value))} className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Planned Value (PV)</label>
              <input type="number" value={pv} onChange={(e) => setPv(Number(e.target.value))} className={inputClasses} />
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {loading ? <span>Analyzing Health...</span> : <span>Run Health Check (1.7)</span>}
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 min-h-[500px] flex flex-col">
        <div className="flex items-center space-x-2 mb-6 border-b border-slate-100 pb-4">
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold uppercase">Output</span>
          <h2 className="text-lg font-bold text-slate-800">Performance Report</h2>
        </div>
        <div className="text-slate-800 text-sm whitespace-pre-wrap leading-relaxed">
          {output || <p className="text-slate-300 italic text-center mt-20">Click to analyze project health.</p>}
        </div>
      </div>
    </div>
  );
};

export default Section1_7;
