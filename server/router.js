module.exports = function (app) {
    var userController = require('./controller/user-controller')

    app.route('/user/auth')
        .post(userController.user_auth)
}