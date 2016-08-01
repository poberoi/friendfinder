// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

var app = express();
// var PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// ================================================================================
// ROUTER
// ================================================================================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);

// ==============================================================================
// LISTENER
// ==============================================================================


app.listen(process.env.PORT || 8080, function(){
 console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});