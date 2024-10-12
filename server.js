import dotenv from 'dotenv';
import express from 'express';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables 1
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

app.post('/api/openai', async (req, res) => {
    const prompt = req.body.prompt;
    if (!prompt) {
        return res.status(400).json({ error: 'The prompt is required' });
    }

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
        });

        res.json({ message: response.choices[0].message.content });
    } catch (error) {
        console.error('Error communicating with OpenAI:', error);
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
});

// API route
app.get('/api', (req, res) => {
    res.json({ message: "Hello, this is the backend" });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

