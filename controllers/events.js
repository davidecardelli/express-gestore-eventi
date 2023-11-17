// ! INDEX
const index = (req, res) => {
    // Implementazione della logica per ottenere tutti gli eventi
    res.send('Rotta:GET /events');
};

// ! STORE
const store = (req, res) => {
    // Implementazione della logica per salvare un nuovo evento
    res.send('Rotta:POST /events');
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