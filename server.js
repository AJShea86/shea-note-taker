const express = require('express');

const app = express();

const fs = require('fs');

const path = require('path');

app.use(express.static('./public'));

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('')
})

app.listen(3001, () => {
    console.log('server is listening on Port 3001')
})


