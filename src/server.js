import dotenv from 'dotenv';
import app from './app.js';
import connectDatabase from './configs/database/database.config.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})
