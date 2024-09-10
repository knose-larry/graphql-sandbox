import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3015;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Node.js app! along with typescript');
});

app.listen(port, () => {
  console.log(`Node.js app listening on port ${port}`);
});