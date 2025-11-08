/*
 JavaScript et Node.js :
  - JavaScript est le langage utilisé pour écrire le code de l’application.
  - À l’origine, il servait uniquement dans les navigateurs web.
  - Node.js permet d’exécuter ce code JavaScript en dehors du navigateur.
  - Grâce à Node.js, on peut créer un serveur, gérer des fichiers et utiliser des bases de données.
  - Dans ce projet, JavaScript + Node.js servent à faire tourner le serveur Express et à dialoguer avec MongoDB.
 *//*
Express :
 - Bibliothèque qui transforme le code Node.js en petit serveur web basé sur HTTP.
 - Elle reçoit les requêtes envoyées par le navigateur (URL, données, etc.).
 - Permet de définir des routes (GET, POST, PUT, DELETE).
 - Elle renvoie ensuite une réponse (souvent du JSON) au client.
 - Les "middlewares" sont des étapes automatiques entre la requête et ta réponse
   (par exemple pour lire un corps JSON ou vérifier une connexion).
*/
const express = require('express');
/*
 Mongoose :
  - C’est une bibliothèque qui connecte Node.js à une base de données MongoDB.
  - Permet de définir la forme des données (schéma) et leurs types.
  - Facilite les actions sur la base : ajouter, chercher, modifier, supprimer.
  - Transforme les données MongoDB en objets JavaScript faciles à utiliser.
  - Vérifie aussi que les données respectent le schéma avant l’enregistrement.
 */
const mongoose = require('mongoose');

const app = express();
const port = 3000;
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/BDD').then(() => console.log('MongoDB connecté')).catch(err => console.log(err));

// Schéma mongoose
const UserSchema = new mongoose.Schema({
    id: Number,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
});

const User = mongoose.model('User', UserSchema);

// curl -X GET http://localhost:3000/api/users
app.get('/api/users', async (req, res) => {
    const data = await User.find();
    res.json(data);
})

// curl -X GET http://localhost:3000/api/users/1
app.get('/api/users/:id', async (req, res) => {
    const user = await User.findOne({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).send('User not found');
    res.json(user);
})

// curl -X POST http://localhost:3000/api/users \ -H "Content-Type: application/json" \ -d '{id: 3, "name": "Alice", "email": "alice@example.com"}'
app.post('/api/users', async (req, res) => {
    const { id, first_name, last_name, email, gender, ip_address } = req.body;
    const newUser = new User({ id, first_name, last_name, email, gender, ip_address });
    await newUser.save();
    res.status(201).json(newUser);
})

// curl -X DELETE http://localhost:3000/api/users/3
app.delete('/api/users/:id', async (req, res) => {
    const deletedUser = await User.findOneAndDelete({ id: parseInt(req.params.id) });
    if (!deletedUser) return res.status(404).send('User not found');
    res.status(200).send('User deleted');
});


// équivaut à un serveur qui répond à toute requête sur http://127.0.0.1:3000.
app.listen(port, () => {
    console.log('Server is running')
})