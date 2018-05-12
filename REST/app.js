let createError = require('http-errors');
let express = require('express');
let path = require('path');
let app = express();

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

/**
 * Redirect all requests to index html
 */
app.get('/rest/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist/index.html'));
});

module.exports = app;
