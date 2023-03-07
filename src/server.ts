import express, {Request, Response} from 'express';

const app = express();

app.use(express.json());

app.use('/', (request: Request, response: Response) => {
    response.json({
        'message' : 'Hello World'
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
