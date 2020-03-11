const express = require('express');
const app = express();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.get('/beers', (req,res)=>{
    punkAPI
   .getBeers()
   .then(beersFromApi =>{
        res.render('beers', {beer: beersFromApi});
   })
   .catch(error => console.log(error))
})

module.exports = app