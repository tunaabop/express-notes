const path = require("path");
// export HTML paths
module.exports = function(app) {
    // GET Route for notes page
    app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    );

    // Wildcard route to direct users to the default index page
    app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '../public/index.html'))
    );
};