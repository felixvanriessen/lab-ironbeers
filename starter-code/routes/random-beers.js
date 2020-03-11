const express = require('express');
const app = express();

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.get('/random-beers', (req,res)=>{
    punkAPI
    .getRandom()
    .then(randomBeer =>{
        // console.log('Random beer = ' + randomBeer[0].brewers_tips)
        res.render('random-beers', {beer:randomBeer[0]})
    })
    .catch(error => console.log(error))
})

module.exports = app