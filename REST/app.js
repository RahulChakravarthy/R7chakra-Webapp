let createError = require('http-errors');
let express = require('express');
let path = require('path');
let app = express();

const nodeMailer = require('nodemailer');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, '../', '/dist')));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());


/**
 * All Angular setup requests
 */
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/index.html'));
});

/**
 *  JS requests
 */
app.get('/runtime.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/runtime.js'));
});

app.get('/runtime.js.map', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/runtime.js.map'));
});

app.get('/polyfills.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/polyfills.js'));
});

app.get('/polyfills.js.map', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/polyfills.js.map'));
});

app.get('/styles.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/styles.js'));
});

app.get('/vendor.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/vendor.js'));
});

app.get('/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/main.js'));
});

app.get('/assets/js/main.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/main.js'));
});

app.get('/assets/js/modernizr-2.6.2.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/modernizr-2.6.2.min.js'));
});

app.get('/assets/js/jquery.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.min.js'));
});

app.get('/assets/js/jquery.easing.1.3.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.easing.1.3.js'));
});

app.get('/assets/js/bootstrap.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/bootstrap.min.js'));
});

app.get('/assets/js/bootstrap.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/bootstrap.min.js'));
});

app.get('/assets/js/jquery.waypoints.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.waypoints.min.js'));
});

app.get('/assets/js/jquery.stellar.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.stellar.min.js'));
});

app.get('/assets/js/jquery.magnific-popup.min.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.magnific-popup.min.js'));
});

app.get('/assets/js/magnific-popup-options.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/magnific-popup-options.js'));
});

app.get('/assets/js/jquery.min.map', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.min.map'));
});

app.get('/assets/js/jquery.min.map', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/js/jquery.min.map'));
});



/**
 * CSS Requests
 */
app.get('/assets/css/animate.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/css/animate.css'));
});

app.get('/assets/css/icomoon.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/css/icomoon.css'));
});

app.get('/assets/css/magnific-popup.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/css/magnific-popup.css'));
});

app.get('/assets/css/bootstrap.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/css/bootstrap.css'));
});

app.get('/assets/css/simple-line-icons.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/css/simple-line-icons.css'));
});

app.get('/assets/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/css/style.css'));
});

/**
 * SASS requests
 */

/**
 * Fonts Request
 */
app.get('/assets/fonts/simple-line-icons/Simple-Line-Icons.woff?v=2.2.2', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/fonts/simple-line-icons/Simple-Line-Icons.woff?v=2.2.2'));
});

app.get('/Simple-Line-Icons.woff2?v=2.2.2', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/fonts/simple-line-icons/Simple-Line-Icons.woff2?v=2.2.2'));
});

app.get('/assets/fonts/icomoon/icomoon.ttf?qtatmt', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/fonts/icomoon/icomoon.ttf?qtatmt'));
});

app.get('/fonts/icomoon/icomoon.woff?qtatmt', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/fonts/icomoon/icomoon.woff?qtatmt'));
});

app.get('/fonts/icomoon/icomoon.ttf?srf3rx', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/fonts/icomoon/icomoon.ttf?srf3rx'));
});

app.get('/icomoon.ttf?srf3rx', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/fonts/icomoon/icomoon.ttf?srf3rx'));
});

/**
 * Image requests
 */
app.get('/assets/images/img_1.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/img_1.jpg'));
});

app.get('/assets/images/img_2.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/img_2.jpg'));
});

app.get('/assets/images/img_3.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/img_3.jpg'));
});

app.get('/assets/images/img_4.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/img_4.jpg'));
});

app.get('/assets/images/person1.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/person1.jpg'));
});

app.get('/assets/images/person2.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/person2.jpg'));
});

app.get('/assets/images/person3.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/person3.jpg'));
});

app.get('/assets/images/person4.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/person4.jpg'));
});

app.get('/assets/images/hero_bg.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/hero_bg.jpg'));
});

app.get('/assets/images/hero_bg.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/hero_bg.jpg'));
});

app.get('/Preloader_2.gif', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/Preloader_2.gif'));
});

app.get('/assets/images/nice_photo.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/r7chakra-webapp/assets/images/nice_photo.jpg'));
});

const emailDestination = 'rahul.cha101@gmail.com';
const emailSubject = 'r7chakra webapp message';

app.post('/sendMessage', (req, res) => {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'xxx@xx.com',
      pass: 'xxxx'
    }
  });

  let mailOptions = {
    from: req.body.sendEmailUserName + ' <' + req.body.sendEmailAddress + '>', // sender address
    to: emailDestination, // list of receivers
    subject: emailSubject, // Subject line
    text: req.body.sendEmailTextMessage, // plain text body
  };
});

/**
 * Unhandled requests
 */
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;
