const { verifyToken } = require('../utils/token');

const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }
  
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
  
  req.user = decoded;
  next();
};

module.exports = authMiddleware;
