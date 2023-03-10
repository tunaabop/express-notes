// import express
const express = require('express');
// define port
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// import routes (both API and HTML routes)
require("./routes/apiRoute")(app);
require("./routes/htmlRoute")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
