import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import sequelize from "../dialects/sqlite/config/database.config.js";

import * as functions from "../functions/index.js";

// It's should have a better name for connection test in the future
sequelize.authenticate().then(() => {
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
