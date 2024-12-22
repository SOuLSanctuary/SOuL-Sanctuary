const express = require('express');
const { getUserData } = require('shared/user');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/user/:publicKey', async (req, res) => {
    const publicKey = req.params.publicKey;
    try {
        const userData = await getUserData(publicKey);
        res.json(userData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Collector app listening at http://localhost:${port}`);
});