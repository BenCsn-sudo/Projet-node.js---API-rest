const express = require('express');
const app = express()
const port = 3000

app.use(express.json());

const users = [
    {id: 1, name: 'John Doe', email: 'john@example.com'},
    {id: 2, name: 'Jane Smith', email: 'jane@example.com'}
]

// curl -X GET http://localhost:3000/api/users
app.get('/api/users', (req, res) => {
    res.json(users);
})

// curl -X GET http://localhost:3000/api/users/1
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
})

// curl -X POST http://localhost:3000/api/users \
//     -H "Content-Type: application/json" \
//     -d '{"name": "Alice", "email": "alice@example.com"}'
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = {
        id: users.lenght + 1,
        name,
        email
    };
    users.push(newUser)
    res.status(201).json(nuwUser);
})

// curl -X DELETE http://localhost:3000/api/users/3
app.delete('/api/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) return res.status(404).send('User not foud');
    users.slice(userIndex, 1);
    res.status(404).send();
});

app.listen(port, () => {
    console.log('Server is running')
})