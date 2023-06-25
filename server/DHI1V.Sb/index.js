import express from "express";
import cors from "cors";

import itemRouter from "./routes/itemRouter.js";
import dataAcces from "./db/dataAcces.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/item", itemRouter);
app.use("/api/login", loginRouter);

dataAcces.initializeDatabase();

app.listen(3000);
