import express from 'express';
import cors from 'cors';

import router from './routes/index.route.js';
import notFoundMiddleware from './middlewares/not-found.middleware.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials:true,
    }),
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.status(200).json({
        message: 'EventTicket Backend API is running',
    });
});

app.use('/api/v1', router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;