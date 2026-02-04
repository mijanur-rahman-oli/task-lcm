const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));
const lcm = (a, b) => (a === 0n || b === 0n ? 0n : (a * b) / gcd(a, b));

app.get('/sheikhmijanurrahmanoli_gmail_com', (req, res) => {
    const { x, y } = req.query;
    const isNatural = (str) => {
        if (!str || !/^\d+$/.test(str)) return false;
        return true;
    };

    if (!isNatural(x) || !isNatural(y)) {
        return res.type('text/plain').send('NaN');
    }

    try {
        const bigX = BigInt(x);
        const bigY = BigInt(y);
        const result = lcm(bigX, bigY);
        
        res.type('text/plain').send(result.toString());
    } catch (e) {
        res.type('text/plain').send('NaN');
    }
});

app.get('/', (req, res) => res.send('Server is awake!'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));