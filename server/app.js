if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const app = express();
app.listen(process.env.BACKEND_PORT, () => {
    console.log(`BACKEND STARTED ON PORT: ${process.env.BACKEND_PORT}`);
})