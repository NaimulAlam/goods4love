const express = require('express');

const app = express();

const cors = require('cors');

require('dotenv').config();

const { MongoClient } = require('mongodb');

const { ObjectId } = require('mongodb');
const fileUpload = require('express-fileupload');

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwf4i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db(process.env.DB_NAME);
        const usersCollection = database.collection('users');
        // perform actions on the collection object
        app.post('/user/signup', async (req, res) => {
            const user = req.body;
            console.log(user);
            const result = await usersCollection.insertOne(user);
            res.json(result);
        });

        app.get('/users', async (req, res) => {
            // const { email } = req.query;
            // const { password } = req.query;
            // const query = { email, password };
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.json(users);
        });

        app.get('/users/:id', async (req, res) => {
            const { id } = req.params;
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.json(result);
        });
    } finally {
        // await client.close();
    }
}

run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Hello! form Goods4Love');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/`);
});
