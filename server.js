'use strict';
import logger from "./utils/logger.js";
import exphbs from "express-handlebars";
import express from "express";


// initialise project
const app = express();


// static files output to public folder
app.use(express.static("public"));

// use handlebars as view engine
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");


// import routes file and use this for routing
import routes from "./routes.js";
app.use("/", routes);


// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});

