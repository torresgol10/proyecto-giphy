const authMiddleware = async (req, res, next) => {
  if (req.session.user) {
    next()
  } else {
    res.status(405)
    res.send({ "error": "You must be logged in to access this resource" })
  }
}

export { authMiddleware }