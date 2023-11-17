const Event = require('../models/event');

// ! INDEX
const index = (req, res) => {
    // Implementazione della logica per ottenere tutti gli eventi e/o filtrarli per id se presente id nella query
    const filteredEvents = Event.filterEvents(req.query);
    res.json(filteredEvents);
};

// ! STORE
const store = (req, res) => {
    // Implementazione della logica per salvare un nuovo evento
    const eventData = req.body;
    const newEvent = new Event(eventData);
    const savedEvent = Event.saveEvent(newEvent);
    res.json(savedEvent);
};

// ! UPDATE
const update = (req, res) => {
    // Implementazione della logica per aggiornare un evento specifico
    res.send(`Rotta:PUT /events/${req.params.event}`);
};

module.exports = {
    index,
    store,
    update,
};