
import React, { useState } from 'react';
import Layout from './components/Layout';
import Section1_1 from './components/Section1_1';
import Section1_7 from './components/Section1_7';
import Section1_8 from './components/Section1_8';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.INITIATE);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 mb-8 overflow-x-auto no-scrollbar">
          {Object.values(Tab).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-semibold whitespace-nowrap transition-colors duration-200 border-b-2 ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="animate-fadeIn">
          {activeTab === Tab.INITIATE && <Section1_1 />}
          {activeTab === Tab.MONITOR && <Section1_7 />}
          {activeTab === Tab.CHANGE && <Section1_8 />}
        </div>
      </div>
    </Layout>
  );
};

export default App;
