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
exports.userMiddleware = void 0;
require("dotenv/config");
const jsonwebtoken_1 = require("jsonwebtoken");
const users_1 = require("./users");
const userMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get JWT from request if available
    const { value = {} } = yield req.body;
    let { jwt } = value;
    if (!jwt) {
        jwt = req.headers.Authorization;
    }
    console.log('using: ', { jwt });
    // If JWT is not available, go to next middleware
    if (jwt) {
        // Validate JWT and if it is invalid delete from cookie
        const data = (0, jsonwebtoken_1.verify)(jwt, process.env.JWT_KEY);
        if (!data.isValid || data.isExpired) {
            res.clearCookie("jwt");
            res.status(401);
        }
        else if (data) {
            // If it is valid select user and save in context state
            const user = users_1.users.find((u) => u.username === data.payload.iss);
            req.session.user = user;
            console.log('found', { user });
            next();
        }
        else {
            res.clearCookie('jwt');
            next();
        }
    }
    else {
        req.session.user = null;
        next();
    }
});
exports.userMiddleware = userMiddleware;
//# sourceMappingURL=userMiddleware.js.map