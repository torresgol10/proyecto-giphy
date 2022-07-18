"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRegister = exports.postLogin = exports.postFav = exports.deleteFav = exports.getFavs = void 0;
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const users_1 = require("./users");
const favs_1 = require("./favs");
require("dotenv/config");
/* tslint:disable */
const header = {
    "alg": 'HS256',
    "typ": 'JWT'
};
const getFavs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username } = req.session.user;
    res.status(200);
    res.send({ "favs": favs_1.favs[username] });
});
exports.getFavs = getFavs;
const deleteFav = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username } = req.session.user;
    favs_1.favs[username] = favs_1.favs[username].filter((favId) => favId !== id);
    console.log({
        "idRemoved": id,
        "remainingFavs": favs_1.favs[username],
        username,
    });
    res.status(200);
    res.send({ "favs": favs_1.favs[username] });
});
exports.deleteFav = deleteFav;
const postFav = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username } = req.session.user;
    const alreadyExist = favs_1.favs[username].some((favId) => favId === id);
    if (!alreadyExist) {
        favs_1.favs[username].push(id);
    }
    console.log({
        alreadyExist,
        "favs": favs_1.favs[username],
        username,
    });
    res.status(201);
    res.send({ "favs": favs_1.favs[username] });
});
exports.postFav = postFav;
const postLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { value } = yield req.body();
    const { username, password } = value;
    const user = users_1.users.find((u) => u.username === username);
    if (!user) {
        res.status(403);
    }
    else if (!(0, bcrypt_1.compareSync)(password, user.password)) {
        res.status(403);
    }
    else {
        const payload = {
            "iss": user.username,
            "iat": Date.now() + 1000 * 60 * 60
        };
        const jwt = jsonwebtoken_1.default.sign(payload, process.env.JWT_KEY || '', header);
        res.status(201);
        res.send({ jwt });
    }
});
exports.postLogin = postLogin;
const postRegister = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { value } = yield req.body();
    const { username, password } = value;
    const hashedPassword = (0, bcrypt_1.hashSync)(password, 1);
    const user = {
        username,
        "password": hashedPassword,
    };
    // TODO: Check it doesn't exist yet
    const alreadyExist = users_1.users.find(user => user.username === username);
    if (alreadyExist) {
        res.status(409);
    }
    else {
        users_1.users.push(user);
        // initialize the user favs
        favs_1.favs[username] = [];
        res.status(201);
    }
});
exports.postRegister = postRegister;
//# sourceMappingURL=routes.js.map