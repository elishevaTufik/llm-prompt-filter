import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { OpenAI } from 'openai';
import { loadSystemPrompt } from './utils/loadSystemPrompt.js';
import { validateLLMResponse } from './utils/validateLLMResponse.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/analyze', async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const systemPrompt = await loadSystemPrompt(3);

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: prompt }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages,
      temperature: 0
    });

    const reply = completion.choices[0].message.content.trim();
    console.log('reply', reply)
    // res.send({reply})

    /* Output Validation */
    let parsed;

    try {
      parsed = JSON.parse(reply);
    } catch (err) {
      return res.status(500).json({
        error: 'Failed to parse GPT response as JSON',
        raw: reply
      });
    }

    if (!validateLLMResponse(parsed)) {
      return res.status(500).json({
        error: 'Invalid format in GPT response',
        raw: reply
      });
    }

    res.json(parsed);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal error', details: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Prompt analysis server running on port ${PORT}`);
});
