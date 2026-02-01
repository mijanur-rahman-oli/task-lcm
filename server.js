const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Helper function for GCD (Greatest Common Divisor)
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// Helper function for LCM (Lowest Common Multiple)
const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

// REPLACE 'your_email_com' with your normalized email address
app.get('/your_email_com', (req, res) => {
    const { x, y } = req.query;

    // Validation: Must be present, must be numeric, must be Natural Numbers (integers > 0)
    const numX = Number(x);
    const numY = Number(y);

    const isNatural = (n) => Number.isInteger(n) && n > 0;

    if (!isNatural(numX) || !isNatural(numY)) {
        return res.type('text/plain').send('NaN');
    }

    const result = lcm(numX, numY);
    
    // Send as plain string
    res.type('text/plain').send(result.toString());
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});