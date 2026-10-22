import { GradeBookMeta, LessonPlan, TocEntry } from '../types';

export const GRADE_BOOKS_META: Record<string, GradeBookMeta> = {
  '១': {
    studentBookTitle: 'សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី១',
    studentBookUrl: 'https://online.fliphtml5.com/aavfq/eqes/',
    teacherGuideTitle: 'សៀវភៅណែនាំគ្រូគណិតវិទ្យាថ្នាក់ទី១',
    teacherGuideUrl: 'https://drive.google.com/file/d/1H7b0K5rUcyOkN58E3GSENRymo_BFMfex/view?usp=drivesdk',
    standardBookTitle: 'សៀវភៅស្ដង់ដាគណិតវិទ្យាថ្នាក់ទី១ (MCAS/STEPCam)',
    standardBookUrl: 'https://drive.google.com/file/d/1U0yiSKnpFpGRZ7u8GO2dhk0HDnFVRvON/view?usp=drive_link',
    workbookTitle: 'សៀវភៅលំហាត់ និងជំនួយគណិតវិទ្យាថ្នាក់ទី១ (CLM MoEYS/UNESCO)',
    workbookUrl: 'https://drive.google.com/file/d/16erO5AYkq0Vu4TF_wGK7F46CCSj1nlTh/view?usp=drivesdk',
  },
  '២': {
    studentBookTitle: 'សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី២',
    studentBookUrl: 'https://online.fliphtml5.com/aavfq/zqks/',
    teacherGuideTitle: 'សៀវភៅណែនាំគ្រូគណិតវិទ្យាថ្នាក់ទី២',
    teacherGuideUrl: 'https://drive.google.com/file/d/1lUXeCALQIA5bNMcIHy83VIOFY6VjSVT1/view?usp=drivesdk',
    standardBookTitle: 'សៀវភៅស្ដង់ដាគណិតវិទ្យាថ្នាក់ទី២ (MCAS/STEPCam)',
    standardBookUrl: 'https://drive.google.com/file/d/1ew3FBanRVMImtUd_9r9uuznCuWZ6mXGF/view?usp=drive_link',
    workbookTitle: 'សៀវភៅជំនួយគណិតវិទ្យាថ្នាក់ទី២ (Book 1–4 Math G2)',
    workbookUrl: 'https://drive.google.com/file/d/19BwBqi6w6EJfm3HCqV6NAPn_Q9aHDDLk/view?usp=drivesdk',
  },
  '៣': {
    studentBookTitle: 'សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី៣',
    studentBookUrl: 'https://online.fliphtml5.com/vichit/wdsr/',
    teacherGuideTitle: 'សៀវភៅណែនាំគ្រូគណិតវិទ្យាថ្នាក់ទី៣',
    teacherGuideUrl: 'https://drive.google.com/file/d/1onERsTwErQWm3l7KerLEsf-2ANmmBMN7/view?usp=drivesdk',
    standardBookTitle: 'សៀវភៅជំនួយ និងស្ដង់ដារគណិតវិទ្យាថ្នាក់ទី៣ (MCAS/CLM)',
    standardBookUrl: 'https://drive.google.com/file/d/1Ycw9GFtx4pSB0yq6u8MMopPCjlM8YSHb/view?usp=drivesdk',
    workbookTitle: 'សៀវភៅលំហាត់កញ្ចប់គណិតវិទ្យាថ្នាក់ទី៣ (CLM G3 Workbook 1–4)',
    workbookUrl: 'https://drive.google.com/file/d/1_uzu37TMQts0RmPM52mrW9L3YZp8dB3H/view?usp=drivesdk',
  },
  '៤': {
    studentBookTitle: 'សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី៤ (MoEYS)',
    studentBookUrl: 'https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit',
    teacherGuideTitle: 'សៀវភៅណែនាំគ្រូគណិតវិទ្យាថ្នាក់ទី៤',
    teacherGuideUrl: 'https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH',
    standardBookTitle: 'កម្មវិធីសិក្សា និងសៀវភៅគោលគណិតវិទ្យាថ្នាក់ទី៤',
    standardBookUrl: 'https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit',
    workbookTitle: 'សៀវភៅជំនួយ និងលំហាត់គណិតវិទ្យាថ្នាក់ទី៤',
    workbookUrl: 'https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH',
  },
  '៥': {
    studentBookTitle: 'សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី៥ (MoEYS)',
    studentBookUrl: 'https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit',
    teacherGuideTitle: 'សៀវភៅណែនាំគ្រូគណិតវិទ្យាថ្នាក់ទី៥',
    teacherGuideUrl: 'https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH',
    standardBookTitle: 'កម្មវិធីសិក្សា និងសៀវភៅគោលគណិតវិទ្យាថ្នាក់ទី៥',
    standardBookUrl: 'https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit',
    workbookTitle: 'សៀវភៅជំនួយ និងលំហាត់គណិតវិទ្យាថ្នាក់ទី៥',
    workbookUrl: 'https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH',
  },
  '៦': {
    studentBookTitle: 'សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី៦ (MoEYS)',
    studentBookUrl: 'https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit',
    teacherGuideTitle: 'សៀវភៅណែនាំគ្រូគណិតវិទ្យាថ្នាក់ទី៦',
    teacherGuideUrl: 'https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH',
    standardBookTitle: 'កម្មវិធីសិក្សា និងសៀវភៅគោលគណិតវិទ្យាថ្នាក់ទី៦',
    standardBookUrl: 'https://docs.google.com/spreadsheets/d/1YuNw_QbI7ntaHIWZBinAxCKuZGPf_5WZ/edit',
    workbookTitle: 'សៀវភៅជំនួយ និងលំហាត់គណិតវិទ្យាថ្នាក់ទី៦',
    workbookUrl: 'https://drive.google.com/drive/folders/1UAeH9A6tV_mY76JIPc9ScyEblEdvbaPH',
  },
};

export const OFFICIAL_TOC_DB: TocEntry[] = [
  // Grade 1 (ថ្នាក់ទី១ - ១៩ មេរៀន)
  { grade: '១', lesson: 1, title: 'ទំហំ', pStart: 1, pEnd: 2 },
  { grade: '១', lesson: 2, title: 'ទីតាំង', pStart: 3, pEnd: 5 },
  { grade: '១', lesson: 3, title: 'ចំនួន ០ ដល់ ១០', pStart: 6, pEnd: 9 },
  { grade: '១', lesson: 4, title: 'ចំនួន ១ ដល់ ១០', pStart: 10, pEnd: 15 },
  { grade: '១', lesson: 5, title: 'ការប្រៀបធៀបចំនួន', pStart: 16, pEnd: 21 },
  { grade: '១', lesson: 6, title: 'វិធីបូក និងវិធីដក', pStart: 22, pEnd: 26 },
  { grade: '១', lesson: 7, title: 'វិធីបូក និងវិធីដកចំនួនដែលមានលេខ ១ខ្ទង់', pStart: 27, pEnd: 45 },
  { grade: '១', lesson: 8, title: 'ចំណែក', pStart: 46, pEnd: 47 },
  { grade: '១', lesson: 9, title: 'ធរណីមាត្រ', pStart: 48, pEnd: 52 },
  { grade: '១', lesson: 10, title: 'ចំនួន ១០ ដល់ ២០', pStart: 53, pEnd: 55 },
  { grade: '១', lesson: 11, title: 'វិធីដក វិធីបូកចំនួនដល់ ២០', pStart: 56, pEnd: 63 },
  { grade: '១', lesson: 12, title: 'ប្រវែង', pStart: 64, pEnd: 67 },
  { grade: '១', lesson: 13, title: 'ទម្ងន់', pStart: 67, pEnd: 69 },
  { grade: '១', lesson: 14, title: 'ចំណុះ', pStart: 70, pEnd: 72 },
  { grade: '១', lesson: 15, title: 'ពេលវេលា', pStart: 73, pEnd: 77 },
  { grade: '១', lesson: 16, title: 'ក្រាបរូបភាព', pStart: 78, pEnd: 80 },
  { grade: '១', lesson: 17, title: 'ចំនួន និងតម្លៃលេខតាមខ្ទង់', pStart: 81, pEnd: 88 },
  { grade: '១', lesson: 18, title: 'រូបិយវត្ថុ', pStart: 89, pEnd: 90 },
  { grade: '១', lesson: 19, title: 'លំនាំគំរូ', pStart: 91, pEnd: 92 },

  // Grade 2 (ថ្នាក់ទី២ - ១៧ មេរៀន)
  { grade: '២', lesson: 1, title: 'ចំនួនដល់ ១ ០០០', pStart: 1, pEnd: 12 },
  { grade: '២', lesson: 2, title: 'ការប្រៀបធៀបចំនួន', pStart: 13, pEnd: 18 },
  { grade: '២', lesson: 3, title: 'វិធីបូកចំនួនមានលេខ ២ខ្ទង់', pStart: 19, pEnd: 26 },
  { grade: '២', lesson: 4, title: 'វិធីដកចំនួនមានលេខ ២ខ្ទង់', pStart: 27, pEnd: 34 },
  { grade: '២', lesson: 5, title: 'វិធីគុណ', pStart: 35, pEnd: 44 },
  { grade: '២', lesson: 6, title: 'ប្រភាគ', pStart: 45, pEnd: 48 },
  { grade: '២', lesson: 7, title: 'វិធីចែក', pStart: 49, pEnd: 56 },
  { grade: '២', lesson: 8, title: 'ប្រវែង', pStart: 57, pEnd: 60 },
  { grade: '២', lesson: 9, title: 'ទម្ងន់', pStart: 61, pEnd: 64 },
  { grade: '២', lesson: 10, title: 'ចំណុះ', pStart: 65, pEnd: 68 },
  { grade: '២', lesson: 11, title: 'វិធីបូកចំនួនមានលេខ ៣ខ្ទង់', pStart: 69, pEnd: 76 },
  { grade: '២', lesson: 12, title: 'វិធីដកចំនួនមានលេខ ៣ខ្ទង់នឹង ២ខ្ទង់', pStart: 77, pEnd: 84 },
  { grade: '២', lesson: 13, title: 'រូបិយវត្ថុ', pStart: 85, pEnd: 88 },
  { grade: '២', lesson: 14, title: 'ធរណីមាត្រ', pStart: 89, pEnd: 96 },
  { grade: '២', lesson: 15, title: 'ពេលវេលា', pStart: 97, pEnd: 102 },
  { grade: '២', lesson: 16, title: 'ទិន្នន័យ', pStart: 103, pEnd: 106 },
  { grade: '២', lesson: 17, title: 'លំនាំគំរូ', pStart: 107, pEnd: 108 },

  // Grade 3 (ថ្នាក់ទី៣ - ១៣ មេរៀន)
  { grade: '៣', lesson: 1, title: 'ចំនួនដល់ ១០ ០០០', pStart: 1, pEnd: 10 },
  { grade: '៣', lesson: 2, title: 'ទម្ងន់', pStart: 11, pEnd: 14 },
  { grade: '៣', lesson: 3, title: 'វិធីបូក', pStart: 15, pEnd: 28 },
  { grade: '៣', lesson: 4, title: 'រូបិយវត្ថុ', pStart: 29, pEnd: 32 },
  { grade: '៣', lesson: 5, title: 'ប្រវែង', pStart: 33, pEnd: 36 },
  { grade: '៣', lesson: 6, title: 'វិធីដក', pStart: 37, pEnd: 50 },
  { grade: '៣', lesson: 7, title: 'មាឌ និងចំណុះ', pStart: 51, pEnd: 54 },
  { grade: '៣', lesson: 8, title: 'ពេលវេលា', pStart: 55, pEnd: 60 },
  { grade: '៣', lesson: 9, title: 'វិធីគុណ', pStart: 61, pEnd: 76 },
  { grade: '៣', lesson: 10, title: 'ធរណីមាត្រ', pStart: 77, pEnd: 84 },
  { grade: '៣', lesson: 11, title: 'វិធីចែក', pStart: 85, pEnd: 98 },
  { grade: '៣', lesson: 12, title: 'ប្រភាគ', pStart: 99, pEnd: 102 },
  { grade: '៣', lesson: 13, title: 'ក្រាបរូបភាព លំនាំគំរូ ឱកាស', pStart: 103, pEnd: 108 },

  // Grade 4 (ថ្នាក់ទី៤ - ១៧ មេរៀន)
  { grade: '៤', lesson: 1, title: 'ចំនួន', pStart: 1, pEnd: 6 },
  { grade: '៤', lesson: 2, title: 'ប្រភាគ', pStart: 7, pEnd: 12 },
  { grade: '៤', lesson: 3, title: 'វិធីបូក', pStart: 13, pEnd: 22 },
  { grade: '៤', lesson: 4, title: 'រូបធរណីមាត្រ', pStart: 23, pEnd: 28 },
  { grade: '៤', lesson: 5, title: 'ទម្ងន់', pStart: 29, pEnd: 34 },
  { grade: '៤', lesson: 6, title: 'វិធីដក', pStart: 35, pEnd: 44 },
  { grade: '៤', lesson: 7, title: 'រូបិយវត្ថុ', pStart: 45, pEnd: 50 },
  { grade: '៤', lesson: 8, title: 'វិធីគុណ', pStart: 51, pEnd: 60 },
  { grade: '៤', lesson: 9, title: 'វិធីចែក', pStart: 61, pEnd: 70 },
  { grade: '៤', lesson: 10, title: 'ពេលវេលា', pStart: 71, pEnd: 78 },
  { grade: '៤', lesson: 11, title: 'ប្រវែង', pStart: 79, pEnd: 82 },
  { grade: '៤', lesson: 12, title: 'ចំនួនទសភាគ', pStart: 83, pEnd: 90 },
  { grade: '៤', lesson: 13, title: 'វិធីបូកចំនួនទសភាគ', pStart: 91, pEnd: 100 },
  { grade: '៤', lesson: 14, title: 'វិធីដកចំនួនទសភាគ', pStart: 101, pEnd: 110 },
  { grade: '៤', lesson: 15, title: 'មុំ', pStart: 111, pEnd: 114 },
  { grade: '៤', lesson: 16, title: 'បន្ទាត់កែង និងបន្ទាត់ស្រប', pStart: 115, pEnd: 120 },
  { grade: '៤', lesson: 17, title: 'ស្ថិតិ', pStart: 121, pEnd: 128 },

  // Grade 5 (ថ្នាក់ទី៥ - ១៨ មេរៀន)
  { grade: '៥', lesson: 1, title: 'ចំនួន', pStart: 1, pEnd: 4 },
  { grade: '៥', lesson: 2, title: 'វិធីគុណ', pStart: 5, pEnd: 14 },
  { grade: '៥', lesson: 3, title: 'វិធីចែក', pStart: 15, pEnd: 20 },
  { grade: '៥', lesson: 4, title: 'ប្រមាណវិធីមានវង់ក្រចក', pStart: 21, pEnd: 24 },
  { grade: '៥', lesson: 5, title: 'ផលធៀប និងភាគរយ', pStart: 25, pEnd: 30 },
  { grade: '៥', lesson: 6, title: 'ស្ថិតិ', pStart: 31, pEnd: 40 },
  { grade: '៥', lesson: 7, title: 'ចំនួនចម្រុះ', pStart: 41, pEnd: 44 },
  { grade: '៥', lesson: 8, title: 'ចំនួនទសភាគ', pStart: 45, pEnd: 48 },
  { grade: '៥', lesson: 9, title: 'វិធីបូក វិធីដកចំនួនទសភាគ', pStart: 49, pEnd: 62 },
  { grade: '៥', lesson: 10, title: 'វិធីគុណចំនួនទសភាគ', pStart: 63, pEnd: 68 },
  { grade: '៥', lesson: 11, title: 'ប្រភាគ', pStart: 69, pEnd: 84 },
  { grade: '៥', lesson: 12, title: 'រូបិយវត្ថុ', pStart: 85, pEnd: 88 },
  { grade: '៥', lesson: 13, title: 'រង្វាស់ប្រវែង', pStart: 89, pEnd: 94 },
  { grade: '៥', lesson: 14, title: 'រង្វាស់ទម្ងន់', pStart: 95, pEnd: 98 },
  { grade: '៥', lesson: 15, title: 'រង្វាស់ចំណុះ', pStart: 99, pEnd: 102 },
  { grade: '៥', lesson: 16, title: 'រង្វាស់ពេល', pStart: 103, pEnd: 106 },
  { grade: '៥', lesson: 17, title: 'ធរណីមាត្រ', pStart: 107, pEnd: 120 },
  { grade: '៥', lesson: 18, title: 'ប្លង់ ផែនទី និងមាត្រដ្ឋាន', pStart: 121, pEnd: 128 },

  // Grade 6 (ថ្នាក់ទី៦ - ២០ មេរៀន)
  { grade: '៦', lesson: 1, title: 'ចំនួន', pStart: 1, pEnd: 4 },
  { grade: '៦', lesson: 2, title: 'ចំនួនទសភាគ', pStart: 5, pEnd: 8 },
  { grade: '៦', lesson: 3, title: 'វិធីបូក និងវិធីដកចំនួនទសភាគ', pStart: 9, pEnd: 16 },
  { grade: '៦', lesson: 4, title: 'កន្លះបន្ទាត់ពុះមុំ និងសំណង់មុំ', pStart: 17, pEnd: 24 },
  { grade: '៦', lesson: 5, title: 'ការជំនួសលេខដោយអក្សរ', pStart: 25, pEnd: 30 },
  { grade: '៦', lesson: 6, title: 'បរិមាត្រ', pStart: 31, pEnd: 35 },
  { grade: '៦', lesson: 7, title: 'ផ្ទៃក្រឡា', pStart: 36, pEnd: 41 },
  { grade: '៦', lesson: 8, title: 'វិធីគុណ និងវិធីចែកចំនួនទសភាគ', pStart: 42, pEnd: 54 },
  { grade: '៦', lesson: 9, title: 'តួចែករួមធំបំផុត ពហុគុណរួមតូចបំផុត', pStart: 55, pEnd: 62 },
  { grade: '៦', lesson: 10, title: 'វិធីបូក និងវិធីដកប្រភាគ', pStart: 63, pEnd: 78 },
  { grade: '៦', lesson: 11, title: 'វិធីគុណ និងវិធីចែកប្រភាគ', pStart: 79, pEnd: 86 },
  { grade: '៦', lesson: 12, title: 'ផលធៀប', pStart: 87, pEnd: 90 },
  { grade: '៦', lesson: 13, title: 'សមាមាត្រ', pStart: 91, pEnd: 94 },
  { grade: '៦', lesson: 14, title: 'ល្បឿន', pStart: 95, pEnd: 98 },
  { grade: '៦', lesson: 15, title: 'ប្រមាណវិធីលើចំនួនចម្រុះ', pStart: 99, pEnd: 110 },
  { grade: '៦', lesson: 16, title: 'ភាគរយ', pStart: 111, pEnd: 114 },
  { grade: '៦', lesson: 17, title: 'ការប្រាក់', pStart: 115, pEnd: 118 },
  { grade: '៦', lesson: 18, title: 'ស្ថិតិ', pStart: 119, pEnd: 126 },
  { grade: '៦', lesson: 19, title: 'ប្រមាណវិធីលើរង្វាស់ពេល', pStart: 127, pEnd: 130 },
  { grade: '៦', lesson: 20, title: 'មាឌ និងផ្ទៃក្រឡាសូលីត', pStart: 131, pEnd: 138 },
];

export function khmerToArabicInt(str: string | null | undefined): number | null {
  if (!str) return null;
  const map: Record<string, string> = { '០': '0', '១': '1', '២': '2', '៣': '3', '៤': '4', '៥': '5', '៦': '6', '៧': '7', '៨': '8', '៩': '9' };
  const norm = String(str).replace(/[០-៩]/g, (c) => map[c] || c);
  const m = norm.match(/\d+/);
  return m ? parseInt(m[0], 10) : null;
}

export function intToKhmer(num: number | null | undefined): string {
  if (num === null || num === undefined || isNaN(num)) return '';
  const map = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return String(num).replace(/\d/g, (d) => map[parseInt(d, 10)]);
}

export const LESSON_PRESETS: LessonPlan[] = [
  {
    id: 'g3-len-convert',
    grade: '៣',
    duration: '១ម៉ោងសិក្សា (៤០ នាទី)',
    teacher: 'លោកគ្រូ វិចិត្រ សន',
    school: 'សាលាបឋមសិក្សាថ្លុកបង្កោ (ភូមិថ្លុកបង្កោ ឃុំផ្ទះរុង ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់)',
    lunarDate: 'ថ្ងៃចន្ទ ៨កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០',
    solarDate: 'ថ្លុកបង្កោ, ថ្ងៃទី១៩ ខែតុលា ឆ្នាំ២០២៦',
    mainLesson: 'មេរៀនទី៥៖ ប្រវែង (សស. ទំព័រ ៣៦)',
    subTopic: 'ខ្លឹមសាររង៖ ជំ.៥ មេ.១ (មេ. ៥.១) ការប្តូរខ្នាតប្រវែង (ស.គ្រូ ទំព័រ ២៥៧-២៥៨)',
    expectedOutcome: 'លទ្ធផលរំពឹងទុកទី៤៖ សិស្សប្តូរខ្នាតប្រវែងរវាង ម៉ែត្រ (ម) ដេស៊ីម៉ែត្រ (ដម) សង់ទីម៉ែត្រ (សម) និងមីលីម៉ែត្រ (មម) បានត្រឹមត្រូវ។',
    activityTitle: 'សកម្មភាពទី៨៖ ការប្តូរខ្នាតប្រវែង ទំព័រ ២៥៧-២៥៨ (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)',
    standardLevel: 'កម្រិតស្ដង់ដារសកម្មភាពទី២',
    objKnowledge: 'សិស្សប្រាប់បានពីទំនាក់ទំនងរវាងខ្នាតប្រវែង (១ ម = ១០ ដម = ១០០ សម, ១ ដម = ១០ សម, ១ សម = ១០ មម) និងវិធាននៃការប្តូរខ្នាតប្រវែងបានត្រឹមត្រូវតាមរយៈការបង្ហាញបន្ទាត់ម៉ែត្រ និងតារាងខ្នាតប្រវែងរបស់គ្រូ។',
    objSkill: 'សិស្សអនុវត្តប្តូរខ្នាតប្រវែងពីខ្នាតធំទៅខ្នាតតូច និងពីខ្នាតតូចទៅខ្នាតធំ (ឧ. ៣ ម = ៣០០ សម, ៥ ដម = ៥០ សម, ២ ម ៣៥ សម = ២៣៥ សម, ៤០០ សម = ៤ ម) លើក្ដារឆ្នួន និងសៀវភៅសិស្សទំព័រ ៣៦ បានត្រឹមត្រូវតាមរយៈការងារដៃគូ ក្រុម និងបុគ្គល។',
    objAttitude: 'សិស្សមានទំនុកចិត្ត ស្មារតីសហការ និងភាពផ្ចិតផ្ចង់ក្នុងការវាស់វែង និងប្តូរខ្នាតប្រវែងវត្ថុប្រើប្រាស់នៅក្នុងជីវភាពប្រចាំថ្ងៃនៅភូមិថ្លុកបង្កោបានត្រឹមត្រូវ។',
    matTeacher: 'សៀវភៅណែនាំគ្រូថ្នាក់ទី៣ (ទំព័រ ២៥៧-២៥៨), សៀវភៅសិស្សគណិតវិទ្យាថ្នាក់ទី៣ (ទំព័រ ៣៦), សៀវភៅជំនួយថ្នាក់ទី៣, បន្ទាត់ឈើប្រវែង ១ ម៉ែត្រ (1 m), បន្ទាត់ក្រិតដេស៊ីម៉ែត្រ និងសង់ទីម៉ែត្រ, តារាងទំនាក់ទំនងខ្នាតប្រវែង, បណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម)។',
    matStudent: 'ក្ដារឆ្នួន ហ្វឺត/ដីស សៀវភៅសិស្សថ្នាក់ទី៣ (ទំព័រ ៣៦) បន្ទាត់ក្រិតសង់ទីម៉ែត្រ (២០ សម ឬ ៣០ សម) សៀវភៅជំនួយ និងបណ្ណសញ្ញាពណ៌។',
    step2Review: 'សួរសំណួររំឭកមេរៀនមុន (ទំព័រ ៣៣-៣៥)៖ តើបន្ទាត់ខ្លីរបស់កូនមានក្រិតខ្នាតអ្វីខ្លះ? តើ ១ ដេស៊ីម៉ែត្រ (១ តឹក) ស្មើនឹងប៉ុន្មានសង់ទីម៉ែត្រ (ហ៊ុន)? (១ ដម = ១០ សម)។ ចុះបើក្ដារខៀនមានប្រវែង ២ ម៉ែត្រ តើស្មើនឹងប៉ុន្មានសង់ទីម៉ែត្រ? គ្រូភ្ជាប់ទៅមេរៀនថ្មី «ការប្តូរខ្នាតប្រវែង (សកម្មភាពទី៨ ទំព័រ ២៥៧-២៥៨)»។',
    step3PairWork: 'គ្រូបង្ហាញបន្ទាត់ម៉ែត្រ (១ ម) ផ្ទៀបជាមួយបន្ទាត់ដេស៊ីម៉ែត្រ និងសង់ទីម៉ែត្រ (សកម្មភាពទី៨ ស.គ្រូ ទំព័រ ២៥៧-២៥៨)។ សិស្សចាប់ដៃគូសង្កេតរាប់គំនូសក្រិតលើបន្ទាត់ និងសៀវភៅសិស្សទំព័រ ៣៦ រកឃើញថា៖ ក្នុង ១ ម៉ែត្រ មាន ១០ ដេស៊ីម៉ែត្រ (១០ តឹក) ហើយក្នុង ១ ដេស៊ីម៉ែត្រ មាន ១០ សង់ទីម៉ែត្រ (១០ ហ៊ុន) ដូចនេះ ១ ម៉ែត្រ = ១០០ សង់ទីម៉ែត្រ។ ដៃគូសិស្សអនុវត្តបំបែកខ្នាតចម្រុះ ២ ម ៣៥ សម = ២០០ សម + ៣៥ សម = ២៣៥ សម។',
    step3KeyRule: '• ទំនាក់ទំនងខ្នាតប្រវែងផ្លូវការ (សស. ទំព័រ ៣៦ & ស.គ្រូ ទំព័រ ២៥៧-២៥៨)៖\n  - ១ សង់ទីម៉ែត្រ (សម / cm) = ១០ មីលីម៉ែត្រ (មម / mm) [១ ហ៊ុន = ១០ លី]\n  - ១ ដេស៊ីម៉ែត្រ (ដម / dm) = ១០ សង់ទីម៉ែត្រ (សម / cm) [១ តឹក = ១០ ហ៊ុន]\n  - ១ ម៉ែត្រ (ម / m) = ១០ ដេស៊ីម៉ែត្រ (ដម) = ១០០ សង់ទីម៉ែត្រ (សម)\n• លំហាត់គំរូ៖ ៣ ម = ៣០០ សម ; ៥ ដម = ៥០ សម ; ២ ម ៣៥ សម = ២៣៥ សម ; ៤០០ សម = ៤ ម ; ១៦០ សម = ១ ម ៦០ សម។',
    step3GroupGame: 'ល្បែងសិក្សា «ផ្គូផ្គងបណ្ណខ្នាតប្រវែងស្មើគ្នា (កន្ត្រៃមាសប្តូរខ្នាត)»៖ ក្រុមសិស្សទទួលបណ្ណប្រវែង (២ ម, ៣ ដម, ១ ម ២៥ សម, ៥០០ សម) រួចប្រណាំងគ្នាផ្គូផ្គងទៅនឹងបណ្ណចម្លើយ (២០០ សម, ៣០ សម, ១២៥ សម, ៥ ម) និងដោះស្រាយលំហាត់ក្នុងសៀវភៅសិស្សទំព័រ ៣៦។',
    misconceptions: '• សិស្សភាន់ច្រឡំទំនាក់ទំនងរវាង ម៉ែត្រ និងសង់ទីម៉ែត្រ ដោយគិតថា ១ ម = ១០ សម (ច្រឡំជាមួយ ១ ដម = ១០ សម) នាំឱ្យប្តូរ ៣ ម = ៣០ សម ជំនួសឱ្យ ៣០០ សម។\n• នៅពេលប្តូរខ្នាតចម្រុះ (ឧ. ២ ម ៥ សម គិតជា សម) សិស្សភ្លេចដាក់លេខ ០ នៅខ្ទង់ដប់ ដោយសរសេរ ២៥ សម ជំនួសឱ្យ ២០៥ សម។\n• វិធីជួយកែតម្រូវ (Remedial Support)៖ គ្រូឱ្យសិស្សប្រើតារាងខ្នាតប្រវែង (ម | ដម | សម | មម) និងបង្ហាញបន្ទាត់ម៉ែត្រជាក់ស្ដែងដើម្បីបំបែក ២ ម = ២០០ សម រួចបូក ៥ សម បាន ២០៥ សម។',
    step4Practice: 'ឱ្យសិស្សគណនាលើក្ដារឆ្នួន (ស្រង់ពីសៀវភៅសិស្សទំព័រ ៣៦)៖ ក) ៤ ម = [...] សម (៤០០ សម) ខ) ៦០ សម = [...] ដម (៦ ដម) គ) ១ ម ៤៥ សម = [...] សម (១៤៥ សម) ឃ) ៣០០ សម = [...] ម (៣ ម) រួចលើកក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម)។',
    step5Homework: 'ឱ្យសិស្សធ្វើលំហាត់ដែលនៅសល់ក្នុងសៀវភៅសិស្សទំព័រ ៣៦ ចូលក្នុងសៀវភៅសរសេរ និងវាស់ប្រវែងតុ ឬកន្ទេលនៅផ្ទះគិតជាម៉ែត្រ និងសង់ទីម៉ែត្រ។',
    barA: 200,
    barB: 35,
    placeNum: 235,
  },
  {
    id: 'g1-geo-points',
    grade: '១',
    duration: '១ម៉ោងសិក្សា (៤០ នាទី)',
    teacher: 'លោកគ្រូ វិចិត្រ សន',
    school: 'សាលាបឋមសិក្សាថ្លុកបង្កោ (ភូមិថ្លុកបង្កោ ឃុំផ្ទះរុង ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់)',
    lunarDate: 'ថ្ងៃចន្ទ ៨កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០',
    solarDate: 'ថ្លុកបង្កោ, ថ្ងៃទី១៩ ខែតុលា ឆ្នាំ២០២៦',
    mainLesson: 'មេរៀនទី៩៖ ធរណីមាត្រ (សស. ទំព័រ ៤៨)',
    subTopic: 'ខ្លឹមសាររង៖ ជំ.៣ មេ.១ (មេ. ៣.១) ចំណុច បន្ទាត់ ខ្សែកោង ខ្សែកាច់ (ស.គ្រូ ទំព័រ ២៨៣)',
    expectedOutcome: 'លទ្ធផលរំពឹងទុកទី១៖ សិស្សកំណត់បាននូវចំណុច បន្ទាត់ ខ្សែកោង និងខ្សែកាច់បានត្រឹមត្រូវ។',
    activityTitle: 'សកម្មភាពទី១៖ ការស្គាល់ចំណុច បន្ទាត់ ខ្សែកោង និងខ្សែកាច់ ទំព័រ ២៨៣ (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)',
    standardLevel: 'កម្រិតស្ដង់ដារសកម្មភាពទី១',
    objKnowledge: 'សិស្សប្រាប់បានពីនិយមន័យ និងលក្ខណៈសម្គាល់នៃចំណុច បន្ទាត់ ខ្សែកោង និងខ្សែកាច់ បានត្រឹមត្រូវតាមរយៈការបង្ហាញរូបភាព និងវត្ថុជាក់ស្ដែងរបស់គ្រូ។',
    objSkill: 'សិស្សគូស និងញែកសម្គាល់ចំណុច បន្ទាត់ ខ្សែកោង និងខ្សែកាច់ ដោយប្រើបន្ទាត់ និងខ្មៅដៃបានត្រឹមត្រូវតាមរយៈការងារដៃគូ ក្រុម និងបុគ្គល។',
    objAttitude: 'សិស្សមានទំនុកចិត្ត ស្មារតីសហការ និងភាពផ្ចិតផ្ចង់ក្នុងការសង្កេតរូបរាងធរណីមាត្រនៃវត្ថុប្រើប្រាស់នៅក្នុងជីវភាពប្រចាំថ្ងៃបានត្រឹមត្រូវ។',
    matTeacher: 'បន្ទាត់វែង ខ្សែពួរ/ខ្សែអំបោះ បណ្ណរូបភាពធរណីមាត្រ (ចំណុច បន្ទាត់ ខ្សែកោង ខ្សែកាច់) បណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម) សៀវភៅណែនាំគ្រូទំព័រ ២៨៣។',
    matStudent: 'ក្ដារឆ្នួន ហ្វឺត/ដីស សៀវភៅសិស្សទំព័រ ៤៨ បន្ទាត់ ខ្មៅដៃ និងបណ្ណសញ្ញាពណ៌។',
    step2Review: 'សួរសំណួររំឭក៖ តើវត្ថុអ្វីខ្លះនៅក្នុងថ្នាក់រៀនយើងដែលមានរាងត្រង់ដូចបន្ទាត់? គ្រូបង្ហាញខ្សែអំបោះទាញតឹង និងបន្ធូរ រួចភ្ជាប់ទៅមេរៀនថ្មី «ចំណុច បន្ទាត់ ខ្សែកោង ខ្សែកាច់»។',
    step3PairWork: 'គ្រូបង្ហាញសកម្មភាពចុចចុងហ្វឺតលើក្ដារខៀន (បង្កើតបានជាចំណុច A, B) ការទាញខ្សែអំបោះឱ្យតឹង (បន្ទាត់) ការបន្ធូរខ្សែអំបោះ (ខ្សែកោង) និងការបត់បំពង់បឺតជាជ្រុងតភ្ជាប់គ្នា (ខ្សែកាច់)។ សិស្សចាប់ដៃគូសង្កេតសៀវភៅសិស្សទំព័រ ៤៨ និងពិភាក្សាពីភាពខុសគ្នា។',
    step3KeyRule: '• ចំណុច៖ ស្នាមចុចតូចមួយលើផ្ទៃរាប (តាងដោយអក្សរធំ A, B, C)។\n• បន្ទាត់៖ ខ្សែត្រង់ដែលអាចបន្តទៅសងខាងឥតឈប់។\n• ខ្សែកោង៖ ខ្សែដែលមិនត្រង់ (កោង)។\n• ខ្សែកាច់៖ ខ្សែដែលផ្គុំឡើងដោយអង្កត់ត្រង់ច្រើនតភ្ជាប់គ្នាបន្តបន្ទាប់។',
    step3GroupGame: 'ល្បែងសិក្សា «ផ្គូផ្គងបណ្ណធរណីមាត្រ និងកន្ត្រៃមាស»៖ សិស្សចូលក្រុមបែងចែកបណ្ណរូបភាពទាំង ៦ ក្នុងសៀវភៅជំនួយ ទៅតាមប្រភេទ ចំណុច បន្ទាត់ ខ្សែកោង និងខ្សែកាច់ រួចឡើងបិទលើតារាងសំយោគ។',
    misconceptions: '• សិស្សភាន់ច្រឡំរវាង «ខ្សែកោង» និង «ខ្សែកាច់» នៅពេលឃើញខ្សែកាច់មានអង្កត់ខ្លីៗច្រើនតភ្ជាប់គ្នា។\n• សិស្សគូសបន្ទាត់ និងខ្សែកាច់ដោយដៃទទេមិនប្រើបន្ទាត់ ធ្វើឱ្យអង្កត់មិនត្រង់។\n• វិធីជួយកែតម្រូវ៖ គ្រូណែនាំឱ្យសិស្សប្រើបន្ទាត់ជានិច្ចពេលគូសបន្ទាត់ និងខ្សែកាច់ ព្រមទាំងចង្អុលបង្ហាញកន្លែងកាច់ជ្រុងនីមួយៗឱ្យច្បាស់។',
    step4Practice: 'គ្រូបង្ហាញរូបភាពម្ដងមួយៗលើក្ដារខៀន៖ ឱ្យសិស្សសរសេរឈ្មោះ (ចំណុច / បន្ទាត់ / ខ្សែកោង / ខ្សែកាច់) លើក្ដារឆ្នួន និងលើកបណ្ណសញ្ញាចរាចរ (បៃតង=ត្រូវ, ក្រហម=ខុស) ដើម្បីវាយតម្លៃភ្លាមៗ។',
    step5Homework: 'ឱ្យសិស្សធ្វើលំហាត់ក្នុងសៀវភៅសិស្សទំព័រ ៤៨ (គូសបន្ទាត់ ខ្សែកោង និងខ្សែកាច់ក្នុងសៀវភៅសរសេរ) និងសង្កេតវត្ថុនៅផ្ទះដែលមានរាងជាខ្សែកោង និងខ្សែកាច់។',
    barA: 15,
    barB: 12,
    placeNum: 248,
  },
  {
    id: 'g2-weight-compare',
    grade: '២',
    duration: '១ម៉ោងសិក្សា (៤០ នាទី)',
    teacher: 'លោកគ្រូ វិចិត្រ សន',
    school: 'សាលាបឋមសិក្សាថ្លុកបង្កោ (ភូមិថ្លុកបង្កោ ឃុំផ្ទះរុង ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់)',
    lunarDate: 'ថ្ងៃចន្ទ ៨កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០',
    solarDate: 'ថ្លុកបង្កោ, ថ្ងៃទី១៩ ខែតុលា ឆ្នាំ២០២៦',
    mainLesson: 'មេរៀនទី៩៖ ទម្ងន់ (សស. ទំព័រ ៦១)',
    subTopic: 'ខ្លឹមសាររង៖ ជំ.២ មេ.២ (មេ. ២.២) ការប៉ាន់ស្មាន និងប្រៀបធៀបទម្ងន់ធៀបនឹង ១ គីឡូក្រាម (ស.គ្រូ ទំព័រ ២៥១-២៥២)',
    expectedOutcome: 'លទ្ធផលរំពឹងទុកទី២៖ សិស្សប៉ាន់ស្មាន និងប្រៀបធៀបទម្ងន់វត្ថុធៀបនឹង ១ គីឡូក្រាម ដោយប្រើពាក្យ ធ្ងន់ជាង ស្រាលជាង ស្មើ ឬសញ្ញា < > = បានត្រឹមត្រូវ។',
    activityTitle: 'សកម្មភាពទី៣៖ ប៉ាន់ស្មាន និងប្រៀបធៀបទម្ងន់ធៀបនឹង ១ គីឡូក្រាម ទំព័រ ២៥១-២៥២ (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)',
    standardLevel: 'កម្រិតស្ដង់ដារសកម្មភាពទី២',
    objKnowledge: 'សិស្សយល់ដឹងពីការប៉ាន់ស្មាន និងប្រៀបធៀបទម្ងន់ធៀបនឹង ១ គីឡូក្រាម (១ គក) ដោយប្រើពាក្យ ធ្ងន់ជាង ស្រាលជាង ស្មើ និងសញ្ញា < > = បានត្រឹមត្រូវ។',
    objSkill: 'សិស្សចេះប្រើដៃប៉ាន់ស្មាន ប្រើជញ្ជីងជាក់ស្ដែងសម្រាប់ថ្លឹងផ្ទៀងផ្ទាត់ និងសរសេរប្រៀបធៀបទម្ងន់លើក្ដារឆ្នួន និងសៀវភៅសិស្សទំព័រ ៦១ បានត្រឹមត្រូវ។',
    objAttitude: 'សិស្សមានទំនុកចិត្ត ស្មារតីសហការល្អ និងចេះថ្លឹងថ្លែងដោយស្មោះត្រង់ក្នុងជីវភាពរស់នៅប្រចាំថ្ងៃ។',
    matTeacher: 'សៀវភៅណែនាំគ្រូថ្នាក់ទី២ (ទំព័រ ២៥១-២៥២), សៀវភៅសិស្សទំព័រ ៦១, សៀវភៅស្ដង់ដា MCAS, ជញ្ជីងប៉ុង, កញ្ចប់គំរូ ១ គក (ស្ករស ១ គក), ផ្លែក្រូច, ឪឡឹក, បណ្ណសញ្ញា (<, >, =)។',
    matStudent: 'ក្ដារឆ្នួន ហ្វឺត សៀវភៅសិស្សថ្នាក់ទី២ (ទំព័រ ៦១) វត្ថុប្រើប្រាស់ផ្ទាល់ខ្លួនសម្រាប់ថ្លឹងសាកល្បង។',
    step2Review: 'រំឭកប្រភេទជញ្ជីង និងការថ្លឹងដោយដៃ រួចភ្ជាប់ទៅមេរៀនថ្មី៖ ការប៉ាន់ស្មាន និងប្រៀបធៀបទម្ងន់វត្ថុធៀបនឹងខ្នាតគំរូ «១ គីឡូក្រាម (១ គក)»។',
    step3PairWork: 'ឱ្យដៃគូសិស្សកាន់កញ្ចប់គំរូ ១ គក នៅដៃម្ខាង និងវត្ថុផ្សេងទៀតនៅដៃម្ខាងទៀតដើម្បីប៉ាន់ស្មាន រួចយកទៅថ្លឹងលើជញ្ជីងផ្ទៀងផ្ទាត់ (ពិនិត្យទ្រនិចឱ្យចំលេខ ០ មុនថ្លឹង)។',
    step3KeyRule: '• មុនពេលថ្លឹង ត្រូវពិនិត្យទ្រនិចជញ្ជីងឱ្យចង្អុលចំលេខសូន្យ (០) ជានិច្ច។\n• ប្រសិនបើទ្រនិចចង្អុលលើសលេខ ១ គក នោះវត្ថុ «ធ្ងន់ជាង ១ គក (>)»។\n• ប្រសិនបើទ្រនិចមិនទាន់ដល់លេខ ១ គក នោះវត្ថុ «ស្រាលជាង ១ គក (<)»។\n• ប្រសិនបើទ្រនិចចំលេខ ១ គក នោះវត្ថុ «ស្មើ ១ គក (=)»។',
    step3GroupGame: 'ល្បែងសិក្សា «ទិញអីវ៉ាន់នៅផ្សារភូមិថ្លុកបង្កោ»៖ ក្រុមសិស្សប៉ាន់ស្មាន និងថ្លឹងវត្ថុ រួចបំពេញសញ្ញា <, >, = ក្នុងសៀវភៅសិស្សទំព័រ ៦១។',
    misconceptions: '• សិស្សយល់ច្រឡំថាវត្ថុដែលមានទំហំធំតែងតែធ្ងន់ជាងវត្ថុដែលមានទំហំតូចជានិច្ច។\n• សិស្សច្រឡំរវាងសញ្ញាធំជាង (>) និងតូចជាង (<) ឬភ្លេចពិនិត្យទ្រនិចជញ្ជីងឱ្យចំលេខ ០ មុនពេលថ្លឹង។',
    step4Practice: 'ឱ្យសិស្សបំពេញសញ្ញា <, >, = លើក្ដារឆ្នួន៖ ក) ទម្ងន់ផ្លែឪឡឹកធំ [...] ១ គក (>) ខ) ទម្ងន់ផ្លែក្រូច ១ ផ្លែ [...] ១ គក (<) គ) ស្ករស ១ គក [...] ១ គក (=)។',
    step5Homework: 'សង្កេតវត្ថុ ៣ មុខនៅផ្ទះ រួចកត់ត្រាការប្រៀបធៀបធៀបនឹង ១ គីឡូក្រាម ចូលក្នុងសៀវភៅសរសេរ។',
    barA: 10,
    barB: 10,
    placeNum: 100,
  },
  {
    id: 'g2-add-carry',
    grade: '២',
    duration: '១ម៉ោងសិក្សា (៤០ នាទី)',
    teacher: 'លោកគ្រូ វិចិត្រ សន',
    school: 'សាលាបឋមសិក្សាថ្លុកបង្កោ (ភូមិថ្លុកបង្កោ ឃុំផ្ទះរុង ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់)',
    lunarDate: 'ថ្ងៃចន្ទ ៨កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០',
    solarDate: 'ថ្លុកបង្កោ, ថ្ងៃទី១៩ ខែតុលា ឆ្នាំ២០២៦',
    mainLesson: 'មេរៀនទី៣៖ វិធីបូកចំនួនមានលេខ ២ខ្ទង់ (សស. ទំព័រ ២៥)',
    subTopic: 'ខ្លឹមសាររង៖ ជំ.១ មេ.៣ (មេ. ១.៣) ការបូកលេខមានលេខ២ខ្ទង់និង២ខ្ទង់ដោយមានត្រាទុក (ស.គ្រូ ទំព័រ ៨៤)',
    expectedOutcome: 'លទ្ធផលរំពឹងទុកទី២៖ សិស្សគណនាផលបូកចំនួនមានលេខពីរខ្ទង់នឹងពីរខ្ទង់ដោយមានត្រាទុកតាមទម្រង់ឈរបានត្រឹមត្រូវ។',
    activityTitle: 'សកម្មភាពទី៨៖ ការបូកចំនួនមានលេខពីរខ្ទង់មានត្រាទុកដោយប្រើបន្ទះតម្លៃខ្ទង់ ទំព័រ ៨៤ (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)',
    standardLevel: 'កម្រិតស្ដង់ដារសកម្មភាពទី២',
    objKnowledge: 'សិស្សប្រាប់បានពីរបៀបដាក់លេខឱ្យត្រូវតាមខ្ទង់ (រាយក្រោមរាយ ដប់ក្រោមដប់) និងការប្ដូរ ១០ រាយ ទៅជា ១ ដប់ (ត្រាទុក ១ លើខ្ទង់ដប់) បានត្រឹមត្រូវ។',
    objSkill: 'សិស្សធ្វើប្រមាណវិធីបូកចំនួនមានលេខពីរខ្ទង់មានត្រាទុក (ឧ. 27 + 15 = 42) តាមទម្រង់ឈរបានត្រឹមត្រូវតាមរយៈការងារដៃគូ និងក្រុម។',
    objAttitude: 'សិស្សមានភាពផ្ចិតផ្ចង់ អត់ធ្មត់ និងទំនុកចិត្តក្នុងការគណនាលេខនៅក្នុងជីវភាពប្រចាំថ្ងៃ។',
    matTeacher: 'បាច់បំពង់បឺត បន្ទះតម្លៃខ្ទង់ (បន្ទះដប់ និងគ្រាប់រាយ) តារាងតម្លៃខ្ទង់ ដ្យាក្រាមរបារ Bar Model បណ្ណសញ្ញាចរាចរ។',
    matStudent: 'ក្ដារឆ្នួន ហ្វឺត បំពង់បឺត សៀវភៅសិស្សថ្នាក់ទី២ ទំព័រ ២៥ និងសៀវភៅជំនួយ។',
    step2Review: 'រំឭកការបូកក្នុងរង្វង់ ២០៖ 7 + 5 = ?, 8 + 6 = ? និងការប្ដូរ ១២ រាយ ស្មើនឹង ១ ដប់ និង ២ រាយ រួចភ្ជាប់ទៅមេរៀនថ្មី 27 + 15។',
    step3PairWork: 'ឱ្យដៃគូសិស្សរៀបបន្ទះតម្លៃខ្ទង់តាង 27 (២ ដប់ និង ៧ រាយ) បូកនឹង 15 (១ ដប់ និង ៥ រាយ)៖ បូកខ្ទង់រាយ 7 + 5 = 12 រាយ ប្ដូរ 10 រាយ ជា 1 បន្ទះដប់ ដាក់បន្ថែមលើខ្ទង់ដប់។',
    step3KeyRule: '• វិធានបូកមានត្រាទុក (27 + 15 = 42)៖\n  ១. សរសេរលេខឱ្យត្រូវតាមខ្ទង់ (រាយក្រោមរាយ ដប់ក្រោមដប់)។\n  ២. បូកខ្ទង់រាយមុន៖ 7 + 5 = 12 សរសេរលេខ 2 ក្រោមខ្ទង់រាយ ត្រាទុក 1 លើខ្ទង់ដប់។\n  ៣. បូកខ្ទង់ដប់៖ 2 + 1 + 1 (ត្រាទុក) = 4 សរសេរលេខ 4 ក្រោមខ្ទង់ដប់ (ផលបូក = 42)។',
    step3GroupGame: 'ល្បែងសិក្សា «ប្រណាំងរថភ្លើងគណនាផលបូក»៖ ក្រុមសិស្សចាប់បណ្ណប្រមាណវិធី (38+24, 46+17, 59+23) រួចសហការគ្នាដោះស្រាយលើតារាងតម្លៃខ្ទង់។',
    misconceptions: '• សិស្សភ្លេចបូកលេខត្រាទុក ១ នៅលើខ្ទង់ដប់ (ឧ. 27 + 15 សិស្សឆ្លើយ 32)។\n• សិស្សសរសេរលេខទាំងពីរខ្ទង់នៃផលបូកខ្ទង់រាយចូលក្នុងផលបូកតែម្ដង (ឧ. 27 + 15 សរសេរ 312)។\n• សិស្សចាប់ផ្ដើមបូកពីខ្ទង់ដប់ខាងឆ្វេងមុន ធ្វើឱ្យខុសនៅពេលមានត្រាទុក។',
    step4Practice: 'ឱ្យសិស្សធ្វើលើក្ដារឆ្នួន៖ ក) 36 + 27 = ? ខ) 48 + 35 = ? រួចលើកក្ដារឆ្នួន និងបណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម) ដើម្បីត្រួតពិនិត្យលេខត្រាទុក។',
    step5Homework: 'ធ្វើលំហាត់ក្នុងសៀវភៅសិស្សថ្នាក់ទី២ ទំព័រ ២៥ (លំហាត់ទី២ ចំនួន ៤ ប្រមាណវិធី) ចូលក្នុងសៀវភៅសរសេរ។',
    barA: 27,
    barB: 15,
    placeNum: 42,
  },
  {
    id: 'g3-div-2digit',
    grade: '៣',
    duration: '១ម៉ោងសិក្សា (៤០ នាទី)',
    teacher: 'លោកគ្រូ វិចិត្រ សន',
    school: 'សាលាបឋមសិក្សាថ្លុកបង្កោ (ភូមិថ្លុកបង្កោ ឃុំផ្ទះរុង ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់)',
    lunarDate: 'ថ្ងៃចន្ទ ៨កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០',
    solarDate: 'ថ្លុកបង្កោ, ថ្ងៃទី១៩ ខែតុលា ឆ្នាំ២០២៦',
    mainLesson: 'មេរៀនទី១១៖ វិធីចែក (សស. ទំព័រ ៨៦)',
    subTopic: 'ខ្លឹមសាររង៖ ជំ.៤ មេ.១ (មេ. ៤.១) ការចែកចំនួនមានលេខពីរខ្ទង់នឹងមួយខ្ទង់គ្មានសំណល់ (ស.គ្រូ ទំព័រ ១៩៦)',
    expectedOutcome: 'លទ្ធផលរំពឹងទុកទី១៖ សិស្សធ្វើប្រមាណវិធីចែកចំនួនមានលេខពីរខ្ទង់នឹងមួយខ្ទង់គ្មានសំណល់តាមទម្រង់ឈរបានត្រឹមត្រូវ។',
    activityTitle: 'សកម្មភាពទី១៖ ការចែកចំនួនមានលេខពីរខ្ទង់នឹងមួយខ្ទង់ដោយប្រើបាច់បំពង់បឺត ទំព័រ ១៩៦ (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)',
    standardLevel: 'កម្រិតស្ដង់ដារសកម្មភាពទី១',
    objKnowledge: 'សិស្សប្រាប់បានពីជំហាននៃការធ្វើប្រមាណវិធីចែកតាមទម្រង់ឈរ (ចែកពីខ្ទង់ដប់មុន រួចទើបចែកខ្ទង់រាយ) បានត្រឹមត្រូវតាមរយៈការបង្ហាញរបស់គ្រូ។',
    objSkill: 'សិស្សគណនាផលចែកចំនួនមានលេខពីរខ្ទង់នឹងមួយខ្ទង់គ្មានសំណល់ (ឧ. 48 ÷ 2, 69 ÷ 3) បានត្រឹមត្រូវតាមរយៈការងារដៃគូ និងក្រុម។',
    objAttitude: 'សិស្សមានទំនុកចិត្ត និងស្មារតីយុត្តិធម៌ក្នុងការបែងចែកវត្ថុស្មើៗគ្នានៅក្នុងជីវភាពប្រចាំថ្ងៃ។',
    matTeacher: 'បាច់បំពង់បឺត (៤ បាច់ដប់ និង ៨ រាយ) បន្ទះតម្លៃខ្ទង់ ដ្យាក្រាមរបារ Bar Model បណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម)។',
    matStudent: 'ក្ដារឆ្នួន ហ្វឺត បំពង់បឺតសម្រាប់រាប់ជាក្រុម សៀវភៅសិស្សទំព័រ ៨៦ និងសៀវភៅជំនួយ។',
    step2Review: 'រំឭកមេគុណ ២, ៣, ៤ និងការចែកក្នុងតារាងមេគុណ៖ 8 ÷ 2 = ?, 6 ÷ 3 = ? រួចភ្ជាប់ទៅចំណោទ៖ «គ្រូមានខ្មៅដៃ 48 ដើម ចែកឱ្យសិស្ស 2 នាក់ស្មើៗគ្នា តើម្នាក់ៗទទួលបានប៉ុន្មានដើម?»',
    step3PairWork: 'ឱ្យដៃគូសិស្សប្រើបាច់បំពង់បឺត 4 បាច់ដប់ និង 8 រាយ ចែកជា 2 ក្រុមស្មើគ្នា៖ ជំហានទី១ ចែក 4 បាច់ដប់ បាន 2 បាច់ដប់ក្នុងមួយក្រុម។ ជំហានទី២ ចែក 8 រាយ បាន 4 រាយក្នុងមួយក្រុម (សរុប 24)។',
    step3KeyRule: '• វិធានចែកតាមទម្រង់ឈរ (48 ÷ 2 = 24)៖\n  ១. ចាប់ផ្ដើមចែកពីខ្ទង់ខាងឆ្វេង (ខ្ទង់ដប់) មុន៖ 4 ÷ 2 = 2, គុណត្រឡប់ 2 × 2 = 4, ដក 4 - 4 = 0។\n  ២. ទម្លាក់ខ្ទង់រាយ (8) ចុះមក៖ 8 ÷ 2 = 4, គុណត្រឡប់ 4 × 2 = 8, ដក 8 - 8 = 0។\n• ដ្យាក្រាមរបារ៖ ចំនួនសរុប 48 បែងចែកជា 2 ផ្នែកស្មើគ្នា (24 និង 24)។',
    step3GroupGame: 'ល្បែងសិក្សា «បង្វិលថាសប្រមាណវិធីចែក»៖ ក្រុមនីមួយៗបង្វិលថាសលេខ (36÷3, 64÷2, 84÷4, 93÷3) រួចប្រណាំងគ្នាសរសេរប្រមាណវិធីឈរលើក្ដារឆ្នួនក្រុម។',
    misconceptions: '• ចាប់ផ្តើមធ្វើប្រមាណវិធីពីស្តាំមុនក្នុងប្រមាណវិធីចែក (ដូចវិធីបូក ដក គុណ)។\n• ដកខុសខ្ទង់ក្នុងប្រមាណវិធីចែក និងមិនទាន់ចេះស្ទាត់នូវលេខមេគុណ 2, 3, 4, 5 និង 10។\n• សិស្សមិនទាន់យល់ច្បាស់ពីទំនាក់ទំនងប្រមាណវិធីគុណ និងប្រមាណវិធីចែក ឬភាន់ច្រឡំធ្វើប្រមាណវិធីគុណ/បូកក្នុងចំណោទប្រមាណវិធីចែក។',
    step4Practice: 'ឱ្យសិស្សគណនាលើក្ដារឆ្នួន៖ ក) 68 ÷ 2 = ? ខ) 96 ÷ 3 = ? រួចលើកក្ដារឆ្នួនព្រមគ្នា និងប្រើបណ្ណសញ្ញាចរាចរ (បៃតង/ក្រហម) ផ្ទៀងផ្ទាត់ជំហានចែកពីឆ្វេងទៅស្ដាំ។',
    step5Homework: 'ធ្វើលំហាត់ក្នុងសៀវភៅសិស្សទំព័រ ៨៦ (លំហាត់គណនាប្រមាណវិធីចែកតាមទម្រង់ឈរ ចំនួន ៤ ខ្ទង់) និងទន្ទេញមេគុណ ២ ដល់ ៥ នៅផ្ទះ។',
    barA: 24,
    barB: 24,
    placeNum: 48,
  },
  {
    id: 'g3-mult-word',
    grade: '៣',
    duration: '១ម៉ោងសិក្សា (៤០ នាទី)',
    teacher: 'លោកគ្រូ វិចិត្រ សន',
    school: 'សាលាបឋមសិក្សាថ្លុកបង្កោ (ភូមិថ្លុកបង្កោ ឃុំផ្ទះរុង ស្រុកភ្នំក្រវាញ ខេត្តពោធិ៍សាត់)',
    lunarDate: 'ថ្ងៃចន្ទ ៨កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០',
    solarDate: 'ថ្លុកបង្កោ, ថ្ងៃទី១៩ ខែតុលា ឆ្នាំ២០២៦',
    mainLesson: 'មេរៀនទី៩៖ វិធីគុណ (សស. ទំព័រ ៧៦)',
    subTopic: 'ខ្លឹមសាររង៖ ជំ.៣ មេ.១ (មេ. ៣.១) ចំណោទប្រមាណវិធីគុណ (ស.គ្រូ ទំព័រ ១៦៣-១៦៤)',
    expectedOutcome: 'លទ្ធផលរំពឹងទុកទី៥៖ សិស្សដោះស្រាយចំណោទប្រមាណវិធីគុណតាមជំហានទាំង ៤ និងដ្យាក្រាមរបារបានត្រឹមត្រូវ។',
    activityTitle: 'សកម្មភាពទី២២៖ ការដោះស្រាយចំណោទប្រមាណវិធីគុណ ទំព័រ ១៦៣-១៦៤ (សៀវភៅណែនាំគ្រូ បោះពុម្ពឆ្នាំ២០២៤)',
    standardLevel: 'កម្រិតស្ដង់ដារសកម្មភាពទី២',
    objKnowledge: 'សិស្សប្រាប់បានពីជំហានទាំង ៤ ក្នុងការដោះស្រាយចំណោទ (អានប្រធាន រកបំរាប់និងសំណួរ គូសដ្យាក្រាមរបារនិងបង្កើតប្រមាណវិធី ផ្ទៀងផ្ទាត់និងឆ្លើយ) បានត្រឹមត្រូវ។',
    objSkill: 'សិស្សវិភាគប្រធានចំណោទ គូសដ្យាក្រាមរបារ និងគណនាផលគុណ (ឧ. ២៤ × ៣ = ៧២ ក្បាល, ១២៥ × ៤ = ៥០០ ដើម) លើក្ដារឆ្នួន និងសៀវភៅសិស្សទំព័រ ៧៦ បានត្រឹមត្រូវ។',
    objAttitude: 'សិស្សមានការសង្កេតហ្មត់ចត់ ផ្ចិតផ្ចង់ និងទំនុកចិត្តក្នុងការដោះស្រាយបញ្ហាជាក់ស្ដែងក្នុងជីវភាពប្រចាំថ្ងៃ។',
    matTeacher: 'សៀវភៅណែនាំគ្រូថ្នាក់ទី៣ (ទំព័រ ១៦៣-១៦៤), សៀវភៅសិស្សទំព័រ ៧៦, បន្ទះដ្យាក្រាមរបារ Bar Model, ផ្ទាំងប្រធានចំណោទគំរូ, បណ្ណសញ្ញាចរាចរ។',
    matStudent: 'ក្ដារឆ្នួន ហ្វឺត សៀវភៅសិស្សថ្នាក់ទី៣ (ទំព័រ ៧៦) បន្ទាត់ និងសៀវភៅសរសេរ។',
    step2Review: 'រំឭកការគុណលេខ ២ខ្ទង់ និង ៣ខ្ទង់នឹង ១ខ្ទង់លើក្ដារឆ្នួន៖ ក) ២៣ × ៣ = ៦៩ ខ) ១៤២ × ២ = ២៨៤ រួចភ្ជាប់ទៅមេរៀនថ្មី «ចំណោទប្រមាណវិធីគុណ»។',
    step3PairWork: 'គ្រូបង្ហាញប្រធានចំណោទគំរូ (សកម្មភាពទី២២ ស.គ្រូ ទំព័រ ១៦៣-១៦៤)៖ «បណ្ណាល័យមួយមានទូសៀវភៅ ៣ ទូ។ ក្នុង ១ ទូមានសៀវភៅ ២៤ ក្បាលស្មើគ្នា។ តើមានសៀវភៅសរុបប៉ុន្មានក្បាល?» សិស្សចាប់ដៃគូរកបំរាប់ សំណួរ និងគូសដ្យាក្រាមរបារ ៣ ប្រឡោះស្មើគ្នា (២៤ × ៣ = ៧២ ក្បាល)។',
    step3KeyRule: '• ជំហានទាំង ៤ ក្នុងការដោះស្រាយចំណោទ៖\n  ១. អាន និងស្វែងយល់ប្រធានចំណោទ\n  ២. ស្វែងរកបំរាប់ (ទិន្នន័យប្រាប់) និងសំណួរ (អ្វីដែលត្រូវរក)\n  ៣. គូសដ្យាក្រាមរបារ (Bar Model) បង្កើតប្រមាណវិធីគុណ និងគណនា\n  ៤. ផ្ទៀងផ្ទាត់ចម្លើយ និងសរសេររបៀបឆ្លើយដោយដាក់ខ្នាតឱ្យត្រឹមត្រូវ។',
    step3GroupGame: 'ល្បែងសិក្សា «អ្នកពូកែវិភាគចំណោទ»៖ ក្រុមសិស្សដោះស្រាយលំហាត់ចំណោទក្នុងសៀវភៅសិស្សទំព័រ ៧៦ (កសិករដាំចេក ៤ ជួរ ក្នុង ១ ជួរមាន ១២៥ ដើម ៖ ១២៥ × ៤ = ៥០០ ដើម)។',
    misconceptions: '• សិស្សយកលេខក្នុងប្រធានចំណោទទៅបូកបញ្ចូលគ្នាជំនួសឱ្យការគុណ (ឧ. ២៤ + ៣ = ២៧) ដោយមិនបានគូសដ្យាក្រាមរបារពិនិត្យក្រុមស្មើៗគ្នា។\n• សិស្សភ្លេចបូកលេខត្រាទុកពេលគុណលេខ ២ខ្ទង់ ឬ ៣ខ្ទង់នឹង ១ខ្ទង់ ឬភ្លេចសរសេរខ្នាតនៅក្នុងរបៀបឆ្លើយ។',
    step4Practice: 'ឱ្យសិស្សដោះស្រាយលើក្ដារឆ្នួន៖ «សិស្សម្នាក់ទិញសៀវភៅ ៥ ក្បាល ក្នុង ១ ក្បាលថ្លៃ ៨០០ រៀល។ តើត្រូវចំណាយប្រាក់សរុបប៉ុន្មានរៀល?» (៨០០ × ៥ = ៤ ០០០ រៀល)។',
    step5Homework: 'ធ្វើលំហាត់ចំណោទដែលនៅសល់ក្នុងសៀវភៅសិស្សថ្នាក់ទី៣ ទំព័រ ៧៦ ចូលក្នុងសៀវភៅសរសេរ។',
    barA: 48,
    barB: 24,
    placeNum: 500,
  },
];

export const SAMPLE_PASTES = {
  'g3-len': '១ម៉\nសស. មេ. ៥៖ ប្រវែង ការប្តូរខ្នាតប្រវែង (ទំ.៣៦)\nសគ. ជំ.៥ មេ.១៖ សកម្ម. ទី៨ (ទំ.២៥៧-២៥៨)',
  'g2-weight': '១ម៉\nសស. មេ. ៩៖ ទម្ងន់ ការប៉ាន់ស្មាននិងប្រៀបធៀបទម្ងន់ធៀបនឹង១គីឡូក្រាម (ទំ.៦១)\nសគ. ជំ.២ មេ.២៖ សកម្ម. ទី៣ (ទំ.២៥១-២៥២)',
  'g1-geo': '១ម៉\nសស. មេ. ៩៖ ធរណីមាត្រ ចំណុច បន្ទាត់ ខ្សែកោង ខ្សែកាច់ (ទំ.៤៨)\nសគ. ជំ.៣ មេ.១៖ សកម្ម. ទី៣ (ទំ.២៨៨-២៨៩)',
};

export function resolveGradeAndTocEntry(explicitGrade: string | null, lessonNumInt: number | null, ssPageInt: number | null, rawText: string) {
  let candidates = OFFICIAL_TOC_DB;
  if (explicitGrade) {
    candidates = candidates.filter((c) => c.grade === explicitGrade);
  }

  let bestMatch: TocEntry | null = null;
  let bestScore = -1;

  for (let i = 0; i < candidates.length; i++) {
    const entry = candidates[i];
    let score = 0;
    if (lessonNumInt !== null && entry.lesson === lessonNumInt) {
      score += 5;
    }
    if (ssPageInt !== null && ssPageInt >= entry.pStart && ssPageInt <= entry.pEnd) {
      score += 6;
    }
    if (rawText.includes(entry.title)) {
      score += 8;
    } else {
      const firstWord = entry.title.split(' ')[0];
      if (firstWord && firstWord.length >= 3 && rawText.includes(firstWord)) {
        score += 4;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore >= 5 ? bestMatch : null;
}

export function parseSmartScheduleInput(rawText: string) {
  const cleaned = String(rawText || '').replace(/^\s*\(|\)\s*$/g, '').trim();

  let explicitGrade: string | null = null;
  if (/ថ្នាក់ទី\s*[១1]|G1/i.test(cleaned)) explicitGrade = '១';
  else if (/ថ្នាក់ទី\s*[២2]|G2/i.test(cleaned)) explicitGrade = '២';
  else if (/ថ្នាក់ទី\s*[៣3]|G3/i.test(cleaned)) explicitGrade = '៣';
  else if (/ថ្នាក់ទី\s*[៤4]|G4/i.test(cleaned)) explicitGrade = '៤';
  else if (/ថ្នាក់ទី\s*[៥5]|G5/i.test(cleaned)) explicitGrade = '៥';
  else if (/ថ្នាក់ទី\s*[៦6]|G6/i.test(cleaned)) explicitGrade = '៦';

  const durMatch = cleaned.match(/([០-៩0-9]+)\s*ម៉(?:ោង)?/);
  const hoursInt = durMatch ? khmerToArabicInt(durMatch[1]) : 1;
  const durationStr = hoursInt === 2 ? '២ម៉ោងសិក្សា (៨០ នាទី)' : '១ម៉ោងសិក្សា (៤០ នាទី)';

  let ssLine = '';
  let sgLine = '';
  const lines = cleaned.split(/\n+/);
  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i].trim();
    if (/ស\.?ស\.?|សៀវភៅសិស្ស/.test(ln)) ssLine = ln;
    else if (/ស\.?គ\.?|ស\.?គ្រូ|សៀវភៅ(?:ណែនាំ)?គ្រូ/.test(ln)) sgLine = ln;
  }
  if (!ssLine && /ស\.?ស\.?/.test(cleaned)) {
    const mSs = cleaned.match(/(ស\.?ស\.?[^\n]*?)(?=ស\.?គ\.?|ស\.?គ្រូ|$)/);
    if (mSs) ssLine = mSs[1].trim();
  }
  if (!sgLine && /(ស\.?គ\.?|ស\.?គ្រូ)/.test(cleaned)) {
    const mSg = cleaned.match(/((?:ស\.?គ\.?|ស\.?គ្រូ)[^\n]*)/);
    if (mSg) sgLine = mSg[1].trim();
  }
  if (!ssLine) ssLine = cleaned;

  const ssLessonMatch = ssLine.match(/មេ(?:រៀន(?:ទី)?)?\.?\s*([០-៩0-9]+)/);
  const ssLessonInt = ssLessonMatch ? khmerToArabicInt(ssLessonMatch[1]) : null;

  const ssPageMatch = ssLine.match(/\(?ទំ(?:ព័រ)?\.?\s*([០-៩0-9]+(?:\s*[-–ដល់]\s*[០-៩0-9]+)?)\)?/);
  const ssPageStr = ssPageMatch ? ssPageMatch[1].trim() : '';
  const ssPageInt = ssPageStr ? khmerToArabicInt(ssPageStr) : null;

  const rawSsBody = ssLine
    .replace(/^.*?ស\.?ស\.?\s*/i, '')
    .replace(/^មេ(?:រៀន(?:ទី)?)?\.?\s*[០-៩0-9]+\s*(?:\(ត\))?\s*[៖:]?\s*/i, '')
    .replace(/\(?ទំ(?:ព័រ)?\.?\s*[០-៩0-9]+(?:\s*[-–ដល់]\s*[០-៩0-9]+)?\)?/g, '')
    .replace(/[()]/g, '')
    .trim();

  const tgChapMatch = sgLine.match(/ជំ(?:ពូក(?:ទី)?)?\.?\s*([០-៩0-9]+)/);
  const tgChapStr = tgChapMatch ? intToKhmer(khmerToArabicInt(tgChapMatch[1])) : '';

  const tgLesMatch = sgLine.match(/មេ(?:រៀន(?:ទី)?)?\.?\s*([០-៩0-9]+(?:\.[០-៩0-9]+)?)/);
  const tgLesStr = tgLesMatch ? tgLesMatch[1].trim() : '';

  const tgActMatch = sgLine.match(/សកម្ម(?:ភាព)?\.?\s*(?:ទី)?\s*([០-៩0-9]+)/);
  const tgActInt = tgActMatch ? khmerToArabicInt(tgActMatch[1]) : 1;
  const tgActKh = intToKhmer(tgActInt);

  const tgPageMatch = sgLine.match(/\(?ទំ(?:ព័រ)?\.?\s*([០-៩0-9]+(?:\s*[-–ដល់]\s*[០-៩0-9]+)?)\)?/);
  const tgPageStr = tgPageMatch ? tgPageMatch[1].trim() : '';

  const tocMatch = resolveGradeAndTocEntry(explicitGrade, ssLessonInt, ssPageInt, cleaned);
  const resolvedGrade = explicitGrade || (tocMatch ? tocMatch.grade : '៣');
  const officialLessonNumKh = ssLessonInt !== null ? intToKhmer(ssLessonInt) : tocMatch ? intToKhmer(tocMatch.lesson) : '៥';
  let officialTocTitle = tocMatch ? tocMatch.title : '';

  let subTopicTitle = rawSsBody;
  if (officialTocTitle && rawSsBody.startsWith(officialTocTitle)) {
    const remainder = rawSsBody.slice(officialTocTitle.length).replace(/^[៖:\s\-–]+/, '').trim();
    subTopicTitle = remainder || officialTocTitle;
  } else if (!officialTocTitle && rawSsBody) {
    const parts = rawSsBody.split(/\s+/);
    if (parts.length >= 2) {
      officialTocTitle = parts[0];
      subTopicTitle = parts.slice(1).join(' ');
    } else {
      officialTocTitle = rawSsBody;
      subTopicTitle = rawSsBody;
    }
  }
  if (!officialTocTitle) officialTocTitle = 'ប្រវែង';
  if (!subTopicTitle) subTopicTitle = officialTocTitle;

  const finalSsPage = ssPageStr || (tocMatch ? intToKhmer(tocMatch.pStart) : '៣៦');
  const finalTgPage = tgPageStr || '២៥៧-២៥៨';

  let tgCodePrefix = '';
  if (tgChapStr && tgLesStr) {
    tgCodePrefix = `ជំ.${tgChapStr} មេ.${tgLesStr} (មេ. ${tgChapStr}.${tgLesStr})`;
  } else if (tgLesStr) {
    tgCodePrefix = `មេ. ${tgLesStr}`;
  } else {
    tgCodePrefix = `មេ. ${officialLessonNumKh}.១`;
  }

  const stdLevel = (tgActInt || 1) >= 4 ? 'កម្រិតស្ដង់ដារសកម្មភាពទី២' : 'កម្រិតស្ដង់ដារសកម្មភាពទី១';

  return {
    grade: resolvedGrade,
    duration: durationStr,
    lessonNumKh: officialLessonNumKh,
    officialTocTitle,
    subTopicTitle,
    ssPage: finalSsPage,
    tgCodePrefix,
    tgActKh,
    tgActInt,
    tgPage: finalTgPage,
    standardLevel: stdLevel,
    rawText: cleaned,
  };
}
