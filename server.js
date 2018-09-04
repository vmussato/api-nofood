const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Hello World');
});

app.listen(3000, () => {
    console.log('Server Running on port 3000');
});