let model = require("../models/vip.js");


// ///////////////////////// V I P

module.exports.Ajouter = 	function(request, response){
   response.title = 'Répertoire des stars';
   model.getNationalite(function (err, result) {
       if (err) {
           console.log(err);
           return;
       }
       response.nationalite = result;
       response.render('vipsAjouter', response);
   });
  } ;

module.exports.Modifier = 	function(request, response){
    response.title = 'Répertoire des stars';
        response.render('vipsModifier', response);
} ;

module.exports.Supprimer = 	function(request, response){
    response.title = 'Répertoire des stars';
    response.render('vipsSupprimer', response);
} ;
