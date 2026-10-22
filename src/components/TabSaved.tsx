import React, { useRef } from 'react';
import { LessonPlan } from '../types';
import {
  CheckCircle,
  AlertTriangle,
  FolderOpen,
  Trash2,
  Plus,
  Download,
  Upload,
} from 'lucide-react';

interface TabSavedProps {
  plan: LessonPlan;
  savedPlans: LessonPlan[];
  onLoadPlan: (loadedPlan: LessonPlan) => void;
  onDeletePlan: (index: number) => void;
  onSaveCurrentPlan: () => void;
  onImportPlans: (imported: LessonPlan[]) => void;
}

export const TabSaved: React.FC<TabSavedProps> = ({
  plan,
  savedPlans,
  onLoadPlan,
  onDeletePlan,
  onSaveCurrentPlan,
  onImportPlans,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 8-Point MCAS Compliance Checks
  const checks = [
    {
      label: '១. កំណត់ទីតាំងសាលាបឋមសិក្សាថ្លុកបង្កោ ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់',
      passed: plan.school.includes('ពោធិ៍សាត់'),
    },
    {
      label: '២. ចំណងជើង «មេរៀនទី...» ស្រង់ចេញពីមាតិកាសៀវភៅសិស្ស (សស. ទំព័រ...)',
      passed: plan.mainLesson.length > 5,
    },
    {
      label: '៣. ខ្លឹមសាររង និងសកម្មភាពទី... ស្រង់តាមសៀវភៅណែនាំគ្រូ (ស.គ្រូ ទំព័រ...)',
      passed: plan.subTopic.length > 5 && plan.activityTitle.length > 5,
    },
    {
      label: '៤. វត្ថុបំណងទាំង ៣ ផ្នែក (វិជ្ជាសម្បទា បំណិនសម្បទា ចរិយាសម្បទា)',
      passed:
        plan.objKnowledge.length > 5 &&
        plan.objSkill.length > 5 &&
        plan.objAttitude.length > 5,
    },
    {
      label: '៥. ការប្រើប្រាស់សម្ភាររូបី និងការងារដៃគូ/ក្រុមតាមសៀវភៅណែនាំគ្រូ',
      passed: plan.matTeacher.length > 5 && plan.step3PairWork.length > 5,
    },
    {
      label: '៦. ល្បែងសិក្សាគណិតវិទ្យា (ជំហានទី៣)',
      passed: plan.step3GroupGame.length > 5,
    },
    {
      label: '៧. ចំណុច «៣. កំហុស និងគំនិតភាន់ច្រឡំ» នៅចុងជំហានទី៣ តាមសៀវភៅស្ដង់ដារ MCAS',
      passed: plan.misconceptions.length > 10,
    },
    {
      label: '៨. បច្ចេកទេសវាយតម្លៃលើក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរ (ជំហានទី៤) + កាលបរិច្ឆេទខាងក្រោម',
      passed: plan.step4Practice.length > 5 && plan.solarDate.length > 5,
    },
  ];

  const passCount = checks.filter((c) => c.passed).length;

  const handleExportJson = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(savedPlans, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'កិច្ចតែងការគណិតវិទ្យា_បម្រុងទុក.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (Array.isArray(parsed)) {
          onImportPlans(parsed);
        }
      } catch (err) {
        console.error('Invalid JSON file', err);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Standard Compliance Checklist */}
      <div className="lg:col-span-5 bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
        <div className="flex items-center justify-between border-b pb-3 border-slate-100">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>បញ្ជីផ្ទៀងផ្ទាត់ស្ដង់ដារ (MCAS Audit)</span>
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              ប្រព័ន្ធត្រួតពិនិត្យភាពពេញលេញនៃកិច្ចតែងការបច្ចុប្បន្ន៖
            </p>
          </div>
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              passCount === checks.length
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-amber-100 text-amber-800'
            }`}
          >
            {passCount} / {checks.length} ស្ដង់ដារ
          </span>
        </div>

        <ul className="space-y-2.5 text-xs sm:text-sm">
          {checks.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-start gap-2.5 p-2.5 rounded-xl border transition ${
                item.passed
                  ? 'bg-emerald-50/70 border-emerald-200 text-emerald-950'
                  : 'bg-amber-50 border-amber-300 text-amber-950'
              }`}
            >
              <span className="font-bold text-sm">
                {item.passed ? (
                  <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5" />
                )}
              </span>
              <span className="font-medium leading-relaxed">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Saved Plans List */}
      <div className="lg:col-span-7 bg-white rounded-2xl shadow-sm border border-slate-200 p-5 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-3">
          <div>
            <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-blue-900" />
              <span>🗂️ បណ្ណាល័យកិច្ចតែងការដែលបានរក្សាទុក</span>
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              រក្សាទុកក្នុងកុំព្យូទ័រ/ទូរសព្ទរបស់លោកគ្រូ (Local Storage) សម្រាប់បើកប្រើឡើងវិញ។
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onSaveCurrentPlan}
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>រក្សាទុកបច្ចុប្បន្ន</span>
            </button>
            <button
              type="button"
              onClick={handleExportJson}
              className="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition flex items-center gap-1 cursor-pointer"
              title="ទាញយកឯកសារបម្រុងទុក JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span>ទាញយក JSON</span>
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="px-2.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold border border-slate-300 transition flex items-center gap-1 cursor-pointer"
              title="នាំចូលឯកសារ JSON"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>នាំចូល</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".json"
              className="hidden"
            />
          </div>
        </div>

        {savedPlans.length === 0 ? (
          <div className="p-8 text-center text-sm text-slate-500 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
            <p>មិនទាន់មានកិច្ចតែងការដែលបានរក្សាទុកនៅឡើយទេ។</p>
            <button
              type="button"
              onClick={onSaveCurrentPlan}
              className="px-3 py-1.5 rounded-lg bg-blue-900 text-white text-xs font-bold cursor-pointer"
            >
              + រក្សាទុកកិច្ចតែងការនេះឥឡូវ
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {savedPlans.map((sp, idx) => (
              <div
                key={sp.id || idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-xs"
              >
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-blue-900 text-white text-xs font-bold">
                      ថ្នាក់ទី{sp.grade}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-xs font-semibold">
                      {sp.standardLevel}
                    </span>
                    {sp.savedAt && (
                      <span className="text-xs text-slate-500">🕒 {sp.savedAt}</span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">{sp.mainLesson}</h3>
                  <p className="text-xs text-slate-600">{sp.subTopic}</p>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => onLoadPlan(sp)}
                    className="px-3.5 py-1.5 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                  >
                    <FolderOpen className="w-3.5 h-3.5" />
                    <span>បើកប្រើ</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onDeletePlan(idx)}
                    className="px-3 py-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-bold transition flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>លុប</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
