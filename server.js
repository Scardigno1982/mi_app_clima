const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/clima', async (req, res) => {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=La+Plata,ar&appid=2738bc37bdde4a65ad952f1b6678135a');
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error al obtener el clima.');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
