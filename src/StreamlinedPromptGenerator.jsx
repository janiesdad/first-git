import React, { useState } from 'react';
import { Copy, FileText } from 'lucide-react';

// Random quote selection
const quotes = [
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Be curious. Be humble. Be courageous.",
    author: "Lex Fridman",
  },
  {
    text: "If you don't like something, change it. If you can't change it, change your attitude.",
    author: "Maya Angelou",
  },
];
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

const StreamlinedPromptGenerator = () => {
  const [companyName, setCompanyName] = useState('');
  const [execSummaryLength, setExecSummaryLength] = useState(6);
  const [copied, setCopied] = useState(false);

  const generatePrompt = () => {
    return `# Executive Business Intelligence Briefing

## Instructions
You are a senior business intelligence strategist preparing a comprehensive high-impact briefing for a CEO who needs to understand the full landscape of a specific company: **${companyName || '{Target Company Name}'}**.

Your job is to provide actionable insights, not just surface-level summaries. The CEO wants to understand what makes this company valuable, vulnerable, and viable for collaboration, competition, investment, or disruption.`;
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatePrompt());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-6">
      {/* Executive Quote */}
      <div className="max-w-3xl mx-auto pt-8 pb-4 px-4 text-center">
        <p className="text-gray-700 italic text-lg">
          “{randomQuote.text}”
          <span className="ml-2 font-semibold not-italic text-base text-gray-600">—{randomQuote.author}</span>
        </p>
      </div>

      {/* Header */}
      <header className="max-w-3xl mx-auto mb-8 px-4 text-center">
        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-2">
          Business Intelligence Prompt Generator
        </h1>
        <p className="text-lg text-gray-600 font-light">
          Generate launch-ready executive briefings for strategic decision-making
        </p>
      </header>

      <div className="max-w-3xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Prompt Display */}
        <section className="md:col-span-3 mb-8 md:mb-0">
          <div className="bg-white border border-gray-200 rounded-xl shadow p-8 relative">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Executive Prompt Output
              </h2>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 text-sm font-medium border rounded-xl flex items-center gap-2 focus:outline-none transition-all ${
                  copied
                    ? 'bg-green-50 border-green-200 text-green-700 scale-105'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                aria-label="Copy generated prompt"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'COPIED!' : 'COPY PROMPT'}
              </button>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 min-h-96 overflow-y-auto font-mono text-sm text-gray-800">
              <pre className="whitespace-pre-wrap leading-relaxed">{generatePrompt()}</pre>
            </div>
          </div>
        </section>

        {/* Controls Panel */}
        <aside className="md:col-span-1">
          <div className="bg-white border border-gray-200 rounded-xl shadow p-6">
            <h3 className="text-xs font-semibold text-gray-900 mb-6 uppercase tracking-wide">
              Controls
            </h3>
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Company Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter company name"
                className="w-full px-3 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:border-blue-400 font-mono"
                aria-label="Company name for analysis"
              />
              <p className="text-xs text-gray-500 mt-1">Target company for analysis</p>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Summary Length
              </label>
              <input
                type="range"
                min="3"
                max="12"
                value={execSummaryLength}
                onChange={(e) => setExecSummaryLength(Number(e.target.value))}
                className="w-full h-1 bg-gray-300 rounded-xl appearance-none cursor-pointer"
                aria-label="Executive summary length"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                <span>3</span>
                <span>12</span>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Number of sentences in executive summary
              </p>
            </div>
          </div>
        </aside>
      </div>

      <footer className="mt-12 text-xs text-gray-400 text-center">
        Crafted for ambitious executives by{' '}
        <span className="font-semibold text-gray-500">The Janie Group</span>
      </footer>

      {/* Styling for range thumb */}
      <style jsx>{`
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid #1e40af;
        }
        input[type='range']::-moz-range-thumb {
          height: 16px;
          width: 16px;
          border-radius: 50%;
          background: #2563eb;
          cursor: pointer;
          border: 2px solid #1e40af;
        }
      `}</style>
    </div>
  );
};

export default StreamlinedPromptGenerator;
