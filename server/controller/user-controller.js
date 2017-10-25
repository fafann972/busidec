var client = require('../connection.js'),
parser = require('body-parser'),
jwt = require('jsonwebtoken'),
crypt =require('bcrypt');

var search = {  
    index: 'busidec',
    type: 'user',
    body: {
      query: {}
    }
  }

var session = {
    user: null,
    token: ''
}

exports.user_auth = function(req, res) {
    console.log('USER_AUTH requete : ' + req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Content-Type', 'application/json'); 

    //On crée l 'objet match pour la requete elastic
    var crit = {
        match: {'first_name': req.body.user}
    };
    search.body.query = crit;
    
    console.log('REQUETE ELASTIC : ' + JSON.stringify(search));

    client.search(search, function(error, response, status) {
        if (error) {
            console.log('KO')
            console.log(error);
            res.status(status).json({message: 'Erreur server elastic', error: error});
        } else {
            console.log('OK');
            var user = response.hits.hits[0];
            if (user._source.password == req.body.password) {
                res.json({token: jwt.sign(user,'busidec', { expiresIn: 30 })});
            } else {
                res.json({message: 'Le login et/ou mot de passe est erroné'});
            }
            
        }
    });

}

exports.user_auth_required = function(req, res) {
    
}