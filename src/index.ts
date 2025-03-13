import express, { Request, Response } from "express";
import { ExpressAuthMiddleware } from "@sdijeremy/shared";

const port = process.env.PORT || 3000

const app = express();

// Routes
app.get("/", (req: Request, res: Response) => {
  console.log("Hello NodeJS!");
  res.json({ message: "Hello NodeJS!" });
});

app.get("/auth-test", ExpressAuthMiddleware, (req: Request, res: Response) => {
  const user = res.locals.user;
  res.json({ message: "Hello NodeJS!", user });
});

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))

export default app;