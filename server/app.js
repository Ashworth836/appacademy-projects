const express = require('express');
require('express-async-errors');
const dogRouter = require('./routers/dogs');
const app = express();

// serve static files form Express server 
// starting the url path with '/static' serves the 'assets' folder as the root 
app.use('/static', express.static('assets'));

// parse for incoming body of request as JSON 
app.use(express.json());

app.use('/', logger);

app.use('/dogs', dogRouter);

// For testing purposes, GET /
app.get('/', (req, res) => {
  res.json("Express server running. No content provided at root level. Please use another route.");
});

// For testing express.json middleware
app.post('/test-json', (req, res, next) => {
  // send the body as JSON with a Content-Type header of "application/json"
  // finishes the response, res.end()
  res.json(req.body);
  next();
});

// For testing express-async-errors
app.get('/test-error', async (req, res) => {
  throw new Error("Hello World!")
});

app.use('/*', errorMiddleware);

app.use(errorHandler);

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));


function logger(req, res, next) {
  
  const reqObj = {
    method: req.method,
    url: req.url,
    initial_statusCode: res.statusCode,
    finalized_statusCode: undefined
  }

  res.on('finish', () => {
    reqObj.finalized_statusCode = res.statusCode;
    console.log(req.Obj);
  });

  next();
}

function errorMiddleware(req, res , next){
  const customError = new Error(`The requested resource couldn't be found`);
  customError.statusCode = 404;
  return next(customError);
}

function errorHandler(err, req, res , next){
  res.status(err.statusCode || 500)
  .json({
    Error:{
      stack: process.env.NODE_ENV !== "production" ? err.stack : null
    }
  })
}


