
import React, { useState } from 'react';
import { generatePMContent } from '../services/geminiService';

const Section1_1: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState('');
  const [projectName, setProjectName] = useState('New AI Student Portal');
  const [businessCase, setBusinessCase] = useState('The university needs a portal for students to track attendance and grades automatically to save admin time.');
  const [stakeholders, setStakeholders] = useState('Dean, Students, IT Dept, Professors');

  const handleGenerate = async () => {
    setLoading(true);
    const prompt = `
      Act as a PMP certified Project Manager using PMBOK 8th Edition.
      Process: 1.1 Initiate Project or Phase.
      
      Based on these inputs:
      - Project Name: ${projectName}
      - Business Case: ${businessCase}
      - Stakeholders: ${stakeholders}
      
      Your task:
      Generate a professional, structured Project Charter and an Assumption Log.
      Follow standard PMBOK 8th Edition outputs for 1.1.
      Use clear headers and plain text lists. 
      IMPORTANT: DO NOT USE ANY ASTERISKS (*) IN YOUR RESPONSE.
    `;
    const result = await generatePMContent(prompt);
    setOutput(result);
    setLoading(false);
  };

  // Explicit white background and dark text for visibility
  const inputClasses = "w-full bg-white text-slate-900 border border-slate-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder-slate-400 font-medium";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-xs font-bold uppercase">Inputs</span>
            <h2 className="text-lg font-bold text-slate-800">Project Initiation</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Project Name</label>
              <input 
                type="text" 
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Business Case / Benefits</label>
              <textarea 
                rows={4}
                value={businessCase}
                onChange={(e) => setBusinessCase(e.target.value)}
                className={inputClasses}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Key Stakeholders</label>
              <input 
                type="text" 
                value={stakeholders}
                onChange={(e) => setStakeholders(e.target.value)}
                className={inputClasses}
              />
            </div>
          </div>

          <button 
            onClick={handleGenerate}
            disabled={loading}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Drafting Charter...</span>
              </>
            ) : (
              <span>Generate Charter (1.1)</span>
            )}
          </button>
        </div>

        <div className="bg-slate-100 p-5 rounded-xl border border-slate-200">
          <h3 className="text-slate-800 font-bold mb-1 text-sm">PMBOK Info</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Authorized project managers use these documents to establish boundaries and formalize agreements between the performing organization and the requesting organization.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200 min-h-[500px] flex flex-col">
        <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
          <div className="flex items-center space-x-2">
            <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded text-xs font-bold uppercase">Output</span>
            <h2 className="text-lg font-bold text-slate-800">Charter & Logs</h2>
          </div>
        </div>
        
        {output ? (
          <div className="text-slate-800 text-sm whitespace-pre-wrap font-sans leading-relaxed">
            {output}
          </div>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center text-slate-300">
            <p className="italic text-sm">Awaiting generation...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section1_1;
