/*
Express :
 - Bibliothèque qui transforme le code Node.js en petit serveur web basé sur HTTP.
 - Elle reçoit les requêtes envoyées par le navigateur (URL, données, etc.).
 - Permet de définir des routes (GET, POST, PUT, DELETE).
 - Elle renvoie ensuite une réponse (souvent du JSON) au client.
 - Les "middlewares" sont des étapes automatiques entre la requête et ta réponse
   (par exemple pour lire un corps JSON ou vérifier une connexion).
*/
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);
router.get('/', userController.createUser);
router.get('/:id', userController.deletUser);

module.exports = router;