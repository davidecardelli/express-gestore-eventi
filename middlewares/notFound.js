const notFound = (req, res, next) => {
    res.status(404).json({ error: 'Ops, la pagina richiesta non è disponibile' });
};

module.exports = notFound;