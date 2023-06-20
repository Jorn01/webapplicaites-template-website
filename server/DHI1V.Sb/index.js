import express from "express";
import cors from "cors";

import classesRouter from "./routes/classesRouter.js";
import dataAcces from "./db/dataAcces.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/classes", classesRouter);
// app.use("/api/students", studentsRouter);

dataAcces.initializeDatabase();

app.listen(3000);
