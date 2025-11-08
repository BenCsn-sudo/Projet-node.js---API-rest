/*
 Mongoose :
  - C’est une bibliothèque qui connecte Node.js à une base de données MongoDB.
  - Permet de définir la forme des données (schéma) et leurs types.
  - Facilite les actions sur la base : ajouter, chercher, modifier, supprimer.
  - Transforme les données MongoDB en objets JavaScript faciles à utiliser.
  - Vérifie aussi que les données respectent le schéma avant l’enregistrement.
 */

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/BDD');
        console.log('MongoDB connecté');
    } catch (err) {
        console.error('Erreur de connexion MongoDB :', err);
        process.exit(1);
    }
};

module.exports = connectDB;