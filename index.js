const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({ 'message': 'Hello world' });
});

app.get('/health', (req, res) => {
   res.status(200).send('OK');
});

app.listen(3000, _ => console.log('Application is listening on port 3000'));

