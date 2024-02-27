// middleware/auth.mjs
import passport from 'passport';
import GoogleStrategy  from 'passport-google-oauth20';
import 'dotenv/config';

// Set up passport to use Google authentication
passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
  
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      (accessToken, refreshToken, profile, done) => {
        // The user profile is available here
        return done(null, profile);
      }
    )
  );
  
  export default passport;