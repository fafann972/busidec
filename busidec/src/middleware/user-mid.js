var jwt = require('jsonwebtoken');
var axios = require('axios');

const PASSPHRASE = 'busidec';

exports.auth = function(auth_info) {
    return axios.post('http://localhost:3000/user/auth', auth_info)
    .then(function(response) {
      console.log(response);
      return response.data.token;
    }).catch (function(error) {
      console.log(error);
      return null;
    });
};

exports.verifyToken = function(token) {
    return jwt.verify(token, PASSPHRASE, function(err, verifyToken) {
        if (err) {
            console.log(err);
            return null;
        } else {
            console.log(verifyToken);
            return verifyToken;
        }
    });
};

exports.isAuth = function() {

}
