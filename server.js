/////////////////// Require Statements /////////////////
const express = require('express');
const methodOverride = require('method-override');
const rowdy = require('rowdy-logger')

/////////////////// Configuration //////////////////////
const app = express();
const PORT = 3000;
const rowdyResults = rowdy.begin(app)
app.set('view engine', 'ejs');

/////////////////// Middleware /////////////////////////
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'))


/////////////////// Start the Server ///////////////////
// Start our Server
app.listen(PORT, () => {
    console.log(`Our cool ass journal is running on localhost:${PORT} 🚀`);
    rowdyResults.print()
  })