/*
 JavaScript et Node.js :
  - JavaScript est le langage utilisé pour écrire le code de l’application.
  - À l’origine, il servait uniquement dans les navigateurs web.
  - Node.js permet d’exécuter ce code JavaScript en dehors du navigateur.
  - Grâce à Node.js, on peut créer un serveur, gérer des fichiers et utiliser des bases de données.
  - Dans ce projet, JavaScript + Node.js servent à faire tourner le serveur Express et à dialoguer avec MongoDB.
 */
// curl -X GET http://localhost:3000/api/users

const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(express.json());

// Connexion à MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Démarrage serveur
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});