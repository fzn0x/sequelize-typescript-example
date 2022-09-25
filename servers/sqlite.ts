import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import db from "../dialects/sqlite/config/database.config.js";

import * as functions from "../functions/index.js";

// You dont need db.authenticate for sqlite
db.sync().then(() => {
  console.log("Connected to DB.");
});

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Express + Typescript + SQLite server");
});

app.use(functions.TodoRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
