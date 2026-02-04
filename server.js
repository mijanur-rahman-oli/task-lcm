const express = require('express'); 
const app = express(); 
const PORT = process.env.PORT || 3000;

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b); 
const lcm = (a, b) => Math.floor(Math.abs(a * b) / gcd(a, b));

app.get('/sheikhmijanurrahmanoli_gmail_com', (req, res) => {
    res.setHeader('Content-Type', 'text/plain'); 
    const { x, y } = req.query;
    
    const isNatural = (v) => {
        if (!v || v.trim() === '') return false;
        if (!/^\d+$/.test(v)) return false;
        const n = Number(v);
        return Number.isInteger(n) && n > 0 && v === n.toString();
    };
    
    if (!isNatural(x) || !isNatural(y)) return res.send('NaN');
    
    const r = lcm(Number(x), Number(y)); 
    res.send(r.toString());
});

app.get('/', (req, res) => res.send('ok')); 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));