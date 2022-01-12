const express = require('express');

const app = express();

const cors = require('cors');

require('dotenv').config();

const { MongoClient } = require('mongodb');

// const { ObjectId } = require('mongodb');

const port = process.env.PORT || 5000;

const rootCall = (req, res) => {
    res.send('Hi! This is Goods4Love API');
};

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwf4i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(() => {
    const usersCollection = client.db(`${process.env.DB_NAME}`).collection('users');
    // perform actions on the collection object
    app.post('/users', (req, res) => {
        const user = req.body;
        usersCollection.insertOne(user).then((result) => {
            res.send(result.insertedCount);
        });
    });
    client.close();
});

app.get('/', rootCall);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
