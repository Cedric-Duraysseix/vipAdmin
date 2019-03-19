let db = require('../configDb');

module.exports.getNationalite = function(callback) {
    db.getConnection(function(err, connexion) {
        if (!err) {
            let sql = "SELECT NATIONALITE_NUMERO, NATIONALITE_NOM FROM nationalite ORDER BY NATIONALITE_NOM ASC   ;";
            // console.log(sql);
            connexion.query(sql, callback);
            connexion.release();
        }
    });
};
