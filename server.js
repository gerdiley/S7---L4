// richiedere una costante per instanziare express gia installato

const express = require('express');

// instanziamo express in app

const app = express();

app.use(express.static('public'));

// testiamo se parla

app.listen(3000, function(){
    console.log('server in ascolto su porta 3000');
})

