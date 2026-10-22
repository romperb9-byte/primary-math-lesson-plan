export interface LessonPlan {
  id?: string;
  grade: string; // '១', '២', '៣', '៤', '៥', '៦'
  teacher: string;
  duration: string;
  school: string;
  lunarDate: string;
  solarDate: string;
  mainLesson: string;
  subTopic: string;
  expectedOutcome: string;
  activityTitle: string;
  standardLevel: string; // 'កម្រិតស្ដង់ដារសកម្មភាពទី១' | 'កម្រិតស្ដង់ដារសកម្មភាពទី២'
  objKnowledge: string;
  objSkill: string;
  objAttitude: string;
  matTeacher: string;
  matStudent: string;
  step2Review: string;
  step3PairWork: string;
  step3KeyRule: string;
  step3GroupGame: string;
  misconceptions: string; // ៣. កំហុស និងគំនិតភាន់ច្រឡំ
  step4Practice: string;
  step5Homework: string;
  barA: number;
  barB: number;
  placeNum: number;
  savedAt?: string;
}

export interface TocEntry {
  grade: string;
  lesson: number;
  title: string;
  pStart: number;
  pEnd: number;
}

export interface GradeBookMeta {
  studentBookTitle: string;
  studentBookUrl: string;
  teacherGuideTitle: string;
  teacherGuideUrl: string;
  standardBookTitle: string;
  standardBookUrl: string;
  workbookTitle: string;
  workbookUrl: string;
}

export interface SlideItem {
  num: number;
  tag: string;
  title: string;
  subtitle: string;
  body: string;
  badge: string;
}
