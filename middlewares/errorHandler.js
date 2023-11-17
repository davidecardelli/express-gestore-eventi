const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Errore 500 interno al server' });
};

module.exports = errorHandler;