const express = require('express');
const router = express.Router();
const controller = require('./controllers/controller')



router.get('/utilisateur/:id', (req, res)=> {
    const userId = req.params.id;
    res.send("L'id de l'utilsiateur est : " + userId)
})

router.get("/", controller.homePage);

router.get("/info", controller.infoPage);

router.get('/acces-interdit', controller.forbiddenAccessPage)

router.get('/redirection-accueil', controller.redirection)

router.get('*', controller.notFoundPage)

module.exports = router;