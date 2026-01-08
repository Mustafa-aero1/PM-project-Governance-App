
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight uppercase">Smart Governance Hub</h1>
              <p className="text-xs text-indigo-300 font-medium">PMBOK 8TH EDITION PMO SYSTEM</p>
            </div>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-sm bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
              Governance Domain: 1.1 | 1.7 | 1.8
            </span>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-slate-100 border-t border-slate-200 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 italic">
            "Automating Project Controls for Modern Delivery" — Powered by Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
