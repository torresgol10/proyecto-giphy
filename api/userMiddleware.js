import 'dotenv/config'

import jsonwebtoken from "jsonwebtoken"
import { users } from "./users.js";

const userMiddleware = async (req, res, next) => {
  // Get JWT from request if available
  let { jwt } = req.body

  if (!jwt) {
    jwt = req.headers.authorization
  }
  //console.log('using: ', {jwt})

  // If JWT is not available, go to next middleware
  if (jwt) {
    // Validate JWT and if it is invalid delete from cookie
    const data = jsonwebtoken.verify(jwt, process.env.JWT_KEY);

    if (!data) {
      res.clearCookie("jwt");
      res.status(401)
    } else if (data) {
      // If it is valid select user and save in context state
      const user = users.find((u) => u.username === data.iss);

      req.session.user = user;
      console.log('found', { user })
      next();
    } else {
      res.clearCookie('jwt');
      next();
    }
  } else {
    req.session.user = null;
    next();
  }
}

export { userMiddleware };