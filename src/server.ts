import express from "express";
import cors from 'cors';
import { routes } from './routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
