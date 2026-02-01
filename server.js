const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));


const lcm = (a, b) => {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / gcd(a, b);
};

app.get('/sheikhmijanurrahmanoli_gmail_com', (req, res) => {

    res.setHeader('Content-Type', 'text/plain');

    const { x, y } = req.query;


    const isValidNatural = (val) => {
        const n = Number(val);
        return val !== '' && val !== null && Number.isInteger(n) && n > 0;
    };

    if (!isValidNatural(x) || !isValidNatural(y)) {
        return res.send('NaN');
    }

    const result = lcm(Number(x), Number(y));
    

    res.send(result.toString());
});


app.get('/', (req, res) => res.send('Alive'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});