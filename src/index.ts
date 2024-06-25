import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/userRoutes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || "0.0.0.0";

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.json());

app.use("/users", router);
app.get("/", (req, res) => {
  res.send("hi hi")
})

app.listen(port, () => {
  console.log("app listening on port", port);
});
