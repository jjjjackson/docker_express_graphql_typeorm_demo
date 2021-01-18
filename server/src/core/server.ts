import express from 'express';

const app: express.Application = express();
const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});
