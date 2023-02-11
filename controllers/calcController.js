const db = require('../models');

module.exports = {
    limit: function(req,res){
        db.Calculator.find()
        .sort( {_id: -1} )
        .limit(10)
        .then(results => res.json(results))
        .catch(err => res.status(400).json(err));

    },
    save: function(req, res){
        db.Calculator.create(req.body)
        .then(results => res.json(results))
        .catch(results => res.json(results));
    }    
}