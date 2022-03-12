const express = require('express');

const app = express();

const fs = require('fs');

const path = require('path');

app.use(express.static('./public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('')
})

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, "./public/notes.html"));


})

//give me all the stuff from the database and give it to the client
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./db/db.json"))
});



//beginning of a post method
app.post('/api/notes', (req, res)=>{
    console.log(req.body)
    const newNote = req.body;
    const notesArray = JSON.parse(fs.readFileSync("./db/db.json"));
    notesArray.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(notesArray))
    res.json(notesArray);
    
})





//sends an error page for any path that doesnt exist
app.all('*', (req, res)=>{
    res.status(404).send('Page Not Found!')
})


// where there server is listening
app.listen(3001, () => {
    console.log('server is listening on Port 3001')
})


