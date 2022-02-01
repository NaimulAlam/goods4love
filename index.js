/* eslint-disable no-underscore-dangle */
const express = require('express');

const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// const { ObjectId } = require('mongodb');
const Donations = require('./models/donations.model');
const User = require('./models/user.model');
const Admin = require('./models/admin.model');
const AddDonation = require('./models/addDonation.model');
const AddReview = require('./models/addReview.model');
const Bidding = require('./models/bidding.model');

// const { MongoClient } = require('mongodb');
// const fileUpload = require('express-fileupload');

const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

// app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vwf4i.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri);

async function verifyToken(req, res, next) {
    const token = req.headers['x-access-token'];
    if (!token) {
        try {
            const decoded = jwt.verify(token, 'secret123');
            const { email } = decoded;
            const LoggedUser = await User.findOne({ email });

            return res.json({ status: 'ok', LoggedUser });
        } catch (err) {
            // console.log(err);
            return res.json({ status: 'error', message: 'Invalid User' });
        }
    }
    return next();
}

async function run() {
    try {
        // Main route
        app.get('/', (req, res) => {
            res.send('Hello! form Goods4Love');
        });

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
                    zipCode: req.body.zipCode,
                });
                return res.json({ status: 'ok', message: 'Sign Up Successfull' });
            } catch (err) {
                // console.error(err);
                return res.json({ status: 'error', message: 'Duplicate Email' });
            }
        });

        // all users route mongoose query
        app.get('/api/users', verifyToken, async (req, res) => {
            try {
                const users = await User.find().all('users-data', []);
                return res.json({ status: 'ok', users });
            } catch (err) {
                // console.log(err);
                return res.json({ status: 'error', message: err });
            }
        });

        // Login route api
        app.post('/api/login', async (req, res) => {
            const userLogin = await User.findOne({
                email: req.body.email,
            });

            if (!userLogin) {
                return res.json({ status: 'error', error: 'Invalid Login' });
            }
            const isPasswordValid = await bcrypt.compare(req.body.password, userLogin.password);

            if (isPasswordValid) {
                const token = jwt.sign(
                    {
                        name: userLogin.name,
                        email: userLogin.email,
                    },
                    'secret123'
                );

                return res.json({ status: 'ok', userToken: token });
            }
            return res.json({ status: 'error', user: false });
        });

        // loggedIn user information mongoose
        app.get('/api/userInfo', verifyToken, async (req, res) => {
            const token = req.headers['x-access-token'];

            try {
                const decoded = jwt.verify(token, 'secret123');
                const { email } = decoded;
                const userInfo = await User.findOne({ email });
                // console.log(userInfo);
                return res.json({ status: 'ok', userInfo });
            } catch (err) {
                // console.log(err);
                return res.json({ status: 'error', message: 'Invalid User' });
            }
        });

        // update user information mongoose
        app.post('/api/userInfoUpdate', verifyToken, async (req, res) => {
            const token = req.headers['x-access-token'];
            try {
                const decoded = jwt.verify(token, 'secret123');
                const { email } = decoded;
                await User.updateOne(
                    { email },
                    {
                        $set: {
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            eamil: req.body.email,
                            ocupation: req.body.ocupation,
                            city: req.body.city,
                            zipCode: req.body.city,
                        },
                    }
                );

                return res.json({ status: 'ok', message: 'User Info Updated' });
            } catch (err) {
                // console.log(err);
                return res.json({ status: 'error', message: 'Invalid Update' });
            }
        });

        // donation info route mongoose
        app.post('/api/donate', verifyToken, async (req, res) => {
            // console.log(req.body);
            try {
                await Donations.create({
                    email: req.body.email,
                    contactNumber: req.body.contactNumber,
                    cause: req.body.cause,
                    amount: req.body.amount,
                    oldEmail: req.body.oldEmail,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    city: req.body.city,
                    uid: req.body.uid,
                });

                return res.json({
                    status: 'ok',
                    message: 'Donation Successfull. Thank you for your support.',
                });
            } catch (err) {
                // console.error(err);
                return res.json({ status: 'error', message: 'Plese check your credentials' });
            }
        });

        // Add Review info route mongoose
        //
        app.post('/api/AddReview', async (req, res) => {
            // console.log(req.body);
            try {
                await AddReview.create({
                    review: req.body.review,
                    uid: req.body.uid,
                    email: req.body.adminEmail,
                });

                return res.json({
                    status: 'ok',
                    message: 'Review Added Successfull',
                });
            } catch (err) {
                // console.error(err);
                return res.json({ status: 'error', message: 'Review Addition Failed' });
            }
        });
        // Add Bidding info route mongoose
        //
        app.post('/api/addBidding', async (req, res) => {
            // console.log(req.body);
            try {
                await Bidding.create({
                    biddingName: req.body.review,
                    biddingDescription: req.body.biddingDescription,
                    initialBid: req.body.initialBid,
                    email: req.body.adminEmail,
                });

                return res.json({
                    status: 'ok',
                    message: 'Review Added Successfull',
                });
            } catch (err) {
                // console.error(err);
                return res.json({ status: 'error', message: 'Review Addition Failed' });
            }
        });

        // update Bid depends on new Entry mongoose
        // //
        app.post('/api/Bidding/:id/update', verifyToken, async (req, res) => {
            const token = req.headers['x-access-token'];
            try {
                const { id } = req.params;
                const findBidding = await Bidding.findOne(id);
                if (!findBidding) {
                    return res.json({ status: 'error', message: 'Invalid Bidding' });
                }
                console.log(findBidding);

                const decoded = jwt.verify(token, 'secret123');
                const { email } = decoded;
                const findUser = await User.findOne({ email });
                console.log(findUser);
                const userId = findUser._id.toString();

                if (!userId) {
                    return res.json({ status: 'error', message: 'Invalid User' });
                }

                await Bidding.updateOne(
                    { id },
                    {
                        $set: {
                            biddingAmount: req.body.biddingAmount,
                            bidderEmail: req.body.bidderEmail,
                            uid: req.body.uid,
                        },
                    }
                );

                return res.json({ status: 'ok', message: 'User Info Updated' });
            } catch (err) {
                // console.log(err);
                return res.json({ status: 'error', message: 'Invalid Update' });
            }
        });

        // Add donation info route mongoose
        //
        app.post('/api/AddDonation', async (req, res) => {
            // console.log(req.body);
            try {
                await AddDonation.create({
                    donationTitle: req.body.donationTitle,
                    description: req.body.description,
                    adminEmail: req.body.adminEmail,
                });

                console.log(res);
                return res.json({
                    status: 'ok',
                    message: 'Donation Added Successfull',
                });
            } catch (err) {
                // console.error(err);
                return res.json({ status: 'error', message: 'Donation Creation Failed' });
            }
        });

        // get added single donations route mongoose
        //
        app.get('/api/donations', verifyToken, async (req, res) => {
            try {
                const donations = await AddDonation.find().all('donations', []);
                return res.json({ status: 'ok', donations });
            } catch (err) {
                console.log(err);
                return res.json({ status: 'error', message: err });
            }
        });

        // get all donations of a user route mongoose
        app.get('/api/alldonations', verifyToken, async (req, res) => {
            const token = req.headers['x-access-token'];
            try {
                const decoded = jwt.verify(token, 'secret123');
                const { email } = decoded;
                const findUser = await User.findOne({ email });
                console.log(findUser);
                const userId = findUser._id.toString();

                if (!userId) {
                    return res.json({ status: 'error', message: 'Invalid User' });
                }

                const alldonations = await Donations.find().all('alldonations', []);
                return res.json({ status: 'ok', alldonations });
            } catch (err) {
                // console.log(err);
                return res.json({ status: 'error', message: err });
            }
        });

        // get all donations of a user route mongoose
        app.get('/api/userDonations', async (req, res) => {
            const token = req.headers['x-access-token'];
            try {
                const decoded = jwt.verify(token, 'secret123');
                const { email } = decoded;
                const findUser = await User.findOne({ email });
                // console.log(DonationListUser);
                const userId = findUser._id.toString();
                if (!userId) {
                    return res.json({ status: 'error', message: 'user not found' });
                }
                // console.log(userId);
                const userDonations = await Donations.find({ uid: userId }).all(
                    'userDonations',
                    []
                );
                // console.log(userDonations);
                return res.json({ status: 'ok', userDonations });
            } catch {
                return res.json({ status: 'error', message: 'error' });
            }
        });

        // add Admin route mongoose
        app.post('/api/addAdmin', async (req, res) => {
            console.log(req.body);
            try {
                await Admin.create({
                    adminEmail: req.body.adminEmail,
                    user: req.body.user,
                });

                return res.json({
                    status: 'ok',
                    message: 'Admin Added Successfully',
                });
            } catch (err) {
                console.error(err);
                return res.json({ status: 'error', message: 'Plese add Admin credentials' });
            }
        });

        // get admin route mongoose
        app.post('/api/isAdmin', async (req, res) => {
            try {
                const findAdmin = await Admin.findOne({ adminEmail: req.body.email });
                if (!findAdmin) {
                    return res.json({ status: 'error', message: 'Admin not Fount' });
                }
                return res.json({ status: 'ok', message: 'Admin found' });
            } catch {
                return res.json({ status: 'error', message: 'Error! Admin not found' });
            }
        });
    } finally {
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}/`);
        });
    }
}

run().catch(console.dir);
