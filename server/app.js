const express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  path = require('path'),
  passport = require('passport');
  config = require('./config/main'),
  morgan = require('morgan');

var app = express();
var http = require('http').Server(app);

const io = require('socket.io')(http)
const route = require('./routes/route');

app.use(cors());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(morgan('dev'));
app.use(bodyParser.json({'limit':'50mb'}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
mongoose.connect(config.database, { useNewUrlParser: true, 'useCreateIndex': true });
require('./config/passport')(passport);
mongoose.connection.on('connected', () => console.log('connected to db @ 27017'))
mongoose.connection.on('error', (err) => {
  if (err) {
    console.log('connection error', err)
  }
  else {
    console.log('')
  }
});

app.use(route);
app.get('/',(req,res)=>{
  console.log('working');
  res.send('working');
})

// const port = process.env.PORT || 8080;
const port = 3100;

io.on('connection',(socket)=>{
  console.log('a user connected');
  socket.on('new-message', (message) => {
    console.log(message);
  });
})

http.listen(port,
  () => {
    console.log("listening on port", port);
  }
);
