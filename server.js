const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);
app.get('https://task-lcm.onrender.com/sheikhmijanurrahmanoli_gmail.com?x={}&y={}', (req, res) => {
    const { x, y } = req.query;
    const numX = Number(x);
    const numY = Number(y);

    const isNatural = (n) => Number.isInteger(n) && n > 0;

    if (!isNatural(numX) || !isNatural(numY)) {
        return res.type('text/plain').send('NaN');
    }

    const result = lcm(numX, numY);
    res.type('text/plain').send(result.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});