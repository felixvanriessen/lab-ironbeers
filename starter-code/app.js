const express = require('express');
const app = express();

const hbs = require('hbs');
const path = require('path');

const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();
// let testData = [{name:'JON'}, {name:'ALEX'}]

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// add the partials here:

hbs.registerPartials(__dirname + '/views/partials')

// add the routes here:
app.get('/', (req, res) => res.render('index'));

// let indexRoute = require('./routes/home.js')
// app.use('/', indexRoute)

app.use('/', require('./routes/home.js'))
app.use('/', require('./routes/beers.js'))
app.use('/', require('./routes/random-beers.js'))



app.get('/beers/:id', (req,res)=>{
    punkAPI
    .getBeer(req.params.id)
    .then(theBeer =>{
        res.render('random-beers', {beer: theBeer[0]})
    })
    .catch(error => console.log(error))
})

app.listen(3000, () => console.log('listening on port 3k'));


