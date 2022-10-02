import express from 'express';
const app = express()

app.get('/', (req, res) => {
    res.send('200');
});

app.listen(300, () => {
    console.log('server running on port 300');
})