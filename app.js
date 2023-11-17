const express = require("express");
const dotenv = require("dotenv");
const app = express()

// ! importo il router 
const eventsRouter = require("./routers/events.js");

dotenv.config();

// ! uso public per i miei file statici
app.use(express.static("public"));

// ! definisco le rotte e aggancio i controller per la gestione dei vari metodi
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto in express-gestore-eventi!</h1>');
});

app.use("/events", eventsRouter)
// ! metto in ascolto
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})
