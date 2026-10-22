import React, { useState, useRef } from 'react';
import { LessonPlan } from '../types';
import { GRADE_BOOKS_META } from '../data/curriculumData';
import {
  Download,
  Printer,
  Copy,
  Save,
  Edit3,
  Check,
  ExternalLink,
} from 'lucide-react';

interface TabDocumentProps {
  plan: LessonPlan;
  onSavePlan: () => void;
  onExportWord: () => void;
  onPrint: () => void;
  onCopyHtml: () => void;
}

export const TabDocument: React.FC<TabDocumentProps> = ({
  plan,
  onSavePlan,
  onExportWord,
  onPrint,
  onCopyHtml,
}) => {
  const [isEditable, setIsEditable] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);
  const booksMeta = GRADE_BOOKS_META[plan.grade] || GRADE_BOOKS_META['៣'];

  const formatMultiline = (text: string) => {
    return text.split('\n').map((line, idx) => (
      <React.Fragment key={idx}>
        {line}
        {idx < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="space-y-4">
      {/* Document Action Toolbar */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 flex flex-wrap items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-3">
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <span>📄 ទម្រង់កិច្ចតែងការបង្រៀនផ្លូវការ (តារាង ៣ ជួរឈរ)</span>
          </h2>
          <label className="inline-flex items-center gap-2 cursor-pointer select-none bg-amber-50 border border-amber-300 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-900 hover:bg-amber-100 transition">
            <input
              type="checkbox"
              checked={isEditable}
              onChange={(e) => setIsEditable(e.target.checked)}
              className="rounded text-blue-900 focus:ring-blue-600"
            />
            <Edit3 className="w-3.5 h-3.5 text-amber-800" />
            <span>កែសម្រួលផ្ទាល់លើតារាង (Live Edit)</span>
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onSavePlan}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <Save className="w-4 h-4" />
            <span>រក្សាទុក</span>
          </button>
          <button
            type="button"
            onClick={onCopyHtml}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-semibold transition flex items-center gap-1.5 cursor-pointer border border-slate-300"
          >
            <Copy className="w-4 h-4" />
            <span>ចម្លងសម្រាប់ Google Docs</span>
          </button>
          <button
            type="button"
            onClick={onExportWord}
            className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>ទាញយក Word (.doc)</span>
          </button>
          <button
            type="button"
            onClick={onPrint}
            className="px-3.5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-sm transition flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>បោះពុម្ព / PDF</span>
          </button>
        </div>
      </div>

      {/* Official A4 Lesson Plan Sheet */}
      <div
        ref={sheetRef}
        id="officialA4Sheet"
        className={`bg-white rounded-2xl shadow-md border border-slate-300 p-6 sm:p-10 max-w-5xl mx-auto khmer-doc print-only-sheet ${
          isEditable ? 'editable-active' : ''
        }`}
      >
        <div className="space-y-4">
          {/* Kingdom and Motto Header */}
          <div className="text-center space-y-1 pb-2 border-b-2 border-slate-800">
            <p className="khmer-moul text-sm sm:text-base text-slate-900">ព្រះរាជាណាចក្រកម្ពុជា</p>
            <p className="khmer-moul text-xs sm:text-sm text-slate-800">ជាតិ សាសនា ព្រះមហាក្សត្រ</p>
            <p className="khmer-moul text-base sm:text-lg text-blue-950 pt-2">កិច្ចតែងការបង្រៀន</p>
          </div>

          {/* Administrative Metadata Block */}
          <div
            className="bg-slate-50/80 border border-slate-300 rounded-lg p-3.5 text-xs sm:text-sm space-y-1"
            contentEditable={isEditable}
            suppressContentEditableWarning
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <p>
                <strong>ថ្នាក់ទី៖</strong> {plan.grade}
              </p>
              <p>
                <strong>មុខវិជ្ជា៖</strong> គណិតវិទ្យា (កម្មវិធីកញ្ចប់គណិតវិទ្យា)
              </p>
              <p className="sm:col-span-2">
                <strong>សាលាបឋមសិក្សា៖</strong> {plan.school}
              </p>
              <p>
                <strong>បង្រៀនដោយ៖</strong> {plan.teacher}
              </p>
              <p>
                <strong>រយៈពេល៖</strong> {plan.duration}
              </p>
            </div>
            <div className="pt-1.5 border-t border-slate-200 space-y-1">
              <p>
                <strong>{plan.mainLesson}</strong>
              </p>
              <p>
                <strong>{plan.subTopic}</strong>
              </p>
              <p>
                <strong>{plan.expectedOutcome}</strong>
              </p>
              <p>
                <strong>{plan.activityTitle}</strong>{' '}
                <span className="inline-block px-2 py-0.5 text-xs rounded bg-blue-100 text-blue-900 font-bold">
                  ({plan.standardLevel})
                </span>
              </p>
            </div>
            <div className="pt-1.5 border-t border-slate-200 text-[11px] sm:text-xs text-slate-700 no-print flex flex-wrap gap-2">
              <strong>ឯកសារយោងផ្លូវការ៖</strong>
              <a
                href={booksMeta.studentBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline font-semibold inline-flex items-center gap-0.5"
              >
                {booksMeta.studentBookTitle} <ExternalLink className="w-2.5 h-2.5" />
              </a>
              •
              <a
                href={booksMeta.teacherGuideUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline font-semibold inline-flex items-center gap-0.5"
              >
                {booksMeta.teacherGuideTitle} <ExternalLink className="w-2.5 h-2.5" />
              </a>
              •
              <a
                href={booksMeta.standardBookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline font-semibold inline-flex items-center gap-0.5"
              >
                {booksMeta.standardBookTitle} <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* I. Objectives (វត្ថុបំណង) */}
          <div
            className="space-y-1 text-xs sm:text-sm"
            contentEditable={isEditable}
            suppressContentEditableWarning
          >
            <h3 className="khmer-moul text-xs sm:text-sm text-blue-950">I. វត្ថុបំណង</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>វិជ្ជាសម្បទា៖</strong> {plan.objKnowledge}
              </li>
              <li>
                <strong>បំណិនសម្បទា៖</strong> {plan.objSkill}
              </li>
              <li>
                <strong>ចរិយាសម្បទា៖</strong> {plan.objAttitude}
              </li>
            </ul>
          </div>

          {/* II. Materials (សម្ភារៈឧបទេស) */}
          <div
            className="space-y-1 text-xs sm:text-sm"
            contentEditable={isEditable}
            suppressContentEditableWarning
          >
            <h3 className="khmer-moul text-xs sm:text-sm text-blue-950">II. សម្ភារៈឧបទេស</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>សម្រាប់គ្រូ៖</strong> {plan.matTeacher}
              </li>
              <li>
                <strong>សម្រាប់សិស្ស៖</strong> {plan.matStudent}
              </li>
            </ul>
          </div>

          {/* III. Teaching Process (ដំណើរការបង្រៀន - 3 Column Table) */}
          <div className="space-y-2">
            <h3 className="khmer-moul text-xs sm:text-sm text-blue-950">III. ដំណើរការបង្រៀន</h3>
            <div className="overflow-x-auto">
              <table className="lesson-table">
                <thead>
                  <tr>
                    <th style={{ width: '28%' }}>សកម្មភាពគ្រូ</th>
                    <th style={{ width: '46%' }}>ខ្លឹមសារមេរៀន</th>
                    <th style={{ width: '26%' }}>សកម្មភាពសិស្ស</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Step 1 */}
                  <tr>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - ត្រួតពិនិត្យអវត្តមានសិស្សដោយសួរប្រធាន ឬអនុប្រធានថ្នាក់៖
                      តើសិស្សអវត្តមានប៉ុន្មាននាក់? ស្រីប៉ុន្មាន?
                      <br />
                      - ពិនិត្យអនាម័យថ្នាក់រៀន និងអនាម័យខ្លួនប្រាណសិស្សម្នាក់ៗ
                      <br />
                      - ការពង្រឹងវិន័យ៖ ពេលកំពុងរៀនសូត្រកូនៗត្រូវស្ដាប់គ្រូ ដាក់ដៃលើតុ អង្គុយឱ្យត្រង់ខ្លួន
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      <strong>ជំហានទី១ (៣នាទី)៖ រដ្ឋបាលថ្នាក់</strong>
                      <br />- វត្តមានសិស្ស
                      <br />- ពិនិត្យអនាម័យ
                      <br />- ការពង្រឹងវិន័យសិស្ស
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - ប្រធានថ្នាក់រាយការណ៍ចំនួនវត្តមាន និងអវត្តមាន
                      <br />- សិស្សដាក់ដៃលើតុ អង្គុយត្រង់ខ្លួន
                      <br />- បាទ/ចាស លោកគ្រូ
                    </td>
                  </tr>

                  {/* Step 2 */}
                  <tr>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - ឱ្យសិស្សយកកិច្ចការផ្ទះដាក់លើតុគ្រូ
                      <br />
                      - សួរសំណួររំឭកមេរៀនចាស់ និងឱ្យសិស្សឆ្លើយលើក្ដារឆ្នួន
                      <br />
                      - គ្រូកែសម្រួល កោតសរសើរ និងចោទសួរសំណួរភ្ជាប់ទំនាក់ទំនងទៅមេរៀនថ្មី
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      <strong>ជំហានទី២ (៧នាទី)៖</strong>
                      <br />- កែកិច្ចការចាស់
                      <br />- រំឭកមេរៀនចាស់ និងទំនាក់ទំនងមេរៀនថ្មី៖
                      <br />
                      {formatMultiline(plan.step2Review)}
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - សិស្សយកកិច្ចការផ្ទះដាក់លើតុគ្រូ
                      <br />- គណនា និងឆ្លើយសំណួររំឭកមេរៀនចាស់លើក្ដារឆ្នួន
                      <br />- ចូលរួមឆ្លើយសំណួរភ្ជាប់មេរៀនថ្មីដោយផុសផុល
                    </td>
                  </tr>

                  {/* Step 3 */}
                  <tr>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - សរសេរចំណងជើងដាក់លើក្ដារខៀន ហើយនាំសិស្សអានព្រមគ្នា
                      <br />
                      - បង្ហាញសម្ភាររូបីជាក់ស្តែង (បន្ទាត់ម៉ែត្រ បាច់បំពង់បឺត បន្ទះតម្លៃខ្ទង់ ដ្យាក្រាមរបារ ឬរូបភាព)
                      <br />
                      - ដាក់សំណួរគន្លឹះជំរុញការគិត និងឱ្យសិស្សចាប់ដៃគូពិភាក្សា
                      <br />
                      - ដើរពិនិត្យ សង្កេត និងសម្របសម្រួលការពិភាក្សារបស់ដៃគូសិស្ស
                      <br />
                      - ឱ្យសិស្សស្ម័គ្រចិត្តឡើងបង្ហាញ និងកត់ត្រាលទ្ធផលលើក្ដារខៀន
                      <br />
                      - ឱ្យសិស្សចូលក្រុមពិភាក្សា លេងល្បែងសិក្សាគណិតវិទ្យា និងដោះស្រាយលំហាត់
                      <br />
                      - ឱ្យតំណាងក្រុមរាយការណ៍ និងគ្រូនាំសិស្សសំយោគខ្លឹមសាររួម
                      <br />
                      - <strong>ពន្យល់ណែនាំ និងកត់សម្គាល់បង្ការកំហុស និងគំនិតភាន់ច្រឡំរបស់សិស្ស</strong>
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      <strong>ជំហានទី៣ (២០នាទី)៖ មេរៀនថ្មី</strong>
                      <br />
                      <span className="font-bold text-blue-950">{plan.mainLesson}</span>
                      <br />
                      <span className="font-semibold text-slate-800">{plan.subTopic}</span>
                      <br />
                      <span className="text-xs font-semibold text-indigo-900">
                        ({plan.activityTitle})
                      </span>
                      <br />
                      <br />
                      <strong>១. ការងារដៃគូ និងការប្រើប្រាស់សម្ភាររូបី៖</strong>
                      <br />
                      {formatMultiline(plan.step3PairWork)}
                      <br />
                      <br />
                      <strong>២. ខ្លឹមសារគន្លឹះ / វិធានគណិតវិទ្យា / តារាងសំយោគ / របារ Bar Model៖</strong>
                      <br />
                      {formatMultiline(plan.step3KeyRule)}
                      <br />
                      <br />
                      <strong>ការងារក្រុម និងល្បែងសិក្សាគណិតវិទ្យា៖</strong>
                      <br />
                      {formatMultiline(plan.step3GroupGame)}
                      <br />
                      <br />
                      <div className="p-2.5 rounded bg-rose-50 border border-rose-300 text-rose-950">
                        <strong>
                          ៣. កំហុស និងគំនិតភាន់ច្រឡំ (ដកស្រង់ពីសៀវភៅស្ដង់ដារគណិតវិទ្យា ស្របតាម
                          {plan.standardLevel})៖
                        </strong>
                        <br />
                        {formatMultiline(plan.misconceptions)}
                      </div>
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - អានចំណងជើងមេរៀនព្រមគ្នា
                      <br />- សង្កេតមើលសម្ភាររូបី និងឆ្លើយសំណួររបស់គ្រូ
                      <br />- ចាប់ដៃគូពិភាក្សា និងអនុវត្តជាមួយសម្ភាររូបី
                      <br />- សិស្សស្ម័គ្រចិត្តឡើងបង្ហាញលើក្ដារខៀន
                      <br />- ពិភាក្សាជាក្រុម ចូលរួមលេងល្បែងសិក្សា និងរាយការណ៍លទ្ធផល
                      <br />- ចូលរួមសំយោគ និងកត់ត្រាខ្លឹមសារគន្លឹះចូលសៀវភៅ
                      <br />- <strong>ស្ដាប់ការណែនាំ ចងចាំ និងចៀសវាងកំហុស និងគំនិតភាន់ច្រឡំទាំងនោះ</strong>
                    </td>
                  </tr>

                  {/* Step 4 */}
                  <tr>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - គ្រូដាក់សំណួរ ឬលំហាត់ពង្រឹងចំណេះដឹងឱ្យសិស្សអនុវត្តលើក្ដារឆ្នួន និងប្រើបច្ចេកទេសវាយតម្លៃក្នុងដំណើរការសិក្សា (ប្រើបណ្ណសញ្ញាចរាចរពណ៌បៃតង និងពណ៌ក្រហម)
                      <br />
                      - ពិនិត្យ ផ្ដល់ព័ត៌មានត្រឡប់ភ្លាមៗ និងជួយសិស្សដែលជួបការលំបាក
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      <strong>ជំហានទី៤ (៧នាទី)៖ ពង្រឹងចំណេះដឹង</strong>
                      <br />- ការអនុវត្តលើក្ដារឆ្នួន / សំណួរពង្រឹង៖
                      <br />
                      {formatMultiline(plan.step4Practice)}
                      <br />- បច្ចេកទេសវាយតម្លៃ (បណ្ណពណ៌បៃតង = យល់ស្រប/ត្រូវ, បណ្ណពណ៌ក្រហម = មិនយល់ស្រប/ខុស)
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - សិស្សអនុវត្តគណនា និងឆ្លើយលើក្ដារឆ្នួនរៀងៗខ្លួន
                      <br />- លើកបង្ហាញក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរពណ៌ព្រមគ្នា
                      <br />- ផ្ទៀងផ្ទាត់ និងកែតម្រូវចម្លើយតាមការណែនាំរបស់គ្រូ
                    </td>
                  </tr>

                  {/* Step 5 */}
                  <tr>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - ដាក់កិច្ចការផ្ទះជាក់ស្តែងឱ្យសិស្សធ្វើនៅផ្ទះ (ស្រង់ពីសៀវភៅសិស្ស)
                      <br />
                      - បណ្ដាំផ្ញើសិស្សឱ្យមើលមេរៀនបន្ថែម ថែរក្សាសុខភាព អនាម័យ និងការអប់រំចរិយាសម្បទា (ពេលទៅផ្ទះវិញសូមដើរប្រកាន់ស្ដាំ ដើម្បីចៀសវាងគ្រោះថ្នាក់ចរាចរណ៍)
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      <strong>ជំហានទី៥ (៣នាទី)៖ កិច្ចការផ្ទះ និងបណ្ដាំផ្ញើ</strong>
                      <br />- កិច្ចការផ្ទះ៖ {formatMultiline(plan.step5Homework)}
                      <br />- បណ្ដាំផ្ញើ និងការអប់រំចរិយាសម្បទា/សុវត្ថិភាពតាមដងផ្លូវ
                    </td>
                    <td contentEditable={isEditable} suppressContentEditableWarning>
                      - កត់ត្រាកិច្ចការផ្ទះចូលក្នុងសៀវភៅសរសេរ
                      <br />- ស្ដាប់បណ្ដាំផ្ញើ និងការអប់រំដោយយកចិត្តទុកដាក់
                      <br />- រៀបចំសម្ភារទុកដាក់ឱ្យមានរបៀបរៀបរយ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer & Official Signatures */}
          <div
            className="pt-4 text-xs sm:text-sm space-y-3"
            contentEditable={isEditable}
            suppressContentEditableWarning
          >
            <div className="text-right space-y-0.5">
              <p>{plan.lunarDate}</p>
              <p>{plan.solarDate}</p>
            </div>
            <div className="grid grid-cols-2 text-center pt-2">
              <div className="space-y-12">
                <div>
                  <p className="font-bold">បានឃើញ និងឯកភាព</p>
                  <p className="khmer-moul text-xs">នាយកសាលា</p>
                </div>
                <p className="text-slate-400">..................................................</p>
              </div>
              <div className="space-y-12">
                <div>
                  <p className="font-bold">គ្រូបន្ទុកថ្នាក់ទី{plan.grade}</p>
                </div>
                <p className="font-bold text-slate-900">{plan.teacher}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
