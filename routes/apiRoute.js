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
    })
    // POST request to add a note
    // app.post('/api/notes', (req, res) => {
    //     // Log that a POST request was received
    //     console.info(`${req.method} request received to add a note`);
    
    //     // Destructuring assignment for the items in req.body
    //     const { title, text } = req.body;
    
    //     // If all the required properties are present
    //     if (title && text) {
    //     // Variable for the object we will save
    //     const newNote = {
    //         title,
    //         text,
    //         review_id: uuid(),
    //     };
    
    //     const response = {
    //         status: 'success',
    //         body: newNote,
    //     };
    
    //     console.log(response);
    //     res.status(201).json(response);
    //     } else {
    //     res.status(500).json('Error in posting review');
    //     }
    // });
    // app.delete("/api/notes/", function(req,res) {
    //     note_data.length = 0;

    //     res.json({ok: true});
    // })

};