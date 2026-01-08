
import React, { useState } from 'react';
import { generatePMContent } from '../services/geminiService';

const Section1_8: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [description, setDescription] = useState('Client wants to add Dark Mode to the app.');
  const [impact, setImpact] = useState('Will add 1 week to schedule and cost $1000 extra.');

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `
      Act as the Change Control Board (CCB).
      Process: 1.8 Assess and Implement Changes.
      
      Details:
      - Change: ${description}
      - Impact: ${impact}
      
      Your task:
      1. Perform Cost-Benefit Analysis.
      2. Provide a decision: APPROVED or REJECTED.
      3. Generate a formal Decision Note.
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
            <h2 className="text-lg font-bold text-slate-800">Change Request</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Description</label>
              <textarea rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Impact Analysis</label>
              <textarea rows={3} value={impact} onChange={(e) => setImpact(e.target.value)} className={inputClasses} />
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            {loading ? <span>Reviewing...</span> : <span>Assess Change (1.8)</span>}
          </button>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 min-h-[500px] flex flex-col">
        <div className="flex items-center space-x-2 mb-6 border-b border-slate-100 pb-4">
          <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold uppercase">Output</span>
          <h2 className="text-lg font-bold text-slate-800">CCB Decision Log</h2>
        </div>
        <div className="text-slate-800 text-sm whitespace-pre-wrap leading-relaxed">
          {output || <p className="text-slate-300 italic text-center mt-20">Click to process change request.</p>}
        </div>
      </div>
    </div>
  );
};

export default Section1_8;
