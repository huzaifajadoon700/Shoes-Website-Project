

import { signupmodel } from '../models/signup.js';
import bcrypt from 'bcrypt';
import JWT from 'jsonwebtoken';

export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await signupmodel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const verifiedPassword = await bcrypt.compare(password, user.password);
    if (!verifiedPassword) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    // Password is correct, generate and send the token
    const token = JWT.sign({ _id: user._id }, 'private');
    // const tok = localStorage.header
    res.header('auth-token', token).json({ token, message: 'Sign-in successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};






// // controllers/signin.js
// import { signupmodel } from '../models/signup.js';

// export const signIn = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await signupmodel.findOne({ email, password });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // You may want to implement token-based authentication here

//     res.status(200).json({ message: 'Sign-in successful', user });
//   } catch (error) {
//     res.status(500).json({ message: 'Internal server error' });
//   }
// };