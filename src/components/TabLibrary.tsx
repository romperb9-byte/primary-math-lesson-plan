import React from 'react';
import { GRADE_BOOKS_META } from '../data/curriculumData';
import { ExternalLink, BookOpen, Calendar, Folder, Star, Bookmark } from 'lucide-react';

export const TabLibrary: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-900" />
              <span>📚 បណ្ណាល័យឌីជីថលផ្លូវការនៃកម្មវិធីកញ្ចប់គណិតវិទ្យា (ថ្នាក់ទី១ ដល់ ទី៦)</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              តំណភ្ជាប់ផ្លូវការទៅកាន់កាលវិភាគកម្មវិធីសិក្សា សៀវភៅសិស្ស សៀវភៅណែនាំគ្រូ សៀវភៅស្ដង់ដារគណិតវិទ្យា (MCAS/STEPCam) និងសៀវភៅជំនួយ/លំហាត់ (MoEYS/UNESCO)។
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5"
            >
              <Calendar className="w-4 h-4" />
              <span>📅 កាលវិភាគកម្មវិធីសិក្សា (ថ្នាក់ទី១-៦) ↗</span>
            </a>
            <a
              href="https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition flex items-center gap-1.5"
            >
              <Folder className="w-4 h-4" />
              <span>📁 ថតឯកសារកញ្ចប់គណិតវិទ្យា ២០២៦ ↗</span>
            </a>
          </div>
        </div>

        {/* 3 Columns for G1, G2, G3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {/* Grade 1 */}
          <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-blue-900 text-white text-xs font-bold">
                ថ្នាក់ទី១ (Grade 1)
              </span>
              <span className="text-xs text-blue-800 font-semibold">៨ ឯកសារផ្លូវការ</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://online.fliphtml5.com/aavfq/eqes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-blue-100 border border-blue-100 font-medium text-blue-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-blue-800" />
                    <span>សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី១ (FlipHTML5)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1H7b0K5rUcyOkN58E3GSENRymo_BFMfex/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-blue-100 border border-blue-100 font-medium text-blue-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="w-4 h-4 text-indigo-700" />
                    <span>សៀវភៅណែនាំគ្រូថ្នាក់ទី១ (MoEYS)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1U0yiSKnpFpGRZ7u8GO2dhk0HDnFVRvON/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 font-bold text-amber-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-600 fill-amber-400" />
                    <span>សៀវភៅស្ដង់ដាគណិតវិទ្យាថ្នាក់ទី១ (MCAS)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/16erO5AYkq0Vu4TF_wGK7F46CCSj1nlTh/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-blue-100 border border-blue-100 font-medium text-blue-950 transition"
                >
                  <span>📝 សៀវភៅលំហាត់គណិតវិទ្យាថ្នាក់ទី១ (Final)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1k5kEGmivsCztxbY2J42EUc-nLAh_Q09u/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-blue-100 border border-blue-100 font-medium text-blue-950 transition"
                >
                  <span>📗 CLM Maths G1 - ភាគ១ (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1VvxMX_LqENPU7oUpqvPiDrfTofQRGerL/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-blue-100 border border-blue-100 font-medium text-blue-950 transition"
                >
                  <span>📗 CLM Maths G1 - ភាគ២ (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Grade 2 */}
          <div className="rounded-xl border border-indigo-200 bg-indigo-50/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-indigo-900 text-white text-xs font-bold">
                ថ្នាក់ទី២ (Grade 2)
              </span>
              <span className="text-xs text-indigo-800 font-semibold">៨ ឯកសារផ្លូវការ</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://online.fliphtml5.com/aavfq/zqks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-indigo-100 border border-indigo-100 font-medium text-indigo-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-indigo-800" />
                    <span>សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី២ (FlipHTML5)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1lUXeCALQIA5bNMcIHy83VIOFY6VjSVT1/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-indigo-100 border border-indigo-100 font-medium text-indigo-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="w-4 h-4 text-indigo-700" />
                    <span>សៀវភៅណែនាំគ្រូថ្នាក់ទី២ (MoEYS)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1ew3FBanRVMImtUd_9r9uuznCuWZ6mXGF/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 font-bold text-amber-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-600 fill-amber-400" />
                    <span>សៀវភៅស្ដង់ដាគណិតវិទ្យាថ្នាក់ទី២ (MCAS)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/19BwBqi6w6EJfm3HCqV6NAPn_Q9aHDDLk/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-indigo-100 border border-indigo-100 font-medium text-indigo-950 transition"
                >
                  <span>📗 Book 1 Math Grade 2 (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1GW0Gl2XBlsvTjKqqi5M6ib7thZqFZxya/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-indigo-100 border border-indigo-100 font-medium text-indigo-950 transition"
                >
                  <span>📗 Book 2 Math Grade 2 (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1qb7cXJtGvPbyL2n_KX6df_HMy1VUnykF/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-indigo-100 border border-indigo-100 font-medium text-indigo-950 transition"
                >
                  <span>📗 Book 3 Math Grade 2 (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-600" />
                </a>
              </li>
            </ul>
          </div>

          {/* Grade 3 */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-lg bg-emerald-900 text-white text-xs font-bold">
                ថ្នាក់ទី៣ (Grade 3)
              </span>
              <span className="text-xs text-emerald-800 font-semibold">៨ ឯកសារផ្លូវការ</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="https://online.fliphtml5.com/vichit/wdsr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-100 border border-emerald-100 font-medium text-emerald-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-emerald-800" />
                    <span>សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី៣ (FlipHTML5)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1onERsTwErQWm3l7KerLEsf-2ANmmBMN7/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-100 border border-emerald-100 font-medium text-emerald-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Bookmark className="w-4 h-4 text-emerald-700" />
                    <span>សៀវភៅណែនាំគ្រូថ្នាក់ទី៣ (MoEYS)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1Ycw9GFtx4pSB0yq6u8MMopPCjlM8YSHb/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-amber-50 hover:bg-amber-100 border border-amber-300 font-bold text-amber-950 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-amber-600 fill-amber-400" />
                    <span>សៀវភៅជំនួយ និងស្ដង់ដាគណិតវិទ្យា (MCAS)</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-800" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1_uzu37TMQts0RmPM52mrW9L3YZp8dB3H/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-100 border border-emerald-100 font-medium text-emerald-950 transition"
                >
                  <span>📗 CLM G3 Workbook 1 (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1o5cesRwRZAxpGjXgY5OnR_Lz6yS6ezd2/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-100 border border-emerald-100 font-medium text-emerald-950 transition"
                >
                  <span>📗 CLM G3 Workbook 2 (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1gwq0kVFUX1hTcl-qYiybcpMeAtjX1Ukc/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-lg bg-white hover:bg-emerald-100 border border-emerald-100 font-medium text-emerald-950 transition"
                >
                  <span>📗 CLM G3 Workbook 3 (UNESCO)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Grades 4, 5, 6 Summary Banner */}
        <div className="mt-6 p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              📖 ឯកសារគណិតវិទ្យាថ្នាក់ទី៤, ថ្នាក់ទី៥, និងថ្នាក់ទី៦
            </h3>
            <p className="text-xs text-slate-600 mt-0.5">
              សៀវភៅសិស្ស និងសៀវភៅគ្រូសម្រាប់កម្រិតថ្នាក់ទី៤ ដល់ ទី៦ ត្រូវបានរួមបញ្ចូលក្នុងកាលវិភាគ និងថតឯកសារ Drive ផ្លូវការ។
            </p>
          </div>
          <a
            href="https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold whitespace-nowrap shadow-sm"
          >
            មើលកាលវិភាគថ្នាក់ទី៤-៦ ↗
          </a>
        </div>
      </div>
    </div>
  );
};
