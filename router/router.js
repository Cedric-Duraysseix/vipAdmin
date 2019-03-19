let VipController = require('./../controllers/VipController');
let PhotoController = require('./../controllers/PhotoController');



// Routes
module.exports = function(app){

// Main Routes
    app.get('/', VipController.Ajouter);

// VIP
    app.get('/AjouterVip', VipController.Ajouter);

 // Photo
    app.get('/AjouterPhoto', PhotoController.Ajouter);
};
