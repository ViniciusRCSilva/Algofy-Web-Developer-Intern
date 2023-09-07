const express = require('express');
const fs = require('fs');
const { Liquid } = require('liquidjs');
const app = express();

/* Start Server */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Read the data from the JSON file
const data = JSON.parse(fs.readFileSync('public/data.json', 'utf-8'));

// Create a Liquid engine instance
const engine = new Liquid();

// Serve static files from a directory
app.use(express.static('public'));

app.get('/', async (req, res) => {
    // Read and render the Liquid template file
    try {
        const templateContent = fs.readFileSync('public/index.liquid', 'utf-8');
        const html = await engine.parseAndRender(templateContent, {
            data: data, // Pass the JSON data to the template
        });

        res.send(html);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});