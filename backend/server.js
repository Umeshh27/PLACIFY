require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

const RAPIDAPI_KEY = process.env.JSEARCH_API_KEY;
const RAPIDAPI_HOST = 'jsearch.p.rapidapi.com';

// Serve frontend files automatically
app.use(express.static(path.join(__dirname, '..')));

app.get('/api/jobs', async (req, res) => {
    try {
        const url = 'https://jsearch.p.rapidapi.com/search?query=developer&num_pages=1';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': RAPIDAPI_HOST
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/internships', async (req, res) => {
    try {
        const url = 'https://jsearch.p.rapidapi.com/search?query=internship&num_pages=1';
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': RAPIDAPI_KEY,
                'X-RapidAPI-Host': RAPIDAPI_HOST
            }
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});
