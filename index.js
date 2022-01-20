const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const jwt = require('jsonwebtoken');

// const { MongoClient } = require('mongodb');
// const { ObjectId } = require('mongodb');
// const fileUpload = require('express-fileupload');

const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwf4i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri);

// registration route
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            city: req.body.city,
            zipCode: req.body.zipCode
        })
        return res.json({ status: 'ok', message: 'Sign Up Successfull' });
    } catch (err) { 
        console.error(err);
        return res.json({ status:'error', message: 'Duplicate Email' });
    }
});

// all users route mongoose model
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().all('users-data', []);
        return res.json({ status: 'ok', users: users});
    } catch (err) {
        console.log(err);
        return res.json({status: 'error', message: err});
    }
});

// Login route
app.post('/api/login', async (req, res) => { 
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    if (user) {
        const token = jwt.sign({
            name: user.email, email: user.email
        }, 'secret123');

        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'ok', user: false });
    }
});


// async function run() {
//     try {
//         await client.connect();
//         const database = client.db(process.env.DB_NAME);
//         const usersCollection = database.collection('users');
//         // perform actions on the collection object
//         app.post('/api/register', async (req, res) => {
//             const user = req.body;
//             console.log(user);
//             const result = await usersCollection.insertOne(user);
//             res.json(result);
//         });

//         app.get('/users', async (req, res) => {
//             const cursor = usersCollection.find({});
//             const users = await cursor.toArray();
//             res.json(users);
//         });

//         app.get('/user/login', async (req, res) => {
//             const { email } = req.query;
//             const { password } = req.query;
//             const query = { email, password };
//             const cursor = usersCollection.find(query);
//             const users = await cursor.toArray();
//             res.json(users);
//         });

//         app.get('/users/:id', async (req, res) => {
//             const { id } = req.params;
//             const query = { _id: ObjectId(id) };
//             const result = await usersCollection.findOne(query);
//             res.json(result);
//         });
//     } catch {
//         console.error(error);
//     } finally {
//         await client.close();
//         // await client.close();
//     }
// }

app.get('/', (req, res) => {
    res.send('Hello! form Goods4Love');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
