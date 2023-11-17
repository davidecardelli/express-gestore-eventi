const express = require("express");
const dotenv = require("dotenv");
const app = express()

// ! importo il router 
const eventsRouter = require("./routers/events.js");

// ! importo i midd
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();

// ! uso public per i miei file statici
app.use(express.static("public"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// ! definisco le rotte e aggancio i controller per la gestione dei vari metodi
app.get('/', (req, res) => {
    res.send('<h1>Benvenuto in express-gestore-eventi!</h1>');
});

app.use("/events", eventsRouter);

// ! posiziono i mid a fine delle rotte così vengono applicati a tutte
app.use(notFound);
app.use(errorHandler);

// ! metto in ascolto
app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
})
