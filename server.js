const express = require('express'),
      app = express(),
      port = process.env.PORT || 8000,
      expressLayouts = require('express-ejs-layouts');

// set route
app.use(require('./app/routes'));
//set the public folder
app.use(express.static(__dirname + '/public'));

//set view engine
app.set('view engine' , 'ejs');
app.use(expressLayouts);

// start the application
app.listen(port,()=>{
	console.log(`Server running on http://localhost:${port}`);
})