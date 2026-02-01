const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
};
app.get('/sheikhmijanurrahmanoli_gmail_com', (req, res) => {
    const { x, y } = req.query;
    const nX = Number(x);
    const nY = Number(y);

    const isNatural = (val, raw) => {
        return raw !== undefined && 
               raw.trim() !== '' && 
               Number.isInteger(val) && 
               val > 0;
    };

    if (!isNatural(nX, x) || !isNatural(nY, y)) {
        return res.set('Content-Type', 'text/plain').send('NaN');
    }

    const result = lcm(nX, nY);
    res.set('Content-Type', 'text/plain').send(result.toString());
});

app.get('/', (req, res) => res.send('Server is active'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});