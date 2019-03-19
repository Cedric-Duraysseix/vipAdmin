let db = require('../configDb');

module.exports.getNomPrenomVip = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT VIP_NOM, VIP_PRENOM, VIP_NUMERO FROM vip ORDER BY VIP_NOM ASC  ;";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};