let model = require("../models/photo.js");


// ///////////////////////// P H O T O

module.exports.Ajouter = 	function(request, response){
    response.title = 'Répertoire des stars';
    model.getNomPrenomVip(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        response.nomPrenomVIP = result;
        response.render('photosAjouter', response);
    });
}

module.exports.Supprimer = 	function(request, response){
    response.title = 'Répertoire des stars';

        response.render('photosSupprimer', response);
}
