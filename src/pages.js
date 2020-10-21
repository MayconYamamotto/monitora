const profile = require('./database/fakedata.js'); 

module.exports = {
    index(req, res) {
        const city = req.query.city
        return res.render('index', {city})
    },
    pageRegister(req, res) {
        return res.render('page-register')
    },
    pageRegisterFinish(req, res) {
        return res.render('page-register-finish')
    },
    pageProfile(req, res) {
        const newProfile = profile[0];
        return res.render('page-profile', {newProfile})
    },
    pageEditSuccess(req, res) {
        return res.render('page-EditSuccess')
    },
}