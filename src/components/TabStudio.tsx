import React, { useState, useEffect } from 'react';
import { LessonPlan } from '../types';
import {
  GRADE_BOOKS_META,
  OFFICIAL_TOC_DB,
  LESSON_PRESETS,
  SAMPLE_PASTES,
  intToKhmer,
  parseSmartScheduleInput,
} from '../data/curriculumData';
import {
  Sparkles,
  BookOpen,
  ArrowRight,
  RotateCcw,
  Save,
  FileText,
  Copy,
  ExternalLink,
  AlertTriangle,
  CheckCircle2,
  Sliders,
} from 'lucide-react';

interface TabStudioProps {
  plan: LessonPlan;
  setPlan: React.Dispatch<React.SetStateAction<LessonPlan>>;
  onRunAi: (promptText: string) => Promise<void>;
  isLoadingAi: boolean;
  onSavePlan: () => void;
  onGoToDocument: () => void;
  onGoToSlides: () => void;
  onCopyText: () => void;
}

export const TabStudio: React.FC<TabStudioProps> = ({
  plan,
  setPlan,
  onRunAi,
  isLoadingAi,
  onSavePlan,
  onGoToDocument,
  onGoToSlides,
  onCopyText,
}) => {
  const [promptText, setPromptText] = useState(
    '១ម៉\nសស. មេ. ៥៖ ប្រវែង ការប្តូរខ្នាតប្រវែង (ទំ.៣៦)\nសគ. ជំ.៥ មេ.១៖ សកម្ម. ទី៨ (ទំ.២៥៧-២៥៨)'
  );
  const [gradeFilter, setGradeFilter] = useState('ALL');
  const [quickGrade, setQuickGrade] = useState('៣');
  const [quickLessonIdx, setQuickLessonIdx] = useState(4); // Lesson 5 Length in G3
  const [quickSubtopic, setQuickSubtopic] = useState('ការប្តូរខ្នាតប្រវែង');

  // Filter TOC for quick picker
  const filteredToc = OFFICIAL_TOC_DB.filter((item) => item.grade === quickGrade);

  const parsedInfo = parseSmartScheduleInput(promptText);
  const booksMeta = GRADE_BOOKS_META[plan.grade] || GRADE_BOOKS_META['៣'];

  // Handle TOC apply
  const handleApplyToc = () => {
    const selected = filteredToc[quickLessonIdx] || filteredToc[0];
    if (!selected) return;
    const numKh = intToKhmer(selected.lesson);
    const subTxt = quickSubtopic.trim() || selected.title;
    const ssP = intToKhmer(selected.pStart);
    const snippet = `ថ្នាក់ទី${quickGrade} • ១ម៉\nសស. មេ. ${numKh}៖ ${selected.title} ${subTxt} (ទំ.${ssP})\nសគ. ជំ.${numKh} មេ.១៖ សកម្ម. ទី១ (ទំ.${intToKhmer(selected.pStart * 2 + 10)})`;
    setPromptText(snippet);
    onRunAi(snippet);
  };

  const handleFieldChange = (field: keyof LessonPlan, value: any) => {
    setPlan((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // Reset to default
  const handleResetDefault = () => {
    setPlan(JSON.parse(JSON.stringify(LESSON_PRESETS[0])));
  };

  return (
    <div className="space-y-6">
      {/* Top Banner: Smart Paste Box */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>ប្រអប់បិទភ្ជាប់ឆ្លាតវៃ (Smart Schedule Paste) — បង្កើតកិច្ចតែងការភ្លាមៗ</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              គ្រាន់តែ Copy & Paste អត្ថបទពីតារាងបំណែងចែកកម្មវិធីសិក្សា (ឧ. <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-900 font-semibold">១ម៉ / សស. មេ. ៥៖ ... / សគ. ជំ.៥ មេ.១៖ សកម្ម. ទី៨ ...</code>) ប្រព័ន្ធនឹងកំណត់កម្រិតថ្នាក់ សៀវភៅសិស្ស សៀវភៅគ្រូ និងសៀវភៅស្ដង់ដារ MCAS ដោយស្វ័យប្រវត្តិ!
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-500">មេរៀនគំរូតាមថ្នាក់៖</span>
            {['ALL', '១', '២', '៣', '៤', '៥', '៦'].map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGradeFilter(g)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                  gradeFilter === g
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {g === 'ALL' ? 'ទាំងអស់' : `ថ្នាក់ទី${g}`}
              </button>
            ))}
          </div>
        </div>

        {/* Smart Paste Container */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50/70 to-amber-50/40 rounded-2xl p-4 sm:p-5 border-2 border-blue-300 shadow-inner space-y-3">
          {/* 104-Lesson Dropdown Picker */}
          <div className="bg-white rounded-xl p-3.5 border border-indigo-200 shadow-sm space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                <span>🗂️ ជ្រើសរើសមេរៀនពីមាតិកាផ្លូវការទាំង ១០៤ មេរៀន (ថ្នាក់ទី១ ដល់ ថ្នាក់ទី៦)៖</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[11px] font-bold">
                គាំទ្រគ្រប់មេរៀន • គ្រប់កម្រិតថ្នាក់
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5 items-end">
              <div className="sm:col-span-3">
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  ១. ជ្រើសរើសកម្រិតថ្នាក់
                </label>
                <select
                  value={quickGrade}
                  onChange={(e) => {
                    setQuickGrade(e.target.value);
                    setQuickLessonIdx(0);
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-bold bg-slate-50 text-blue-950"
                >
                  <option value="១">ថ្នាក់ទី១ (១៩ មេរៀន - កញ្ចប់គណិត)</option>
                  <option value="២">ថ្នាក់ទី២ (១៧ មេរៀន - កញ្ចប់គណិត)</option>
                  <option value="៣">ថ្នាក់ទី៣ (១៣ មេរៀន - កញ្ចប់គណិត)</option>
                  <option value="៤">ថ្នាក់ទី៤ (១៧ មេរៀន - គណិតបឋម)</option>
                  <option value="៥">ថ្នាក់ទី៥ (១៨ មេរៀន - គណិតបឋម)</option>
                  <option value="៦">ថ្នាក់ទី៦ (២០ មេរៀន - គណិតបឋម)</option>
                </select>
              </div>

              <div className="sm:col-span-5">
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  ២. ជ្រើសរើសមេរៀនធំក្នុងសៀវភៅសិស្ស (សស.)
                </label>
                <select
                  value={quickLessonIdx}
                  onChange={(e) => setQuickLessonIdx(parseInt(e.target.value, 10))}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm font-semibold bg-white text-slate-900"
                >
                  {filteredToc.map((t, idx) => (
                    <option key={t.lesson} value={idx}>
                      មេរៀនទី{intToKhmer(t.lesson)}៖ {t.title} (ទំ. {intToKhmer(t.pStart)}
                      {t.pEnd > t.pStart ? `-${intToKhmer(t.pEnd)}` : ''})
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-4">
                <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                  ៣. ខ្លឹមសាររង / សកម្មភាពទី... (ស្រេចចិត្ត)
                </label>
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={quickSubtopic}
                    onChange={(e) => setQuickSubtopic(e.target.value)}
                    placeholder="ឧ. ការប្តូរខ្នាតប្រវែង (សកម្ម.ទី៨)"
                    className="flex-1 px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm bg-white"
                  />
                  <button
                    type="button"
                    onClick={handleApplyToc}
                    className="px-3 py-2 rounded-lg bg-indigo-900 hover:bg-indigo-800 text-white text-xs font-bold whitespace-nowrap shadow-sm cursor-pointer"
                  >
                    បញ្ចូល ↓
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Paste Prompts */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
            <label className="block text-xs sm:text-sm font-bold text-blue-950">
              📋 បិទភ្ជាប់ (Paste) ខ្លឹមសារពីកាលវិភាគ ឬវាយបញ្ចូលទម្រង់កាត់ (សស. / សគ.) នៅទីនេះ៖
            </label>
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-semibold text-slate-600">សាកល្បងគំរូ៖</span>
              <button
                type="button"
                onClick={() => {
                  setPromptText(SAMPLE_PASTES['g3-len']);
                  onRunAi(SAMPLE_PASTES['g3-len']);
                }}
                className="px-2.5 py-1 rounded-lg bg-blue-900 text-white text-[11px] font-bold hover:bg-blue-800 transition cursor-pointer"
              >
                📌 ថ្នាក់ទី៣៖ មេ.៥ ប្រវែង (ទំ.៣៦)
              </button>
              <button
                type="button"
                onClick={() => {
                  setPromptText(SAMPLE_PASTES['g2-weight']);
                  onRunAi(SAMPLE_PASTES['g2-weight']);
                }}
                className="px-2.5 py-1 rounded-lg bg-white text-indigo-900 border border-indigo-300 text-[11px] font-bold hover:bg-indigo-50 transition cursor-pointer"
              >
                📌 ថ្នាក់ទី២៖ មេ.៩ ទម្ងន់ (ទំ.៦១)
              </button>
              <button
                type="button"
                onClick={() => {
                  setPromptText(SAMPLE_PASTES['g1-geo']);
                  onRunAi(SAMPLE_PASTES['g1-geo']);
                }}
                className="px-2.5 py-1 rounded-lg bg-white text-emerald-900 border border-emerald-300 text-[11px] font-bold hover:bg-emerald-50 transition cursor-pointer"
              >
                📌 ថ្នាក់ទី១៖ មេ.៩ ធរណីមាត្រ (ទំ.៤៨)
              </button>
            </div>
          </div>

          {/* Textarea & Generate Button */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch">
            <div className="lg:col-span-9">
              <textarea
                rows={3}
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                onPaste={(e) => {
                  const pastedData = e.clipboardData.getData('text');
                  if (pastedData && pastedData.trim().length > 5) {
                    setTimeout(() => onRunAi(pastedData), 60);
                  }
                }}
                placeholder="១ម៉&#10;សស. មេ. ៥៖ ប្រវែង ការប្តូរខ្នាតប្រវែង (ទំ.៣៦)&#10;សគ. ជំ.៥ មេ.១៖ សកម្ម. ទី៨ (ទំ.២៥៧-២៥៨)"
                className="w-full px-4 py-3 rounded-xl border border-blue-300 bg-white text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-700 leading-relaxed shadow-sm"
              />
            </div>
            <div className="lg:col-span-3 flex flex-col gap-2 justify-between">
              <button
                type="button"
                disabled={isLoadingAi}
                onClick={() => onRunAi(promptText)}
                className="flex-1 px-4 py-3 rounded-xl bg-blue-900 hover:bg-blue-800 disabled:opacity-60 text-white text-sm font-bold shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>
                  {isLoadingAi ? 'កំពុងបង្កើតដោយ AI...' : '⚡ បង្កើតកិច្ចតែងការដោយ AI'}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setPromptText('')}
                className="px-2.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 text-xs font-semibold transition cursor-pointer"
              >
                🧹 សម្អាតប្រអប់សម្រាប់ Paste ថ្មី
              </button>
            </div>
          </div>

          {/* Auto Parsed Breakdown Banner */}
          <div className="bg-white/95 rounded-xl p-3.5 border border-blue-200 shadow-sm space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-bold text-blue-950">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span>បានផ្គូផ្គង និងវិភាគសៀវភៅផ្លូវការថ្នាក់ទី{parsedInfo.grade}៖</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-bold">
                ថ្នាក់ទី{parsedInfo.grade} • {parsedInfo.duration} • {parsedInfo.standardLevel}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
              <div className="p-2.5 rounded-lg bg-blue-50/90 border border-blue-200 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-blue-950 flex items-center justify-between">
                    <span>📖 ១. សៀវភៅសិស្ស (សស.)</span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-900 text-white text-[10px]">
                      ទំ. {parsedInfo.ssPage}
                    </span>
                  </div>
                  <p className="text-slate-800 font-semibold mt-1">
                    មេរៀនទី{parsedInfo.lessonNumKh}៖ {parsedInfo.officialTocTitle}
                  </p>
                  <p className="text-slate-600 text-[11px]">
                    ខ្លឹមសារ៖ {parsedInfo.subTopicTitle}
                  </p>
                </div>
                <a
                  href={booksMeta.studentBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 text-[11px] font-bold text-blue-800 hover:underline inline-flex items-center gap-1"
                >
                  បើកមើលសៀវភៅសិស្ស <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-50/90 border border-indigo-200 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-indigo-950 flex items-center justify-between">
                    <span>📘 ២. សៀវភៅណែនាំគ្រូ (សគ.)</span>
                    <span className="px-1.5 py-0.5 rounded bg-indigo-900 text-white text-[10px]">
                      ទំ. {parsedInfo.tgPage}
                    </span>
                  </div>
                  <p className="text-slate-800 font-semibold mt-1">
                    {parsedInfo.tgCodePrefix}
                  </p>
                  <p className="text-slate-600 text-[11px]">
                    សកម្មភាពទី{parsedInfo.tgActKh}៖ {parsedInfo.subTopicTitle}
                  </p>
                </div>
                <a
                  href={booksMeta.teacherGuideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 text-[11px] font-bold text-indigo-800 hover:underline inline-flex items-center gap-1"
                >
                  បើកមើលសៀវភៅណែនាំគ្រូ <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-50/90 border border-amber-200 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-amber-950 flex items-center justify-between">
                    <span>⭐ ៣. សៀវភៅស្ដង់ដា MCAS</span>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500 text-slate-950 text-[10px]">
                      MCAS
                    </span>
                  </div>
                  <p className="text-slate-800 font-semibold mt-1">
                    {parsedInfo.standardLevel}
                  </p>
                  <p className="text-slate-600 text-[11px]">
                    បញ្ចូល «៣. កំហុស និងគំនិតភាន់ច្រឡំ» រួចរាល់
                  </p>
                </div>
                <a
                  href={booksMeta.standardBookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 text-[11px] font-bold text-amber-900 hover:underline inline-flex items-center gap-1"
                >
                  បើកមើលសៀវភៅស្ដង់ដា <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Preset Cards by Grade */}
        <div className="pt-1">
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            មេរៀនគំរូក្នុងកញ្ចប់គណិតវិទ្យា (ចុចដើម្បីបំពេញភ្លាមៗ)៖
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {LESSON_PRESETS.filter(
              (p) => gradeFilter === 'ALL' || p.grade === gradeFilter
            ).map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setPlan(JSON.parse(JSON.stringify(preset)))}
                className="text-left p-3.5 rounded-xl border border-slate-200 hover:border-blue-600 bg-slate-50/70 hover:bg-blue-50/50 transition flex flex-col justify-between gap-2 group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-blue-900 text-white text-[11px] font-bold">
                      ថ្នាក់ទី{preset.grade}
                    </span>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">
                      {preset.standardLevel}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-950">
                    {preset.mainLesson}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                    {preset.subTopic}
                  </p>
                </div>
                <div className="text-[11px] font-bold text-blue-800 flex items-center justify-between pt-1 border-t border-slate-200/70">
                  <span>ជ្រើសរើសមេរៀននេះ</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Studio Split View: Detailed Editor (Left) + Live Preview (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Form Editor */}
        <div className="lg:col-span-6 bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-blue-800" />
              <span>កែសម្រួលព័ត៌មានកិច្ចតែងការបង្រៀន</span>
            </h3>
            <button
              type="button"
              onClick={handleResetDefault}
              className="text-xs font-semibold text-blue-700 hover:text-blue-900 underline flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>កំណត់ឡើងវិញតាមគំរូដើម</span>
            </button>
          </div>

          {/* 1. School & Teacher Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg">
              ១. ព័ត៌មានសាលារៀន និងគ្រូបង្រៀន
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ថ្នាក់ទី
                </label>
                <select
                  value={plan.grade}
                  onChange={(e) => handleFieldChange('grade', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
                >
                  <option value="១">ថ្នាក់ទី១</option>
                  <option value="២">ថ្នាក់ទី២</option>
                  <option value="៣">ថ្នាក់ទី៣</option>
                  <option value="៤">ថ្នាក់ទី៤</option>
                  <option value="៥">ថ្នាក់ទី៥</option>
                  <option value="៦">ថ្នាក់ទី៦</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  បង្រៀនដោយ
                </label>
                <input
                  type="text"
                  value={plan.teacher}
                  onChange={(e) => handleFieldChange('teacher', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  រយៈពេល
                </label>
                <input
                  type="text"
                  value={plan.duration}
                  onChange={(e) => handleFieldChange('duration', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                សាលាបឋមសិក្សា និងទីតាំង (កំហិតស្ដង់ដារ)
              </label>
              <input
                type="text"
                value={plan.school}
                onChange={(e) => handleFieldChange('school', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  កាលបរិច្ឆេទពុទ្ធសករាជ (ខាងក្រោម)
                </label>
                <input
                  type="text"
                  value={plan.lunarDate}
                  onChange={(e) => handleFieldChange('lunarDate', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ទីតាំង និងថ្ងៃខែឆ្នាំសុរិយគតិ
                </label>
                <input
                  type="text"
                  value={plan.solarDate}
                  onChange={(e) => handleFieldChange('solarDate', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
            </div>
          </div>

          {/* 2. Lesson Title & Standard Package Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg">
              ២. មេរៀន ខ្លឹមសាររង និងសកម្មភាពតាមសៀវភៅស្ដង់ដារ
            </h4>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                មេរៀនទី... (ស្រង់ចេញពីមាតិកាសៀវភៅសិស្ស + ទំព័រ)
              </label>
              <input
                type="text"
                value={plan.mainLesson}
                onChange={(e) => handleFieldChange('mainLesson', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ខ្លឹមសាររង (លេខកូដ ជំ./មេ. + ចំណងជើងរង + ទំព័រសៀវភៅណែនាំគ្រូ)
              </label>
              <input
                type="text"
                value={plan.subTopic}
                onChange={(e) => handleFieldChange('subTopic', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                លទ្ធផលរំពឹងទុកទី... (ស្រង់ពីសៀវភៅណែនាំគ្រូ)
              </label>
              <input
                type="text"
                value={plan.expectedOutcome}
                onChange={(e) => handleFieldChange('expectedOutcome', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  សកម្មភាពទី... និងទំព័រសៀវភៅណែនាំគ្រូ
                </label>
                <input
                  type="text"
                  value={plan.activityTitle}
                  onChange={(e) => handleFieldChange('activityTitle', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  កម្រិតស្ដង់ដារ MCAS
                </label>
                <select
                  value={plan.standardLevel}
                  onChange={(e) => handleFieldChange('standardLevel', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm bg-white"
                >
                  <option value="កម្រិតស្ដង់ដារសកម្មភាពទី១">សកម្មភាពទី១ (មូលដ្ឋាន)</option>
                  <option value="កម្រិតស្ដង់ដារសកម្មភាពទី២">សកម្មភាពទី២ (ពង្រឹង/អនុវត្ត)</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. Objectives & Materials */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg">
              ៣. វត្ថុបំណង និងសម្ភារៈឧបទេស (សម្ភាររូបី)
            </h4>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                វិជ្ជាសម្បទា
              </label>
              <textarea
                rows={2}
                value={plan.objKnowledge}
                onChange={(e) => handleFieldChange('objKnowledge', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                បំណិនសម្បទា
              </label>
              <textarea
                rows={2}
                value={plan.objSkill}
                onChange={(e) => handleFieldChange('objSkill', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ចរិយាសម្បទា
              </label>
              <textarea
                rows={2}
                value={plan.objAttitude}
                onChange={(e) => handleFieldChange('objAttitude', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  សម្ភារៈសម្រាប់គ្រូ
                </label>
                <textarea
                  rows={2}
                  value={plan.matTeacher}
                  onChange={(e) => handleFieldChange('matTeacher', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  សម្ភារៈសម្រាប់សិស្ស
                </label>
                <textarea
                  rows={2}
                  value={plan.matStudent}
                  onChange={(e) => handleFieldChange('matStudent', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
                />
              </div>
            </div>
          </div>

          {/* 4. Step 2, Step 3, Misconceptions, Step 4, Step 5 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1.5 rounded-lg">
              ៤. ខ្លឹមសារមេរៀន ល្បែងសិក្សា និងកំហុសភាន់ច្រឡំ (ជំហានទី២-៥)
            </h4>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ជំហានទី២៖ សំណួររំឭកមេរៀនចាស់ និងទំនាក់ទំនងមេរៀនថ្មី
              </label>
              <textarea
                rows={2}
                value={plan.step2Review}
                onChange={(e) => handleFieldChange('step2Review', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ជំហានទី៣ (ការងារដៃគូ និងការប្រើប្រាស់សម្ភាររូបី)
              </label>
              <textarea
                rows={3}
                value={plan.step3PairWork}
                onChange={(e) => handleFieldChange('step3PairWork', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ជំហានទី៣ (វិធានគន្លឹះ / តារាងសំយោគ / ដ្យាក្រាមរបារ Bar Model)
              </label>
              <textarea
                rows={3}
                value={plan.step3KeyRule}
                onChange={(e) => handleFieldChange('step3KeyRule', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ជំហានទី៣ (ការងារក្រុម និងល្បែងសិក្សាគណិតវិទ្យា)
              </label>
              <textarea
                rows={2}
                value={plan.step3GroupGame}
                onChange={(e) => handleFieldChange('step3GroupGame', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>

            {/* MANDATORY MISCONCEPTIONS SECTION */}
            <div className="p-3.5 rounded-xl bg-rose-50 border-2 border-rose-300 space-y-1">
              <label className="block text-xs font-bold text-rose-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>
                  ⚠️ ៣. កំហុស និងគំនិតភាន់ច្រឡំ (កំហិតដាច់ខាតនៅចុងបញ្ចប់នៃជំហានទី៣ តាមសៀវភៅស្ដង់ដារ MCAS)
                </span>
              </label>
              <p className="text-[11px] text-rose-800">
                កត់សម្គាល់កំហុសដែលសិស្សតែងតែយល់ច្រឡំ និងវិធានការគរុកោសល្យជួយកែតម្រូវ (Remedial Support)។
              </p>
              <textarea
                rows={3}
                value={plan.misconceptions}
                onChange={(e) => handleFieldChange('misconceptions', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-rose-300 text-sm bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ជំហានទី៤៖ លំហាត់ពង្រឹងចំណេះដឹងលើក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម)
              </label>
              <textarea
                rows={2}
                value={plan.step4Practice}
                onChange={(e) => handleFieldChange('step4Practice', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                ជំហានទី៥៖ កិច្ចការផ្ទះ និងបណ្ដាំផ្ញើ
              </label>
              <textarea
                rows={2}
                value={plan.step5Homework}
                onChange={(e) => handleFieldChange('step5Homework', e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm"
              />
            </div>

            {/* Concrete Manipulatives Input values */}
            <div className="pt-2 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-700 mb-2">
                តម្លៃលេខសម្រាប់សម្ភាររូបី (Bar Model & Place Value Simulator)៖
              </label>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    ផ្នែកទី១ (Bar A)
                  </label>
                  <input
                    type="number"
                    value={plan.barA}
                    onChange={(e) =>
                      handleFieldChange('barA', parseInt(e.target.value, 10) || 1)
                    }
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    ផ្នែកទី២ (Bar B)
                  </label>
                  <input
                    type="number"
                    value={plan.barB}
                    onChange={(e) =>
                      handleFieldChange('barB', parseInt(e.target.value, 10) || 1)
                    }
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">
                    ចំនួនបំបែក (Place Num)
                  </label>
                  <input
                    type="number"
                    value={plan.placeNum}
                    onChange={(e) =>
                      handleFieldChange('placeNum', parseInt(e.target.value, 10) || 1)
                    }
                    className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onSavePlan}
              className="flex-1 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>💾 រក្សាទុកកិច្ចតែងការនេះ</span>
            </button>
            <button
              type="button"
              onClick={onGoToDocument}
              className="flex-1 px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-sm font-bold shadow transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>📄 មើលទម្រង់ពេញ (A4) & បោះពុម្ព</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Compact Preview */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ផ្ផ្ទាំងបង្ហាញផ្ទាល់ (Live Preview)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold">
                  ស្ដង់ដារ MoEYS ៨/៨ ចំណុច
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onCopyText}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>ចម្លងអត្ថបទ</span>
                </button>
                <button
                  type="button"
                  onClick={onGoToSlides}
                  className="px-3 py-1.5 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-900 text-xs font-semibold cursor-pointer"
                >
                  🖥️ មើលស្លាយ ១២
                </button>
              </div>
            </div>

            {/* Mini Scrollable Document Preview */}
            <div className="mt-3 max-h-[820px] overflow-y-auto border border-slate-200 rounded-xl p-4 bg-white text-xs sm:text-sm space-y-3.5 khmer-doc leading-relaxed">
              <div className="text-center space-y-0.5 border-b pb-2 border-slate-800">
                <p className="khmer-moul text-xs text-slate-900">ព្រះរាជាណាចក្រកម្ពុជា</p>
                <p className="khmer-moul text-[11px] text-slate-800">ជាតិ សាសនា ព្រះមហាក្សត្រ</p>
                <p className="khmer-moul text-sm text-blue-950 pt-1">កិច្ចតែងការបង្រៀន</p>
              </div>

              <div className="p-2.5 bg-slate-50 border rounded-lg space-y-1 text-[11px]">
                <p><strong>ថ្នាក់ទី៖</strong> {plan.grade} • <strong>មុខវិជ្ជា៖</strong> គណិតវិទ្យា</p>
                <p><strong>សាលាបឋមសិក្សា៖</strong> {plan.school}</p>
                <p><strong>បង្រៀនដោយ៖</strong> {plan.teacher} • <strong>រយៈពេល៖</strong> {plan.duration}</p>
                <p className="font-bold text-blue-950 pt-1 border-t">{plan.mainLesson}</p>
                <p className="font-semibold text-slate-800">{plan.subTopic}</p>
                <p className="text-indigo-900">{plan.activityTitle} ({plan.standardLevel})</p>
              </div>

              <div className="space-y-1 text-[11px]">
                <h5 className="khmer-moul text-blue-950">I. វត្ថុបំណង</h5>
                <p>• <strong>វិជ្ជាសម្បទា៖</strong> {plan.objKnowledge}</p>
                <p>• <strong>បំណិនសម្បទា៖</strong> {plan.objSkill}</p>
                <p>• <strong>ចរិយាសម្បទា៖</strong> {plan.objAttitude}</p>
              </div>

              <div className="space-y-1 text-[11px]">
                <h5 className="khmer-moul text-blue-950">II. សម្ភារៈឧបទេស</h5>
                <p>• <strong>គ្រូ៖</strong> {plan.matTeacher}</p>
                <p>• <strong>សិស្ស៖</strong> {plan.matStudent}</p>
              </div>

              <div className="space-y-1 text-[11px]">
                <h5 className="khmer-moul text-blue-950">III. ដំណើរការបង្រៀន (តារាង ៣ ជួរ)</h5>
                <div className="overflow-x-auto border rounded">
                  <table className="w-full text-[10px] border-collapse">
                    <thead>
                      <tr className="bg-blue-50 text-blue-900 border-b">
                        <th className="p-1.5 border-r text-left w-1/3">សកម្មភាពគ្រូ</th>
                        <th className="p-1.5 border-r text-left w-1/3">ខ្លឹមសារមេរៀន</th>
                        <th className="p-1.5 text-left w-1/3">សកម្មភាពសិស្ស</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y text-slate-700">
                      <tr>
                        <td className="p-1.5 border-r">រដ្ឋបាលថ្នាក់ ពិនិត្យវត្តមាន និងអនាម័យ</td>
                        <td className="p-1.5 border-r font-semibold">ជំហានទី១ (៣នាទី)៖ រដ្ឋបាលថ្នាក់</td>
                        <td className="p-1.5">ប្រធានថ្នាក់រាយការណ៍</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 border-r">សួររំឭកមេរៀនចាស់លើក្ដារឆ្នួន</td>
                        <td className="p-1.5 border-r">{plan.step2Review}</td>
                        <td className="p-1.5">គណនាលើក្ដារឆ្នួន</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 border-r">បង្ហាញសម្ភាររូបី និងសម្របសម្រួលដៃគូ</td>
                        <td className="p-1.5 border-r">
                          <p className="font-bold text-blue-950">ជំហានទី៣ (២០នាទី)៖ មេរៀនថ្មី</p>
                          <p className="mt-1">{plan.step3PairWork}</p>
                          <p className="mt-1 font-semibold">{plan.step3KeyRule}</p>
                          <div className="mt-1.5 p-1 bg-rose-50 border border-rose-200 text-rose-900 rounded">
                            <strong>៣. កំហុស និងគំនិតភាន់ច្រឡំ៖</strong> {plan.misconceptions}
                          </div>
                        </td>
                        <td className="p-1.5">សង្កេត អនុវត្តជាមួយសម្ភាររូបី ចៀសវាងកំហុសភាន់ច្រឡំ</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 border-r">ដាក់លំហាត់លើក្ដារឆ្នួន ពិនិត្យបណ្ណសញ្ញា</td>
                        <td className="p-1.5 border-r font-semibold">ជំហានទី៤ (៧នាទី)៖ {plan.step4Practice}</td>
                        <td className="p-1.5">លើកក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរ</td>
                      </tr>
                      <tr>
                        <td className="p-1.5 border-r">ដាក់កិច្ចការផ្ទះ និងបណ្ដាំផ្ញើ</td>
                        <td className="p-1.5 border-r">ជំហានទី៥ (៣នាទី)៖ {plan.step5Homework}</td>
                        <td className="p-1.5">កត់ត្រា និងស្ដាប់បណ្ដាំផ្ញើ</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 text-right text-[10px] text-slate-600">
                <p>{plan.lunarDate}</p>
                <p>{plan.solarDate}</p>
                <p className="font-bold text-slate-800 mt-1">គ្រូបន្ទុកថ្នាក់៖ {plan.teacher}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
