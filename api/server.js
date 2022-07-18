import express from 'express';
import bodyParser from 'body-parser';
import session from "express-session";
import 'dotenv/config'

import { userMiddleware } from "./userMiddleware.js"
import { authMiddleware } from "./authMiddleware.js"
import {
  getFavs,
  deleteFav,
  postFav,
  postLogin,
  postRegister
} from "./routes.js"

const DEFAULT_PORT = 8080

const app = express();
const port = DEFAULT_PORT;
const router = express.Router();

app.use(bodyParser.json());

app.use(session({
  "secret": 'keyboard cat',
  "resave": false,
  "saveUninitialized": true
}))

app.use(userMiddleware)

router
  .get('/favs', authMiddleware, getFavs)
  .delete("/favs/:id", authMiddleware, deleteFav)
  .post("/favs/:id", authMiddleware, postFav)
  .post("/login", postLogin)
  .post("/register", postRegister)

app.use(router)

app.listen({ port })
console.log(`Started listening on port: ${port}`)
