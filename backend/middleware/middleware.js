


import JWT from "jsonwebtoken";

export const authorizetoken = (req, res, next) => {
  console.log('Authorizing token...');
  const token = req.header('auth-token');
  console.log('Received Token:', token);
  
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ error: 'Access denied. Token not provided.' });
  }

  try {
    const verifiedToken = JWT.verify(token, 'private'); // Make sure to use the correct secret key
    req.user = verifiedToken; // Attach the user object to the request for later use
    console.log('Token verified');
    next();
  } catch (error) {
    console.error('Invalid token:', error);
    res.status(400).json({ error: 'Invalid token.' });
  }
};


