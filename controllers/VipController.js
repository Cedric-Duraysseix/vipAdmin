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
       response.render('vips', response);
   });
  } ;
