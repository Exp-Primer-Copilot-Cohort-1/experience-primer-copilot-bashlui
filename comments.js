// Create a web server
const express = require('express');
//Create a web server
const app = express();
//Create a web server
const path = require('path');
//Create a web server
const bodyParser = require('body-parser');
//Create a web server
const mongoose = require('mongoose');
//Create a web server
const Comment = require('./models/comment');
//Create a web server
const Post = require('./models/post');
//Create a web server
const { body,validationResult } = require('express-validator/check');
//Create a web server
const { sanitizeBody } = require('express-validator/filter');
//Create a web server
const flash = require('express-flash-messages');
//Create a web server
const session = require('express-session');
//Create a web server
const passport = require('passport');
//Create a web server
const LocalStrategy = require('passport-local').Strategy;
//Create a web server
const bcrypt = require('bcryptjs');
//Create a web server
const User = require('./models/user');
//Create a web server
const methodOverride = require('method-override');
//Create a web server
const { ensureAuthenticated } = require('./config/auth');

//Set up default mongoose connection
const mongoDB = 'mongodb://