const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const Donation = require('./models/donation.model.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const { ObjectId } = require('mongodb');

// const { MongoClient } = require('mongodb');
// const fileUpload = require('express-fileupload');

const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwf4i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri);

// registration route api
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {

        const newPassword = await bcrypt.hash(req.body.password, 10);

        await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: newPassword,
            ocupation: req.body.ocupation,
            city: req.body.city,
            zipCode: req.body.zipCode
        })
        return res.json({ status: 'ok', message: 'Sign Up Successfull' });
    } catch (err) { 
        console.error(err);
        return res.json({ status:'error', message: 'Duplicate Email' });
    }
});

// all users route mongoose query
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find().all('users-data', []);
        return res.json({ status: 'ok', users: users});
    } catch (err) {
        console.log(err);
        return res.json({status: 'error', message: err});
    }
});

// Login route api
app.post('/api/login', async (req, res) => { 
    const user = await User.findOne({
        email: req.body.email
    });

    if (!user) { 
        return res.json({status: 'error', error: 'Invalid Login'});
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

    if (isPasswordValid) {
        const token = jwt.sign({
            name: user.name,
            email: user.email
            },
            'secret123'
        );

        return res.json({ status: 'ok', user: token });
    } else {
        return res.json({ status: 'ok', user: false });
    }
});

// loggedIn user information mongoose
app.get('/api/userInfo', async (req, res) => {

    const token = req.headers['x-access-token'];

    try {
        const decoded = jwt.verify(token, 'secret123');
        const email = decoded.email;
        const user = await User.findOne({ email: email });

        return res.json({ status: 'ok', user: user });
    } catch (err) {
        console.log(err);
        res.json({status: 'error', message: 'Invalid User'});
    }
});

// update user information mongoose
app.post('/api/userInfoUpdate', async (req, res) => { 
    const token = req.headers['x-access-token'];
    
    try {
        const decoded = jwt.verify(token, 'secret123');
        const email = decoded.email;
        await User.updateOne(
            { email: email },
            { $set: { ocupation: req.body.ocupation } }
        );

        return res.json({ status: 'ok', message: 'Ocupation Updated' });
    } catch (err) {
        console.log(err);
        res.json({status: 'error', message: 'Invalid Update'});
    }
})

// donation info route mongoose

app.post('/api/donate', async (req, res) => {
    const token = req.headers['x-access-token'];
    console.log(req.body);
    try {
        await Donation.create({
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            cause: req.body.cause,
            amount: req.body.amount,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            city: req.body.city,
            uid: req.body.uid,
        })
        
        return res.json({ status: 'ok', message: 'Donation Successfull, Thank you for your support :)' });
    } catch (err) { 
        console.error(err);
        return res.json({ status:'error', message: 'Plese check your credentials' });
    }
});


app.get('/', (req, res) => {
    res.send('Hello! form Goods4Love');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
