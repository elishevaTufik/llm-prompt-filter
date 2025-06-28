import fs from 'fs/promises';
import path from 'path';

export async function loadSystemPrompt(level) {
  const promptPath = path.resolve(`prompts/level-${level}.md`);
  const content = await fs.readFile(promptPath, 'utf-8');
  return content.trim();
}
