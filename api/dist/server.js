"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_session_1 = require("express-session");
require("dotenv/config");
const userMiddleware_1 = require("./userMiddleware");
const authMiddleware_1 = require("./authMiddleware");
const routes_1 = require("./routes");
const DEFAULT_PORT = 8080;
const app = (0, express_1.default)();
const port = DEFAULT_PORT;
const router = express_1.default.Router();
app.use((0, express_session_1.default)({
    "secret": 'keyboard cat',
    "resave": false,
    "saveUninitialized": true
}));
app.use(userMiddleware_1.userMiddleware);
router
    .get('/favs', authMiddleware_1.authMiddleware, routes_1.getFavs)
    .delete("/favs/:id", authMiddleware_1.authMiddleware, routes_1.deleteFav)
    .post("/favs/:id", authMiddleware_1.authMiddleware, routes_1.postFav)
    .post("/login", routes_1.postLogin)
    .post("/register", routes_1.postRegister);
app.use(router);
app.listen({ port });
console.log(`Started listening on port: ${port}`);
//# sourceMappingURL=server.js.map