import { useState, useEffect } from 'react'
import './App.css'

import Terminal from './components/Terminal';
import ResumeViewer from './components/ResumeViewer';
// import ReactMarkdown from 'react-markdown';

function App() {
  const [view, setView] = useState('terminal'); // default view
  useEffect(() => {
    if (view === 'terminal') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [view]);

  return (
    <div 
      className={`w-full bg-neutral-900 text-white ${
        view === 'terminal' ? 'h-screen overflow-hidden' : 'min-h-screen'
      }`}
    >
      {/* Navbar */}
      <nav className="absolute top-4 left-4 flex items-center space-x-6 z-50">
        <span className="font-bold text-lg text-white">jaredtaylor.dev</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={view === 'terminal'}
            onChange={(e) => setView(e.target.checked ? 'terminal' : 'resume')}
          />
          <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
          <div className="absolute left-[2px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
        </label>
      </nav>

      {/* View Toggle */}
      <main>
        {view === 'terminal' ? <Terminal /> : <ResumeViewer />}
      </main>
    </div>
  );
}

export default App;