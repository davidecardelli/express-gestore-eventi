const Event = require('../models/event');

// ! INDEX
const index = (req, res) => {
    // Implementazione della logica per ottenere tutti gli eventi
    const events = Event.getAllEvents();
    res.json(events);
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