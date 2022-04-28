const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const port = process.env.PORT || 3001;
const path = require('path');

const app = express();

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(port, () => console.log(`Now listening on ${port}`));