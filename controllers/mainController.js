let mainController = {
    
    home : (req, res) => res.render('index', { title: 'Home', stylesheet: 'index' }),

    contact : (req, res) => res.render('contacto', { title: 'Contacto', stylesheet: 'contacto' })
};

module.exports = mainController;