import express from "express";
import postRoute from "./routes/posts.js";
import signupRoute from "./routes/signup.js";
import loginRoute from "./routes/login.js";
import { sequelize } from "./db/database.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//json 불러오기
app.use(express.json());

//cookieParser
app.use(cookieParser());

//env
const connection = process.env;

//미들웨어연결
app.use("/posts", postRoute);
app.use("/login", loginRoute);
app.use("/signup", signupRoute);

//db연결
sequelize.sync({ force: false }).then(() => {
  console.log(`Server connecting on mysql`);
});

//서버연결
app.listen(connection.HOST_PORT, () =>
  console.log(`Server listening on port ${connection.HOST_PORT}`)
);
