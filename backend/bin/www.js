

const app = require('../app.js');

const debug = require('debug')('backend:server');

const http = require('http');


const port =normalizePort(process.env.PORT ||'3200');

app.set('port', port);

// Create HTTP server

const server =http.createServer(app);

//Listen on provided port, on all network interfaces

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

///////////////////////////////////////////////////////////////////////

function normalizePort(val){
  let port = parseInt(val, 10);
    //named pipe
  if (isNaN(port)) return val;

    //port number
  if (port >= 0) return port;

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
