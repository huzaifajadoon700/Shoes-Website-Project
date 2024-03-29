// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: '498092527246-3kt38e95trqfpbdenjbe7eseueb6u0r4.apps.googleusercontent.com',
//       clientSecret: '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',
//       callbackURL: 'http://localhost:8000', // Adjust the URL based on your setup
//     },
//     (accessToken, refreshToken, profile, done) => {
//       // Profile object contains Google user information
//       return done(null, profile);
//     }
//   )
// );

// passport.serializeUser((user, done) => {
//   // Serialize user information to store in the session
//   done(null, user);
// });

// passport.deserializeUser((obj, done) => {
//   // Deserialize user information from the session
//   done(null, obj);
// });

// module.exports = passport;


const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const express = require('express');
const googleAuth = require('../dal/google-auth.dal');
const router = express.Router();
require('dotenv').config();

let userProfile;
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      return done(null, userProfile);
    }
  )
);

// request at /auth/google, when user click sign-up with google button transferring
// the request to google server, to show emails screen
router.get(
  '/',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// URL Must be same as 'Authorized redirect URIs' field of OAuth client, i.e: /auth/google/callback
router.get(
  '/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/error' }),
  (req, res) => {
    res.redirect('/auth/google/success'); // Successful authentication, redirect success.
  }
);

router.get('/success', async (req, res) => {
  const { failure, success } = await googleAuth.registerWithGoogle(userProfile);
  if (failure) console.log('Google user already exist in DB..');
  else console.log('Registering new Google user..');
  res.render('success', { user: userProfile });
});

router.get('/error', (req, res) => res.send('Error logging in via Google..'));

router.get('/signout', (req, res) => {
  try {
    req.session.destroy(function (err) {
      console.log('session destroyed.');
    });
    res.render('auth');
  } catch (err) {
    res.status(400).send({ message: 'Failed to sign out user' });
  }
});

module.exports = router;