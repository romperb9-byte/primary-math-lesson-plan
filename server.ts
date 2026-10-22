import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

// API endpoint for generating MoEYS Primary Mathematics Lesson Plan
app.post('/api/generate-lesson-plan', async (req, res) => {
  try {
    const { prompt, grade, lessonTitle, subTopic, duration, school, teacher } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(200).json({
        success: false,
        source: 'offline',
        message: 'No GEMINI_API_KEY configured on server. Using built-in high standard curriculum engine.',
      });
    }

    const systemInstruction = `
អ្នកគឺជាអ្នកជំនាញជាន់ខ្ពស់ក្នុងការរៀបចំកិច្ចតែងការបង្រៀនគណិតវិទ្យាថ្នាក់បឋមសិក្សា (ថ្នាក់ទី១ ដល់ ទី៦) នៃក្រសួងអប់រំ យុវជន និងកីឡា (MoEYS) ប្រទេសកម្ពុជា ស្របតាមស្ដង់ដារកញ្ចប់គណិតវិទ្យាថ្នាក់ដំបូង (STEPCam / MCAS)។
ត្រូវបង្កើតទិន្នន័យកិច្ចតែងការបង្រៀនជា JSON Object សុទ្ធ ហាមបន្ថែមអក្សរ markdown ឬពាក្យពន្យល់ក្រៅពី JSON។

រចនាសម្ព័ន្ធ JSON ដែលត្រូវបញ្ជូនត្រឡប់៖
{
  "grade": "ថ្នាក់ទី (១, ២, ៣, ៤, ៥, ឬ ៦)",
  "duration": "រយៈពេល ឧ. ១ម៉ោងសិក្សា (៤០ នាទី)",
  "school": "ឈ្មោះសាលាបឋមសិក្សា",
  "teacher": "ឈ្មោះគ្រូបង្រៀន",
  "mainLesson": "មេរៀនទី...៖ [ចំណងជើង] (សស. ទំព័រ ...)",
  "subTopic": "ខ្លឹមសាររង៖ [កូដជំ.មេ] [ចំណងជើងរង] (ស.គ្រូ ទំព័រ ...)",
  "expectedOutcome": "លទ្ធផលរំពឹងទុកទី...៖ សិស្ស...",
  "activityTitle": "សកម្មភាពទី...៖ [ចំណងជើងសកម្មភាព] ទំព័រ ... (សៀវភៅណែនាំគ្រូ)",
  "standardLevel": "កម្រិតស្ដង់ដារសកម្មភាពទី១ ឬ កម្រិតស្ដង់ដារសកម្មភាពទី២",
  "objKnowledge": "វិជ្ជាសម្បទា៖ សិស្សប្រាប់បានពី...",
  "objSkill": "បំណិនសម្បទា៖ សិស្សអនុវត្តគណនា/វាស់វែង...",
  "objAttitude": "ចរិយាសម្បទា៖ សិស្សមានស្មារតី...",
  "matTeacher": "សម្ភារៈសម្រាប់គ្រូ (បន្ទាត់ម៉ែត្រ បាច់បំពង់បឺត បន្ទះតម្លៃខ្ទង់ ដ្យាក្រាមរបារ Bar Model បណ្ណសញ្ញាចរាចរ បៃតង/ក្រហម)",
  "matStudent": "សម្ភារៈសម្រាប់សិស្ស (ក្ដារឆ្នួន ហ្វឺត/ដីស សៀវភៅសិស្ស សៀវភៅជំនួយ)",
  "step2Review": "ជំហានទី២ (៧នាទី)៖ សំណួរ/លំហាត់រំឭកមេរៀនចាស់ និងការភ្ជាប់ទំនាក់ទំនងទៅមេរៀនថ្មី",
  "step3PairWork": "ជំហានទី៣ (២០នាទី) - ១. ការងារដៃគូ និងការប្រើប្រាស់សម្ភាររូបី",
  "step3KeyRule": "ជំហានទី៣ - ២. ខ្លឹមសារគន្លឹះ / វិធានគណិតវិទ្យា / តារាងសំយោគ / របារ Bar Model",
  "step3GroupGame": "ជំហានទី៣ - ការងារក្រុម និងល្បែងសិក្សាគណិតវិទ្យា",
  "misconceptions": "ជំហានទី៣ - ៣. កំហុស និងគំនិតភាន់ច្រឡំរបស់សិស្ស ព្រមទាំងវិធីជួយកែតម្រូវ (Remedial Support)",
  "step4Practice": "ជំហានទី៤ (៧នាទី)៖ លំហាត់ពង្រឹងចំណេះដឹងលើក្ដារឆ្នួន និងការវាយតម្លៃដោយបណ្ណសញ្ញាចរាចរ (បៃតង=ត្រូវ, ក្រហម=ខុស)",
  "step5Homework": "ជំហានទី៥ (៣នាទី)៖ កិច្ចការផ្ទះក្នុងសៀវភៅសិស្ស និងបណ្ដាំផ្ញើអប់រំសុវត្ថិភាពចរាចរណ៍/អនាម័យ",
  "barA": 200,
  "barB": 35,
  "placeNum": 235
}
`;

    const userPrompt = `
សូមបង្កើតកិច្ចតែងការបង្រៀនគណិតវិទ្យាផ្លូវការលម្អិត៖
- កម្រិតថ្នាក់៖ ${grade || 'ថ្នាក់ទី៣'}
- ចំណងជើងមេរៀន៖ ${lessonTitle || ''}
- ខ្លឹមសាររង/សកម្មភាព៖ ${subTopic || ''}
- រយៈពេល៖ ${duration || '១ម៉ោងសិក្សា (៤០ នាទី)'}
- សាលារៀន៖ ${school || 'សាលាបឋមសិក្សាថ្លុកបង្កោ'}
- គ្រូបង្រៀន៖ ${teacher || 'លោកគ្រូ វិចិត្រ សន'}
- ព័ត៌មានបន្ថែមពីកាលវិភាគ/Prompt៖ ${prompt || ''}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: 'application/json',
        temperature: 0.3,
      },
    });

    const text = response.text || '';
    const cleaned = text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
    const data = JSON.parse(cleaned);

    return res.json({
      success: true,
      source: 'gemini',
      data,
    });
  } catch (error: any) {
    console.error('Error generating lesson plan:', error);
    return res.status(200).json({
      success: false,
      source: 'error',
      message: error?.message || 'Failed to generate with AI API',
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(process.env.GEMINI_API_KEY),
    time: new Date().toISOString(),
  });
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
