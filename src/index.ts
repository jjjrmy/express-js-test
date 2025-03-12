import express, { Request, Response } from "express";
import { AuthMiddleware } from "@sdijeremy/shared";

const app = express();

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello NodeJS!" });
});

app.get("/auth-test", AuthMiddleware, (req: Request, res: Response) => {
  const user = res.locals.user;
  res.json({ message: "Hello NodeJS!", user });
});
