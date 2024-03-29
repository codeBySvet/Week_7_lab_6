const express = require('express')  //Need express to run the server
const app = express()   
const port = 4000   //Designate which port for the server to listen on
const bodyParser = require('body-parser');  //bodyparser will go parse through HTTP messages 

//This is to handle cors error
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Json get requst/response for /
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying')
})

//Json get requst/response for /hello
app.get('/hello/:name', (req, res) => {
    res.send('Hello ' + req.params.name);
})
//Json get requst/response for /whatever
app.get('/whatever', (req, res) => {
    res.send('cool!')
})

//Json post requst/response for /api/movies
app.post('/api/movies', (req,res)=>{
    console.log("Title: "+req.body.Title)
    console.log("Year: "+req.body.Year)
    console.log("Poster: "+req.body.Poster)

    res.send('Data Recieved')
})

//Json requst/response for /api.movies.
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        },
        {
            "Title": "War of the Worlds",
            "Year": "2005",
            "imdbID": "tt0407304",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
        }
    ]

    //sending back json data on the status of the request
    res.status(200).json({
        mymovies: movies,
        message: 'Data Sent'
    })
})

//Json get requst/response for /name
app.get('/name', (req, res) => {
    res.send('Hello ' + req.query.firstname + ' ' + req.query.lastname);
})
//Json post requst/response for /name
app.post('/name', (req, res) => {
    res.send('Goodbye ' + req.body.firstname + ' ' + req.body.lastname);
})
//Json get requst/response for /test
app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})
//Tells the server to listn on a port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})