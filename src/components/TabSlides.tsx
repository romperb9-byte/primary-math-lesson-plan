import React, { useState } from 'react';
import { LessonPlan, SlideItem } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle,
  HelpCircle,
  Sliders,
  Layers,
} from 'lucide-react';

interface TabSlidesProps {
  plan: LessonPlan;
  setPlan: React.Dispatch<React.SetStateAction<LessonPlan>>;
}

export const TabSlides: React.FC<TabSlidesProps> = ({ plan, setPlan }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [trafficMessage, setTrafficMessage] = useState<string | null>(null);

  // Generate 12-slide deck
  const slides: SlideItem[] = [
    {
      num: 1,
      tag: 'Slide 1 • ចំណងជើងមេរៀន និងព័ត៌មានសាលា',
      title: plan.mainLesson,
      subtitle: plan.subTopic,
      body: `សាលាបឋមសិក្សា៖ ${plan.school}\nបង្រៀនដោយ៖ ${plan.teacher} | ថ្នាក់ទី${plan.grade}\nកាលបរិច្ឆេទ៖ ${plan.solarDate}`,
      badge: plan.standardLevel,
    },
    {
      num: 2,
      tag: 'Slide 2 • វត្ថុបំណងមេរៀន',
      title: 'វត្ថុបំណងនៃមេរៀន (វិជ្ជាសម្បទា • បំណិនសម្បទា • ចរិយាសម្បទា)',
      subtitle: plan.expectedOutcome,
      body: `• វិជ្ជាសម្បទា៖ ${plan.objKnowledge}\n• បំណិនសម្បទា៖ ${plan.objSkill}\n• ចរិយាសម្បទា៖ ${plan.objAttitude}`,
      badge: 'វត្ថុបំណងទាំង ៣ ផ្នែក',
    },
    {
      num: 3,
      tag: 'Slide 3 • រំឭកមេរៀនចាស់ និងភ្ជាប់មេរៀនថ្មី',
      title: 'ជំហានទី២៖ រំឭកមេរៀនចាស់ និងទំនាក់ទំនងមេរៀនថ្មី',
      subtitle: 'សកម្មភាពលើក្ដារឆ្នួន និងសំណួរបំផុសគំនិត',
      body: plan.step2Review,
      badge: 'រយៈពេល ៧ នាទី',
    },
    {
      num: 4,
      tag: 'Slide 4 • ខ្លឹមសារគន្លឹះទី១ (វិធានស្ដង់ដារ)',
      title: 'ខ្លឹមសារគន្លឹះទី១៖ វិធាន និងជំហានដោះស្រាយតាមសៀវភៅស្ដង់ដារ',
      subtitle: plan.activityTitle,
      body: plan.step3KeyRule,
      badge: 'សៀវភៅស្ដង់ដារគណិតវិទ្យា',
    },
    {
      num: 5,
      tag: 'Slide 5 • ខ្លឹមសារគន្លឹះទី២ (សម្ភាររូបី)',
      title: 'ខ្លឹមសារគន្លឹះទី២៖ ការប្រើប្រាស់សម្ភាររូបីក្នុងការងារដៃគូ',
      subtitle: `សម្ភារៈ៖ ${plan.matTeacher}`,
      body: plan.step3PairWork,
      badge: 'ការងារដៃគូ (សង្កេត & អនុវត្ត)',
    },
    {
      num: 6,
      tag: 'Slide 6 • ខ្លឹមសារគន្លឹះទី៣ (ដ្យាក្រាមរបារ Bar Model)',
      title: 'ខ្លឹមសារគន្លឹះទី៣៖ ដ្យាក្រាមរបារ (Bar Model) និងតារាងបំបែកខ្នាត/ខ្ទង់',
      subtitle: `គំនូសបំព្រួញតំណាងទំនាក់ទំនងចំនួន (${plan.barA} និង ${plan.barB} → សរុប ${plan.barA + plan.barB})`,
      body: `ប្រើដ្យាក្រាមរបារ និងតារាងតម្លៃខ្ទង់/ខ្នាត (ចំនួនគំរូ៖ ${plan.placeNum}) ដើម្បីជួយសិស្សមើលឃើញទំនាក់ទំនងរវាងផ្នែក និងចំនួនសរុបយ៉ាងច្បាស់លាស់។`,
      badge: 'Bar Model & Place Value',
    },
    {
      num: 7,
      tag: 'Slide 7 • លំហាត់គំរូទី១ (សៀវភៅណែនាំគ្រូ)',
      title: 'លំហាត់គំរូទី១៖ ការបង្ហាញជំហានដោះស្រាយតាមសៀវភៅណែនាំគ្រូ',
      subtitle: plan.subTopic,
      body: `គ្រូនាំសិស្សអនុវត្តជាជំហានៗលើក្ដារខៀនដោយភ្ជាប់ពីសម្ភាររូបី ទៅកាន់និមិត្តសញ្ញាគណិតវិទ្យា៖\n${plan.step3PairWork}`,
      badge: 'សៀវភៅណែនាំគ្រូ',
    },
    {
      num: 8,
      tag: 'Slide 8 • លំហាត់គំរូទី២ & កំហុសភាន់ច្រឡំ',
      title: 'លំហាត់គំរូទី២ និងការបង្ការកំហុស និងគំនិតភាន់ច្រឡំ (MCAS)',
      subtitle: `៣. កំហុស និងគំនិតភាន់ច្រឡំ (${plan.standardLevel})`,
      body: plan.misconceptions,
      badge: 'កំហិតដាច់ខាត ជំហានទី៣',
    },
    {
      num: 9,
      tag: 'Slide 9 • ការអនុវត្តលើក្ដារឆ្នួន (Formative Assessment)',
      title: 'ជំហានទី៤៖ ការអនុវត្តលើក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរ',
      subtitle: 'បណ្ណពណ៌បៃតង = ត្រូវ/យល់ស្រប | បណ្ណពណ៌ក្រហម = ខុស/មិនយល់ស្រប',
      body: plan.step4Practice,
      badge: 'វាយតម្លៃក្នុងដំណើរការសិក្សា',
    },
    {
      num: 10,
      tag: 'Slide 10 • តម្លៃអប់រំ និងការអនុវត្តក្នុងជីវភាព',
      title: 'តម្លៃអប់រំ និងការអនុវត្តជាក់ស្ដែងក្នុងជីវភាពប្រចាំថ្ងៃ',
      subtitle: 'ភ្ជាប់គណិតវិទ្យាទៅនឹងជីវភាពរស់នៅរបស់សិស្ស',
      body: `${plan.objAttitude}\n• សិស្សចេះយកចំណេះដឹងគណិតវិទ្យាទៅប្រើក្នុងការរាប់ វាស់វែង ប្តូរខ្នាត និងចែករំលែកវត្ថុនៅផ្ទះ និងសាលារៀន។`,
      badge: 'បរិបទជីវភាពរស់នៅ',
    },
    {
      num: 11,
      tag: 'Slide 11 • សកម្មភាពក្រុម និងល្បែងសិក្សា',
      title: 'សកម្មភាពក្រុម និងល្បែងសិក្សាគណិតវិទ្យា',
      subtitle: 'សៀវភៅណែនាំគ្រូ និងសៀវភៅជំនួយគណិតវិទ្យា',
      body: plan.step3GroupGame,
      badge: 'ល្បែងសិក្សាគណិតវិទ្យា',
    },
    {
      num: 12,
      tag: 'Slide 12 • សង្ខេបមេរៀន និងកិច្ចការផ្ទះ',
      title: 'ជំហានទី៥៖ សង្ខេបមេរៀនគន្លឹះ កិច្ចការផ្ទះ និងបណ្ដាំផ្ញើ',
      subtitle: plan.mainLesson,
      body: `• កិច្ចការផ្ទះ៖ ${plan.step5Homework}\n• បណ្ដាំផ្ញើ៖ ពេលត្រឡប់ទៅផ្ទះវិញ សូមកូនៗដើរប្រកាន់ស្ដាំ ថែរក្សាអនាម័យ និងមើលមេរៀនបន្ថែម។`,
      badge: `បញ្ចប់មេរៀន (${plan.duration})`,
    },
  ];

  const activeSlide = slides[currentSlideIndex] || slides[0];

  // Bar model calculations
  const totalBar = Math.max(1, plan.barA + plan.barB);
  let pctA = Math.round((plan.barA / totalBar) * 100);
  pctA = Math.max(18, Math.min(82, pctA));
  const pctB = 100 - pctA;

  // Place value calculations
  const num = Math.max(1, Math.min(999, plan.placeNum));
  const hundreds = Math.floor(num / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;

  return (
    <div className="space-y-6">
      {/* Interactive Concrete Manipulatives Sandbox */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Layers className="w-5 h-5 text-blue-800" />
              <span>
                🧮 ឧបករណ៍សម្ភាររូបីឌីជីថល និងដ្យាក្រាមរបារ (Interactive Manipulatives & Bar Model)
              </span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              កែប្រែតម្លៃលេខខាងក្រោមដើម្បីបង្ហាញសិស្សលើស្លាយ ឬក្ដារខៀន (ដ្យាក្រាមរបារ Bar Model បន្ទះតម្លៃខ្ទង់ និងបណ្ណសញ្ញាចរាចរ)។
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-600">
              បណ្ណសញ្ញាចរាចរវាយតម្លៃ (ជំហានទី៤)៖
            </span>
            <button
              type="button"
              onClick={() =>
                setTrafficMessage(
                  '🟢 សិស្សលើកបណ្ណសញ្ញាចរាចរពណ៌បៃតង៖ «យល់ស្រប / ចម្លើយត្រឹមត្រូវ!» — គ្រូកោតសរសើរ និងបន្តទៅលំហាត់បន្ទាប់។'
                )
              }
              className="px-3 py-1 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1 cursor-pointer"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>🟢 បៃតង (ត្រូវ/យល់ស្រប)</span>
            </button>
            <button
              type="button"
              onClick={() =>
                setTrafficMessage(
                  '🔴 សិស្សលើកបណ្ណសញ្ញាចរាចរពណ៌ក្រហម៖ «មិនយល់ស្រប / ត្រូវការជំនួយ!» — គ្រូពន្យល់បន្ថែមដោយប្រើសម្ភាររូបី និងកែតម្រូវកំហុសភាន់ច្រឡំ។'
                )
              }
              className="px-3 py-1 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>🔴 ក្រហម (ខុស/មិនទាន់យល់)</span>
            </button>
          </div>
        </div>

        {trafficMessage && (
          <div className="p-3 rounded-xl text-center font-bold text-xs sm:text-sm bg-blue-50 text-blue-950 border border-blue-300 animate-fadeIn flex items-center justify-between">
            <span>{trafficMessage}</span>
            <button
              type="button"
              onClick={() => setTrafficMessage(null)}
              className="text-xs font-bold text-blue-700 hover:text-blue-900 ml-3 underline cursor-pointer"
            >
              បិទ
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
          {/* Bar Model Interactive */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-blue-950">
                📊 ដ្យាក្រាមរបារ (Bar Model — ផ្នែក និងចំនួនសរុប)
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-900">
                {plan.barA} + {plan.barB} = {plan.barA + plan.barB}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  ផ្នែកទី១ (ចំនួនទី១)
                </label>
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={plan.barA}
                  onChange={(e) =>
                    setPlan((prev) => ({
                      ...prev,
                      barA: parseInt(e.target.value, 10) || 1,
                    }))
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm bg-white"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">
                  ផ្នែកទី២ (ចំនួនទី២)
                </label>
                <input
                  type="number"
                  min={1}
                  max={1000}
                  value={plan.barB}
                  onChange={(e) =>
                    setPlan((prev) => ({
                      ...prev,
                      barB: parseInt(e.target.value, 10) || 1,
                    }))
                  }
                  className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm bg-white"
                />
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200 space-y-2">
              <div className="text-center text-xs font-bold text-slate-700">
                ចំនួនសរុបទាំងអស់ = {plan.barA + plan.barB}
              </div>
              <div className="w-full h-10 rounded-lg overflow-hidden flex border-2 border-slate-800 font-bold text-xs text-white shadow-inner">
                <div
                  style={{ width: `${pctA}%` }}
                  className="bg-blue-600 flex items-center justify-center transition-all duration-300"
                >
                  ផ្នែកទី១៖ {plan.barA}
                </div>
                <div
                  style={{ width: `${pctB}%` }}
                  className="bg-amber-500 text-slate-950 flex items-center justify-center border-l-2 border-slate-800 transition-all duration-300"
                >
                  ផ្នែកទី២៖ {plan.barB}
                </div>
              </div>
              <div className="flex justify-between text-[11px] text-slate-500 font-medium px-1">
                <span>០</span>
                <span>
                  ផ្នែកទី១ ({plan.barA}) + ផ្នែកទី២ ({plan.barB})
                </span>
                <span>{plan.barA + plan.barB}</span>
              </div>
            </div>
          </div>

          {/* Place Value Interactive */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-blue-950">
                🧱 តារាងតម្លៃខ្ទង់ និងការបំបែកខ្នាត (រយ/ម • ដប់/ដម • រាយ/សម)
              </h3>
              <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-900">
                {hundreds} រយ + {tens} ដប់ + {ones} រាយ = {num}
              </span>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">
                បញ្ចូលចំនួន (ពី ១ ដល់ ៩៩៩)
              </label>
              <input
                type="number"
                min={1}
                max={999}
                value={plan.placeNum}
                onChange={(e) =>
                  setPlan((prev) => ({
                    ...prev,
                    placeNum: parseInt(e.target.value, 10) || 1,
                  }))
                }
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-sm bg-white"
              />
            </div>

            <div className="bg-white rounded-lg p-3 border border-slate-200 grid grid-cols-3 gap-2 text-center">
              <div className="p-2 rounded bg-indigo-50 border border-indigo-200">
                <div className="text-xs font-bold text-indigo-950 border-b border-indigo-200 pb-1 mb-1.5">
                  ខ្ទង់រយ / ម៉ែត្រ ({hundreds})
                </div>
                <div className="min-h-[44px] flex flex-wrap items-center justify-center gap-1">
                  {hundreds > 0 ? (
                    Array.from({ length: Math.min(hundreds, 9) }).map((_, i) => (
                      <span
                        key={i}
                        className="inline-block w-6 h-6 rounded bg-indigo-600 text-[10px] text-white leading-6 font-bold shadow-sm"
                      >
                        100
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400">០ បន្ទះ</span>
                  )}
                </div>
              </div>

              <div className="p-2 rounded bg-emerald-50 border border-emerald-200">
                <div className="text-xs font-bold text-emerald-950 border-b border-emerald-200 pb-1 mb-1.5">
                  ខ្ទង់ដប់ / ដម ({tens})
                </div>
                <div className="min-h-[44px] flex flex-wrap items-center justify-center gap-1">
                  {tens > 0 ? (
                    Array.from({ length: Math.min(tens, 9) }).map((_, j) => (
                      <span
                        key={j}
                        className="inline-block w-3 h-7 rounded bg-emerald-600 text-[9px] text-white leading-7 font-bold shadow-sm"
                      >
                        10
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-slate-400">០ បាច់</span>
                  )}
                </div>
              </div>

              <div className="p-2 rounded bg-amber-50 border border-amber-200">
                <div className="text-xs font-bold text-amber-950 border-b border-amber-200 pb-1 mb-1.5">
                  ខ្ទង់រាយ / សម ({ones})
                </div>
                <div className="min-h-[44px] flex flex-wrap items-center justify-center gap-1">
                  {ones > 0 ? (
                    Array.from({ length: Math.min(ones, 9) }).map((_, k) => (
                      <span
                        key={k}
                        className="inline-block w-3.5 h-3.5 rounded-full bg-amber-500 border border-amber-700 shadow-sm"
                      />
                    ))
                  ) : (
                    <span className="text-xs text-slate-400">០ គ្រាប់</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 12 Slides Projector Stage */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Maximize2 className="w-5 h-5 text-indigo-900" />
              <span>🖥️ ស្លាយបង្រៀនទាំង ១២ ស្លាយ (12-Slide Classroom Deck)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              រៀបចំដោយស្វ័យប្រវត្តិស្របតាមកិច្ចតែងការបច្ចុប្បន្ន និងសៀវភៅស្ដង់ដារគណិតវិទ្យា (Slide 1 ដល់ 12) សម្រាប់បញ្ចាំងលើ Projector/TV។
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1))
              }
              className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>ស្លាយមុន</span>
            </button>
            <span className="text-xs font-bold text-blue-950 px-2">
              ស្លាយទី {activeSlide.num} / 12
            </span>
            <button
              type="button"
              onClick={() =>
                setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0))
              }
              className="px-3 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer"
            >
              <span>ស្លាយបន្ទាប់</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Active Projector Screen */}
        <div className="rounded-2xl bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 shadow-xl min-h-[320px] flex flex-col justify-between border-2 border-amber-400/80 transition-all">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 pb-3">
              <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-bold">
                {activeSlide.tag}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/10 text-blue-200 text-xs font-semibold">
                {activeSlide.badge}
              </span>
            </div>

            <h3 className="text-lg sm:text-2xl font-bold text-white leading-snug pt-1">
              {activeSlide.title}
            </h3>
            <p className="text-xs sm:text-sm text-amber-300 font-semibold">
              {activeSlide.subtitle}
            </p>

            <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-blue-50 leading-relaxed whitespace-pre-line">
              {activeSlide.body}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-[11px] text-blue-200">
            <span>
              {plan.school} • {plan.teacher}
            </span>
            <span>
              កញ្ចប់គណិតវិទ្យា ថ្នាក់ទី{plan.grade} (ស្លាយទី {activeSlide.num} / 12)
            </span>
          </div>
        </div>

        {/* 12 Slides Thumbnail Grid */}
        <div className="pt-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
            ទិដ្ឋភាពរួមនៃស្លាយទាំង ១២ (ចុចលើស្លាយណាមួយដើម្បីបញ្ចាំងធំ)៖
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {slides.map((s, idx) => {
              const isSelected = idx === currentSlideIndex;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`text-left p-3.5 rounded-xl border transition flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-blue-50 border-blue-700 ring-2 ring-blue-600'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="px-2 py-0.5 rounded bg-blue-900 text-white text-[11px] font-bold">
                        ស្លាយទី {s.num}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500">
                        {s.badge}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                      {s.body}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
