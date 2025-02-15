const note_data = require("../db/notes");
// helper method to generate unique note IDs
const uuid = require('../helpers/uuid');
// export HTML paths
module.exports = function(app) {
    // GET API Route to read db.json and return saved notes as JSON
    app.get('/api/notes', (req, res) => {
        console.info(`GET /api/notes`);
        res.status(200).json(note_data);
    });
    app.post("/api/notes/", function(req,res) {
        note_data.push(req.body);
        res.json(true);
    })
    app.delete("/api/notes/", function(req,res) {
        note_data.length = 0;
        res.json({ok: true});
    });
};