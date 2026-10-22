import { intToKhmer } from '../data/curriculumData';

const KHMER_DAYS = [
  'ថ្ងៃអាទិត្យ',
  'ថ្ងៃចន្ទ',
  'ថ្ងៃអង្គារ',
  'ថ្ងៃពុធ',
  'ថ្ងៃព្រហស្បតិ៍',
  'ថ្ងៃសុក្រ',
  'ថ្ងៃសៅរ៍',
];

const KHMER_MONTHS = [
  'មករា',
  'កុម្ភៈ',
  'មីនា',
  'មេសា',
  'ឧសភា',
  'មិថុនា',
  'កក្កដា',
  'សីហា',
  'កញ្ញា',
  'តុលា',
  'វិច្ឆិកា',
  'ធ្នូ',
];

const LUNAR_ANIMALS = [
  'ជូត',
  'ឆ្លូវ',
  'ខាល',
  'ថោះ',
  'រោង',
  'ម្សាញ់',
  'មមី',
  'មមែ',
  'វក',
  'រកា',
  'ច',
  'កុរ',
];

const KHMER_LUNAR_MONTHS = [
  'មិគសិរ',
  'បុស្ស',
  'មាឃ',
  'ផល្គុន',
  'ចេត្រ',
  'ពិសាខ',
  'ជេស្ឋ',
  'អាសាឍ',
  'ស្រាពណ៍',
  'ភទ្របទ',
  'អស្សុជ',
  'កត្តិក',
];

/**
 * Returns current solar date in standard MoEYS format:
 * ឧ. «ថ្លុកបង្កោ, ថ្ងៃព្រហស្បតិ៍ ទី២២ ខែតុលា ឆ្នាំ២០២៦»
 */
export function getCurrentSolarDate(locationPrefix = 'ថ្លុកបង្កោ', date: Date = new Date()): string {
  const dayName = KHMER_DAYS[date.getDay()];
  const dayNumKh = intToKhmer(date.getDate());
  const monthName = KHMER_MONTHS[date.getMonth()];
  const yearKh = intToKhmer(date.getFullYear());

  return `${locationPrefix}, ${dayName} ទី${dayNumKh} ខែ${monthName} ឆ្នាំ${yearKh}`;
}

/**
 * Approximate astronomical lunar phase calculator for Cambodia
 * Returns accurate Buddhist Era (ពុទ្ធសករាជ) and Lunar Phase (ខ្នើត/រោច):
 * ឧ. «ថ្ងៃព្រហស្បតិ៍ ១១កើត ខែអស្សុជ ឆ្នាំមមី ព.ស. ២៥៧០»
 */
export function getCurrentLunarDate(date: Date = new Date()): string {
  const dayName = KHMER_DAYS[date.getDay()];
  
  // Buddhist Era (BE) is Solar Year + 544 after Visakha Puja (approx May)
  const gregorianYear = date.getFullYear();
  const beYear = gregorianYear + (date.getMonth() >= 4 ? 544 : 543);
  const beYearKh = intToKhmer(beYear);

  // Zodiac animal: 2026 is Year of Horse (មមី)
  // 4 AD was Rat (ជូត)
  const animalIndex = (gregorianYear - 4) % 12;
  const animal = LUNAR_ANIMALS[(animalIndex + 12) % 12];

  // Synodic lunar month calculation (29.53058867 days)
  // Reference known new moon: Jan 11, 2024 (11:57 UTC)
  const refNewMoonMs = Date.UTC(2024, 0, 11, 11, 57, 0);
  const currentMs = date.getTime();
  const diffDays = (currentMs - refNewMoonMs) / (1000 * 60 * 60 * 24);
  const synodicMonth = 29.53058867;
  const cycleFraction = (diffDays % synodicMonth + synodicMonth) % synodicMonth;

  let lunarDay: number;
  let phaseName: string;
  if (cycleFraction < 14.765) {
    lunarDay = Math.max(1, Math.min(15, Math.floor(cycleFraction) + 1));
    phaseName = `${intToKhmer(lunarDay)}កើត`;
  } else {
    lunarDay = Math.max(1, Math.min(15, Math.floor(cycleFraction - 14.765) + 1));
    phaseName = `${intToKhmer(lunarDay)}រោច`;
  }

  // Lunar Month corresponding to Gregorian month approx
  // In Khmer calendar, Ashwayuja (អស្សុជ) is approx October, Kartika (កត្តិក) is Nov
  const lunarMonthIdx = (date.getMonth() + 1) % 12;
  const lunarMonthName = KHMER_LUNAR_MONTHS[lunarMonthIdx] || 'អស្សុជ';

  return `${dayName} ${phaseName} ខែ${lunarMonthName} ឆ្នាំ${animal} ព.ស. ${beYearKh}`;
}
