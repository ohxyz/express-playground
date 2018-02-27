const express = require('express');
const app = express();
const path = require( 'path' );

const publicPath = path.join( __dirname, '../public' );

app.use( express.static( publicPath ) );

app.get( '/status/:code(\\d+)', ( request, response ) => {

    let statusCode = request.params.code;

    response
        .status( statusCode )
        .send( 'HTTP status code: ' + statusCode );
} );

app.get( '/query', ( request, response ) => { 

    response
        .status( 404 )
        .end();
} );

app.listen( 3000, () => { 

    console.log( 'Web server at port 3000' ); 

} );