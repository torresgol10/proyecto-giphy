import { hashSync, compareSync } from "bcrypt";
import jwtToken from "jsonwebtoken";
import { users } from './users.js';
import { favs } from './favs.js';
import 'dotenv/config'

const header = {
  "algorithm": 'HS256'
};

export const getFavs = async (req, res) => {
  const { username } = req.session.user
  res.status(200)
  res.send({ "favs": favs[username] })
}

export const deleteFav = async (req, res, next) => {
  const { id } = req.params
  const { username } = req.session.user;

  favs[username] = favs[username].filter(
    (favId) => favId !== id
  )

  console.log({
    "idRemoved": id,
    "remainingFavs": favs[username],
    username,
  })

  res.status(200)
  res.send({ "favs": favs[username] })
}

export const postFav = async (req, res) => {
  const { id } = req.params
  const { username } = req.session.user

  const alreadyExist = favs[username].some(
    (favId) => favId === id
  )
  if (!alreadyExist) {
    favs[username].push(id)
  }

  console.log({
    alreadyExist,
    "favs": favs[username],
    username,
  })
  res.status(201)
  res.send({ "favs": favs[username] })
}

export const postLogin = async (req, res) => {
  const { username, password } = req.body || {}

  const user = users.find((u) => u.username === username);
  console.log({ user })
  if (!user) {
    res.status(403)
    res.send({ "error": "User not found" })
  } else if (!compareSync(password, user.password)) {
    res.status(403)
    res.send({ "error": "Password incorrect" })
  } else {
    const payload = {
      "iss": user.username,
      "iat": Date.now() + 1000 * 60 * 60
    };
    const jwt = jwtToken.sign(
      payload,
      process.env.JWT_KEY || '',
      header
    )
    res.status(201)
    res.send({ jwt })
  }
}

export const postRegister = async (req, res) => {
  const { username, password } = req.body || {}
  console.log({ username, password })
  const hashedPassword = hashSync(password, 1);

  const user = {
    username,
    "password": hashedPassword,
  };

  // TODO: Check it doesn't exist yet
  const alreadyExist = users.find(user => user.username === username)
  if (alreadyExist) {
    res.status(409)
    res.send({ "error": "User already exists" })
  } else {
    users.push(user);
    // initialize the user favs
    favs[username] = [];
    res.status(201)
    res.send({ "user": user })
  }
}