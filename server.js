// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();
const cookieSession = require("cookie-session");

app.set('view engine', 'ejs');
app.use(express.json({}));

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));
app.use(
  cookieSession({
    name: "session",
    keys: ["LHL", "Desk100"],
    maxAge: 24 * 60 * 60 * 1000
  })
);

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const userApiRoutes = require('./routes/users-api');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const orderHistoryApi = require('./routes/orderhistory-api');
const orderHistory = require('./routes/orderhistory');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');
const logoutRoutes = require('./routes/logout');
const menuApiRoutes = require('./routes/menu-api');
const menuRoutes = require('./routes/menu');
const addItemRoutes = require('./routes/addItem');
const addToCartApiRoutes = require('./routes/addToCart-api');

const orderApiRoutes = require('./routes/order-api');
const orderRoutes = require('./routes/order.js');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/logout', logoutRoutes);
app.use('/api/orderhistory', orderHistoryApi);
app.use('/orderhistory', orderHistory);
app.use('/api/menu', menuApiRoutes);
app.use('/menu', menuRoutes);
app.use('/addItem', addItemRoutes);
app.use('/api/addToCart', addToCartApiRoutes);

app.use('/api/order', orderApiRoutes);
app.use('/order', orderRoutes);

// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  const templateVars = {
    id: req.session.id,
    name: req.session.name
  };

  res.render('menu', templateVars);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});