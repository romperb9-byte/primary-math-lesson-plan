import React, { useState, useEffect } from 'react';
import { LessonPlan } from './types';
import {
  LESSON_PRESETS,
  OFFICIAL_TOC_DB,
  GRADE_BOOKS_META,
  parseSmartScheduleInput,
  intToKhmer,
} from './data/curriculumData';
import { Header } from './components/Header';
import { TabStudio } from './components/TabStudio';
import { TabDocument } from './components/TabDocument';
import { TabSlides } from './components/TabSlides';
import { TabLibrary } from './components/TabLibrary';
import { TabSaved } from './components/TabSaved';

const STORAGE_KEY = 'moeys_math_package_saved_plans_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState('studio');
  const [plan, setPlan] = useState<LessonPlan>(() => {
    return JSON.parse(JSON.stringify(LESSON_PRESETS[0]));
  });
  const [savedPlans, setSavedPlans] = useState<LessonPlan[]>([]);
  const [hasServerAi, setHasServerAi] = useState(false);
  const [isLoadingAi, setIsLoadingAi] = useState(false);
  const [toast, setToast] = useState<{ message: string; icon?: string } | null>(null);

  // Load saved plans from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSavedPlans(parsed);
          return;
        }
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
    // Default initial saved plans
    const initialSaved = [
      {
        ...LESSON_PRESETS[0],
        savedAt: '១៩/១០/២០២៦ • ២២:០០',
      },
      {
        ...LESSON_PRESETS[2],
        savedAt: '១៩/១០/២០២៦ • ២១:៣៥',
      },
    ];
    setSavedPlans(initialSaved);
  }, []);

  // Save to localStorage when savedPlans changes
  const persistSavedPlans = (newPlans: LessonPlan[]) => {
    setSavedPlans(newPlans);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPlans));
    } catch (e) {
      console.warn('Could not write to localStorage', e);
    }
  };

  // Check server AI health
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.hasApiKey) {
          setHasServerAi(true);
        }
      })
      .catch(() => {
        setHasServerAi(false);
      });
  }, []);

  const showToast = (message: string, icon = '✓') => {
    setToast({ message, icon });
    setTimeout(() => {
      setToast(null);
    }, 3200);
  };

  // Run AI Generation (with Gemini server endpoint or Smart Engine fallback)
  const handleRunAi = async (promptText: string, forcedGrade?: string) => {
    const q = promptText.trim();
    if (!q) {
      showToast('សូមបិទភ្ជាប់ (Paste) ឬវាយបញ្ចូលប្រធានបទមេរៀនជាមុនសិន!', '⚠️');
      return;
    }

    setIsLoadingAi(true);
    const parsed = parseSmartScheduleInput(q);
    const g = forcedGrade || parsed.grade;
    const mainLessonStr = `មេរៀនទី${parsed.lessonNumKh}៖ ${parsed.officialTocTitle} (សស. ទំព័រ ${parsed.ssPage})`;
    const subTopicStr = `ខ្លឹមសាររង៖ ${parsed.tgCodePrefix} ${parsed.subTopicTitle} (ស.គ្រូ ទំព័រ ${parsed.tgPage})`;
    const actTitleStr = `សកម្មភាពទី${parsed.tgActKh}៖ ${parsed.subTopicTitle} ទំព័រ ${parsed.tgPage} (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)`;

    // Prepare default high-quality template based on topic
    let newPlan: LessonPlan;
    const combined = `${parsed.officialTocTitle} ${parsed.subTopicTitle} ${q}`;

    if (combined.includes('ប្តូរខ្នាត') || (combined.includes('ប្រវែង') && combined.includes('ប្តូរ'))) {
      newPlan = {
        ...JSON.parse(JSON.stringify(LESSON_PRESETS[0])),
        grade: g,
        duration: parsed.duration,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
      };
    } else if (combined.includes('ទម្ងន់') || combined.includes('គីឡូក្រាម')) {
      newPlan = {
        ...JSON.parse(JSON.stringify(LESSON_PRESETS[2])),
        grade: g,
        duration: parsed.duration,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
      };
    } else if (combined.includes('ធរណីមាត្រ') || combined.includes('បន្ទាត់') || combined.includes('ខ្សែកោង')) {
      newPlan = {
        ...JSON.parse(JSON.stringify(LESSON_PRESETS[1])),
        grade: g,
        duration: parsed.duration,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
      };
    } else if (combined.includes('ចែក')) {
      newPlan = {
        ...JSON.parse(JSON.stringify(LESSON_PRESETS[4])),
        grade: g,
        duration: parsed.duration,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
      };
    } else if (combined.includes('គុណ')) {
      newPlan = {
        ...JSON.parse(JSON.stringify(LESSON_PRESETS[5])),
        grade: g,
        duration: parsed.duration,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
      };
    } else if (combined.includes('បូក')) {
      newPlan = {
        ...JSON.parse(JSON.stringify(LESSON_PRESETS[3])),
        grade: g,
        duration: parsed.duration,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
      };
    } else {
      // General primary math standard template
      newPlan = {
        grade: g,
        teacher: plan.teacher,
        school: plan.school,
        duration: parsed.duration,
        lunarDate: plan.lunarDate,
        solarDate: plan.solarDate,
        mainLesson: mainLessonStr,
        subTopic: subTopicStr,
        expectedOutcome: `លទ្ធផលរំពឹងទុក៖ សិស្សយល់ច្បាស់ពីបញ្ញត្តិ និងដោះស្រាយលំហាត់លើខ្លឹមសារ «${parsed.subTopicTitle}» បានត្រឹមត្រូវ។`,
        activityTitle: actTitleStr,
        standardLevel: parsed.standardLevel,
        objKnowledge: `សិស្សប្រាប់បានពីវិធានគន្លឹះ និយមន័យ និងជំហានអនុវត្តនៃ «${parsed.subTopicTitle}» បានត្រឹមត្រូវតាមរយៈការបង្ហាញសម្ភាររូបីរបស់គ្រូ។`,
        objSkill: `សិស្សអនុវត្តគណនា និងដោះស្រាយលំហាត់លើខ្លឹមសារ «${parsed.subTopicTitle}» លើក្ដារឆ្នួន និងសៀវភៅសិស្សទំព័រ ${parsed.ssPage} បានត្រឹមត្រូវតាមរយៈការងារដៃគូ និងក្រុម។`,
        objAttitude: `សិស្សមានទំនុកចិត្ត ស្មារតីសហការ និងភាពផ្ចិតផ្ចង់ក្នុងការប្រើប្រាស់ចំណេះដឹង «${parsed.subTopicTitle}» ក្នុងជីវភាពប្រចាំថ្ងៃនៅភូមិថ្លុកបង្កោ។`,
        matTeacher: `សៀវភៅណែនាំគ្រូថ្នាក់ទី${g} (ទំព័រ ${parsed.tgPage}), សៀវភៅសិស្សទំព័រ ${parsed.ssPage}, សៀវភៅស្ដង់ដា MCAS, បន្ទះតម្លៃខ្ទង់, បាច់បំពង់បឺត, ដ្យាក្រាមរបារ Bar Model, បណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម)។`,
        matStudent: `ក្ដារឆ្នួន ហ្វឺត/ដីស គ្រាប់រាប់ សៀវភៅសិស្សថ្នាក់ទី${g} (ទំព័រ ${parsed.ssPage}) និងសៀវភៅជំនួយគណិតវិទ្យា។`,
        step2Review: `គ្រូសួរសំណួររំឭកមេរៀនចាស់លើក្ដារឆ្នួន រួចបង្ហាញវត្ថុជាក់ស្ដែងដើម្បីភ្ជាប់ទំនាក់ទំនងទៅមេរៀនថ្មី «${parsed.subTopicTitle}»។`,
        step3PairWork: `គ្រូបង្ហាញសម្ភាររូបីតាមសកម្មភាពទី${parsed.tgActKh} (ស.គ្រូ ទំព័រ ${parsed.tgPage})។ សិស្សចាប់ដៃគូសង្កេត ពិភាក្សា និងអនុវត្តជាមួយសម្ភាររូបីតាមសៀវភៅសិស្សទំព័រ ${parsed.ssPage}។`,
        step3KeyRule: `• វិធានគន្លឹះស្ដង់ដារ (${parsed.subTopicTitle})៖\n  - សង្កេតទិន្នន័យ និងរៀបចំតាមតម្លៃខ្ទង់/ដ្យាក្រាមរបារ Bar Model\n  - អនុវត្តតាមជំហានគណិតវិទ្យា និងផ្ទៀងផ្ទាត់ចម្លើយដោយប្រើសម្ភាររូបី។`,
        step3GroupGame: `ល្បែងសិក្សា «ផ្គូផ្គងបណ្ណគណិតវិទ្យា»៖ ក្រុមសិស្សសហការគ្នាដោះស្រាយលំហាត់ក្នុងសៀវភៅសិស្សទំព័រ ${parsed.ssPage} រួចឡើងបង្ហាញលើក្ដារខៀន។`,
        misconceptions: `• សិស្សភាន់ច្រឡំលំដាប់ជំហាននៃការធ្វើប្រមាណវិធី ឬច្រឡំខ្នាតរង្វាស់ក្នុងមេរៀន «${parsed.subTopicTitle}»។\n• វិធីជួយកែតម្រូវ (Remedial Support)៖ គ្រូប្រើសម្ភាររូបី និងដ្យាក្រាមរបារ Bar Model ពន្យល់បន្ថែមដល់សិស្សដែលជួបការលំបាក។`,
        step4Practice: `ឱ្យសិស្សអនុវត្តលំហាត់ពង្រឹងលើក្ដារឆ្នួនតាមសៀវភៅសិស្សទំព័រ ${parsed.ssPage} និងលើកបណ្ណសញ្ញាចរាចរ (បៃតង=ត្រូវ, ក្រហម=ខុស)។`,
        step5Homework: `ឱ្យសិស្សធ្វើលំហាត់ក្នុងសៀវភៅសិស្សថ្នាក់ទី${g} ទំព័រ ${parsed.ssPage} ចូលក្នុងសៀវភៅសរសេរ និងអនុវត្តបន្ថែមនៅផ្ទះ។`,
        barA: 120,
        barB: 45,
        placeNum: 165,
      };
    }

    try {
      // Try calling server API
      const res = await fetch('/api/generate-lesson-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: q,
          grade: g,
          lessonTitle: mainLessonStr,
          subTopic: subTopicStr,
          duration: parsed.duration,
          school: plan.school,
          teacher: plan.teacher,
        }),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.success && result.data) {
          const aiData = result.data;
          newPlan = {
            ...newPlan,
            mainLesson: aiData.mainLesson || newPlan.mainLesson,
            subTopic: aiData.subTopic || newPlan.subTopic,
            expectedOutcome: aiData.expectedOutcome || newPlan.expectedOutcome,
            activityTitle: aiData.activityTitle || newPlan.activityTitle,
            standardLevel: aiData.standardLevel || newPlan.standardLevel,
            objKnowledge: aiData.objKnowledge || newPlan.objKnowledge,
            objSkill: aiData.objSkill || newPlan.objSkill,
            objAttitude: aiData.objAttitude || newPlan.objAttitude,
            matTeacher: aiData.matTeacher || newPlan.matTeacher,
            matStudent: aiData.matStudent || newPlan.matStudent,
            step2Review: aiData.step2Review || newPlan.step2Review,
            step3PairWork: aiData.step3PairWork || newPlan.step3PairWork,
            step3KeyRule: aiData.step3KeyRule || newPlan.step3KeyRule,
            step3GroupGame: aiData.step3GroupGame || newPlan.step3GroupGame,
            misconceptions: aiData.misconceptions || newPlan.misconceptions,
            step4Practice: aiData.step4Practice || newPlan.step4Practice,
            step5Homework: aiData.step5Homework || newPlan.step5Homework,
            barA: parseInt(aiData.barA, 10) || newPlan.barA,
            barB: parseInt(aiData.barB, 10) || newPlan.barB,
            placeNum: parseInt(aiData.placeNum, 10) || newPlan.placeNum,
          };
          showToast(`បានបង្កើតដោយ Gemini AI ស្របតាមសៀវភៅថ្នាក់ទី${g}!`, '✨');
        } else {
          showToast(`បានផ្គូផ្គង និងរៀបចំតាមសៀវភៅស្ដង់ដារថ្នាក់ទី${g}!`, '⚡');
        }
      } else {
        showToast(`បានផ្គូផ្គង និងរៀបចំតាមសៀវភៅស្ដង់ដារថ្នាក់ទី${g}!`, '⚡');
      }
    } catch {
      showToast(`បានផ្គូផ្គង និងរៀបចំតាមសៀវភៅស្ដង់ដារថ្នាក់ទី${g}!`, '⚡');
    } finally {
      setIsLoadingAi(false);
      setPlan(newPlan);
    }
  };

  // Export to Microsoft Word (.doc)
  const handleExportWord = () => {
    const sheetEl = document.getElementById('officialA4Sheet');
    const contentHtml = sheetEl ? sheetEl.innerHTML : '';

    const wordHtml = `
<html xmlns:o="urn:schemas-microsoft-com:office:office" 
      xmlns:w="urn:schemas-microsoft-com:office:word" 
      xmlns="http://www.w3.org/TR/REC-html40">
<head>
  <meta charset="utf-8">
  <title>${plan.mainLesson}</title>
  <style>
    body { font-family: "Battambang", "Khmer OS Siemreap", sans-serif; font-size: 11pt; line-height: 1.5; color: #111827; }
    .khmer-moul { font-family: "Moul", "Khmer OS Muol Light", serif; line-height: 1.8; }
    table { width: 100%; border-collapse: collapse; margin-top: 8pt; margin-bottom: 8pt; }
    th, td { border: 1pt solid #000000; padding: 6pt 8pt; vertical-align: top; font-size: 10pt; line-height: 1.5; }
    th { background-color: #eff6ff; font-weight: bold; text-align: center; color: #1e3a8a; }
    ul { margin: 0; padding-left: 18pt; }
    li { margin-bottom: 3pt; }
  </style>
</head>
<body>
  ${contentHtml}
</body>
</html>
`;

    const blob = new Blob(['\ufeff', wordHtml], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `កិច្ចតែងការគណិតវិទ្យា_ថ្នាក់ទី${plan.grade}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    showToast('បានទាញយកឯកសារ Word (.doc) ដោយជោគជ័យ!', '📥');
  };

  // Print
  const handlePrint = () => {
    setActiveTab('document');
    setTimeout(() => {
      window.print();
    }, 180);
  };

  // Copy text or HTML
  const handleCopyText = () => {
    const sheetEl = document.getElementById('officialA4Sheet');
    if (!sheetEl) return;
    const text = sheetEl.innerText || sheetEl.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
      showToast('បានចម្លងអត្ថបទកិច្ចតែងការរួចរាល់!', '📋');
    });
  };

  const handleCopyHtml = () => {
    const sheetEl = document.getElementById('officialA4Sheet');
    if (!sheetEl) return;
    const text = sheetEl.innerText || sheetEl.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
      showToast('បានចម្លងខ្លឹមសារ! អាចយកទៅ Paste ក្នុង Google Docs បានភ្លាមៗ។', '📋');
    });
  };

  // Save current plan to library
  const handleSaveCurrentPlan = () => {
    const now = new Date();
    const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
    const timeStr = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()} • ${pad(
      now.getHours()
    )}:${pad(now.getMinutes())}`;

    const newSavedItem: LessonPlan = {
      ...plan,
      id: `plan-${Date.now()}`,
      savedAt: timeStr,
    };

    const updated = [newSavedItem, ...savedPlans];
    persistSavedPlans(updated);
    showToast('បានរក្សាទុកកិច្ចតែងការក្នុងបណ្ណាល័យ!', '💾');
  };

  const handleLoadPlan = (loaded: LessonPlan) => {
    setPlan(JSON.parse(JSON.stringify(loaded)));
    setActiveTab('document');
    showToast(`បានផ្ទុកកិច្ចតែងការ៖ ${loaded.mainLesson}`, '📂');
  };

  const handleDeletePlan = (idx: number) => {
    const updated = savedPlans.filter((_, i) => i !== idx);
    persistSavedPlans(updated);
    showToast('បានលុបកិច្ចតែងការចេញពីបញ្ជី។', '🗑️');
  };

  const handleImportPlans = (imported: LessonPlan[]) => {
    const updated = [...imported, ...savedPlans];
    persistSavedPlans(updated);
    showToast(`បាននាំចូលកិច្ចតែងការចំនួន ${imported.length} ដោយជោគជ័យ!`, '📂');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-5 right-5 z-50 animate-fadeIn no-print">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl bg-slate-900 text-white text-sm font-medium border border-slate-700">
            <span className="text-emerald-400 font-bold text-base">{toast.icon}</span>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedPlans.length}
        onExportWord={handleExportWord}
        onPrint={handlePrint}
        hasServerAi={hasServerAi}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {activeTab === 'studio' && (
          <TabStudio
            plan={plan}
            setPlan={setPlan}
            onRunAi={handleRunAi}
            isLoadingAi={isLoadingAi}
            onSavePlan={handleSaveCurrentPlan}
            onGoToDocument={() => setActiveTab('document')}
            onGoToSlides={() => setActiveTab('slides')}
            onCopyText={handleCopyText}
          />
        )}

        {activeTab === 'document' && (
          <TabDocument
            plan={plan}
            onSavePlan={handleSaveCurrentPlan}
            onExportWord={handleExportWord}
            onPrint={handlePrint}
            onCopyHtml={handleCopyHtml}
          />
        )}

        {activeTab === 'slides' && (
          <TabSlides plan={plan} setPlan={setPlan} />
        )}

        {activeTab === 'library' && <TabLibrary />}

        {activeTab === 'saved' && (
          <TabSaved
            plan={plan}
            savedPlans={savedPlans}
            onLoadPlan={handleLoadPlan}
            onDeletePlan={handleDeletePlan}
            onSaveCurrentPlan={handleSaveCurrentPlan}
            onImportPlans={handleImportPlans}
          />
        )}
      </main>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-slate-200 py-3.5 px-4 text-center text-xs text-slate-500 no-print">
        <p>
          កម្មវិធី AI Agent បង្កើតកិច្ចតែងការបង្រៀនគណិតវិទ្យាថ្នាក់បឋមសិក្សា (ថ្នាក់ទី១-៦) • ស្របតាមស្ដង់ដារ MoEYS, STEPCam និង MCAS
        </p>
      </footer>
    </div>
  );
}
