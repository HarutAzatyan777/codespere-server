// app.mjs
import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from './middleware/auth.mjs';
import routes from './routes/index.mjs';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());

// Initialize Passport and restore authentication state from the session
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Use the routes defined in the routes/index.mjs file
app.use('/', routes);

// Add more routes or middleware as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
