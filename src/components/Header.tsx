import React from 'react';
import { Download, FileText, Printer, Sparkles, BookOpen, Presentation, CheckCircle, Layout } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  savedCount: number;
  onExportWord: () => void;
  onPrint: () => void;
  hasServerAi: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  savedCount,
  onExportWord,
  onPrint,
  hasServerAi,
}) => {
  return (
    <header className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-900 text-white shadow-md no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-amber-400 text-blue-950 flex items-center justify-center font-bold text-2xl shadow-md border-2 border-amber-300 flex-shrink-0">
            📐
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-amber-400 text-slate-950">
                MoEYS • STEPCam • MCAS
              </span>
              <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-800 text-blue-100 border border-blue-600">
                កញ្ចប់គណិតវិទ្យាថ្នាក់ដំបូង និងបឋមសិក្សា (ថ្នាក់ទី១-៦)
              </span>
              {hasServerAi ? (
                <span className="px-2 py-0.5 text-[11px] rounded-full bg-emerald-900/80 text-emerald-300 border border-emerald-500/50 flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3 h-3 text-emerald-400 animate-pulse" />
                  Gemini AI Server ភ្ជាប់រួចរាល់
                </span>
              ) : (
                <span className="px-2 py-0.5 text-[11px] rounded-full bg-amber-900/60 text-amber-200 border border-amber-500/40 text-[11px]">
                  ប្រព័ន្ធស្វ័យប្រវត្តិ Offline Smart Engine
                </span>
              )}
            </div>
            <h1 className="text-lg sm:text-xl font-bold mt-1 tracking-wide khmer-moul">
              កម្មវិធី AI Agent បង្កើតកិច្ចតែងការបង្រៀនកញ្ចប់គណិតវិទ្យា
            </h1>
            <p className="text-xs sm:text-sm text-blue-200">
              សាលាបឋមសិក្សាថ្លុកបង្កោ ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់ • បង្រៀនដោយ៖ លោកគ្រូ វិចិត្រ សន
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onPrint}
            className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-medium border border-white/20 transition flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="បោះពុម្ព ឬរក្សាទុកជា PDF"
          >
            <Printer className="w-4 h-4 text-blue-200" />
            <span>បោះពុម្ព / PDF</span>
          </button>
          <button
            type="button"
            onClick={onExportWord}
            className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold shadow transition flex items-center gap-1.5 cursor-pointer"
            title="ទាញយកឯកសារ Word (.doc)"
          >
            <Download className="w-4 h-4 text-slate-950" />
            <span>ទាញយក Word (.doc)</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-blue-950/60 border-t border-blue-800/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex overflow-x-auto no-scrollbar gap-1 py-1.5">
          <button
            type="button"
            onClick={() => setActiveTab('studio')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'studio'
                ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                : 'text-blue-100 hover:bg-blue-800/60'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>១. បង្កើតកិច្ចតែងការ (AI Agent Studio)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('document')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'document'
                ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                : 'text-blue-100 hover:bg-blue-800/60'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>២. កិច្ចតែងការផ្លូវការ (តារាង ៣ ជួរឈរ)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('slides')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'slides'
                ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                : 'text-blue-100 hover:bg-blue-800/60'
            }`}
          >
            <Presentation className="w-4 h-4" />
            <span>៣. ស្លាយបង្រៀន ១២ ស្លាយ & សម្ភាររូបី</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('library')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'library'
                ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                : 'text-blue-100 hover:bg-blue-800/60'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>៤. បណ្ណាល័យសៀវភៅស្ដង់ដារ (ថ្នាក់ទី១-៦)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('saved')}
            className={`px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'saved'
                ? 'bg-amber-400 text-slate-950 shadow-sm font-bold'
                : 'text-blue-100 hover:bg-blue-800/60'
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            <span>
              ៥. ផ្ទៀងផ្ទាត់ស្ដង់ដារ & កិច្ចតែងការរក្សាទុក ({savedCount})
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
