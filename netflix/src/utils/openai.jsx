import OpenAI from 'openai';
import { openaikey } from './constants/options';
const openai = new OpenAI({
  apiKey: process.env[openaikey], // This is the default and can be omitted
});

export default openai