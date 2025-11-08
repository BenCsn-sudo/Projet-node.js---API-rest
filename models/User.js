/*
 Mongoose :
  - C’est une bibliothèque qui connecte Node.js à une base de données MongoDB.
  - Permet de définir la forme des données (schéma) et leurs types.
  - Facilite les actions sur la base : ajouter, chercher, modifier, supprimer.
  - Transforme les données MongoDB en objets JavaScript faciles à utiliser.
  - Vérifie aussi que les données respectent le schéma avant l’enregistrement.
 */
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
})

module.exports = mongoose.model('User', UserSchema);