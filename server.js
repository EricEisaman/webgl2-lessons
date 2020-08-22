// load express package
var express = require( "express" );

// create an express object that will 
var app = express();

// we can set express to serve files from a specific folder:
app.use( express.static( "public" ) );

app.get( "/", function( request, response ) {
  response.sendFile( __dirname + "public/index.html" );
  // "__dirname" refers to the folder in which our glitch project is
  // on the computer that runs the server
} );

// finally listen for requests
app.listen( process.env.PORT );
