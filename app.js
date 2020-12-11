/*app.js is the backend of this whole thing
We are using Node(allows Javascript), express(All server functions), ejs(HTML templates),
*/

//Step 1 (express setup)
const express = require('express'); //Express is required
const app = express(); // You are naming express "app" so app.start is starting express for example
// set up app.listen and app.get below

//Step 2 (EJS Setup)
const path = require('path'); //This is needed to set up views in EJS
//

//Step 3 (Mongoose)
const mongoose = require('mongoose');
const puzzles = require('./models/puzzles');
mongoose.connect('mongodb://localhost:27017/Puzzle',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("database connected")
});

//step 2 Make a views folder, and use the below code to point to it
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))

//step 1 Below allows a get request to return a page
app.get('/',(req, res) => {
    console.log('Someone is Connecting')
    res.render('home.ejs') //res.send("Hello from Ed") originally will test if this works
})

//step 4(make a database object)
app.get('/MakeAPuzzle',(req, res) => {
    const puzzle = new puzzles({title: 'The First Puzzle', difficulty: '1', description: 'An easy one'});
    puzzle.save();
    res.send(puzzle)

})

//Step 1 This is an express requirement
app.listen(3000, ()=> {
    console.log('Serving on port 3000')
})
