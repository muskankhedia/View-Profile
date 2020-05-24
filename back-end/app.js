/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 5000,
	url = '0.0.0.0',
	firebase = require('firebase');

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true,
}));
app.use(express.text({
	type: 'text/plain'
}));

app.use((_,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// Firebase Configuration
var firebaseConfig = {
	apiKey: 'AIzaSyAtBXLZeFCZqG8sxgNa5BE7vseSVQ8_Ixg',
	authDomain: 'view-profile-8cfa7.firebaseapp.com',
	databaseURL: 'https://view-profile-8cfa7.firebaseio.com',
	projectId: 'view-profile-8cfa7',
	storageBucket: 'view-profile-8cfa7.appspot.com',
	messagingSenderId: '518216747719',
	appId: '1:518216747719:web:0bfee0b5468bfd01904ce2',
	measurementId: 'G-VBCBJFGMDL'
};

// Create db and initialize the firebase
const db = firebase.initializeApp(firebaseConfig).firestore();

// Demo Route to check the status of the server
app.get('/', (_ ,res) => {
	res.status(200).send({message: 'this is working'});
});

/**
 * POST Request
 * /login Login Route for the admin to login to the website
 */
app.post('/login', (req, res) => {
	let data = req.body;
	let username = data.username;
	let password = data.password;
	db.collection('logindetails').doc('idpass').get()
		.then((doc) => {
			var childData = doc.data();
			console.log('childData idpass:', childData);
			if (username == childData.id && password == childData.pass){
				res.status(200).send({message: 'LoggedIn'});
			} else {
				res.status(300).send({message: 'Invalid login'});
			}
		});
});

/**
 * POST Request
 * /createProfile Creates a new Profile
 */
app.post('/createProfile', (req, res) => {
	let data = req.body;
	let doc = db.collection('profiles').doc();
	data.id = doc.id;
	doc.set(data);
	res.status(200).send({data_id: data.id});
});

/**
 * GET Request
 * /profile/:id to get the details of a particular profile
 */
app.get('/profile/:id', (req, res) => {
	let id = req.params.id;
	db.collection('profiles').doc(id).get()
		.then((doc) => {
			var childData = doc.data();
			res.status(200).send({row: childData});
		});
});

/**
 * POST Request
 * editProfile/:id to edit a profile
 */
app.post('/editProfile/:id', (req, res) => {
	let data = req.body;
	let doc = db.collection('profiles').doc(id);
	doc.update(data);
});

/**
 * GET Request
 * /profies to fetch all the profiles
 */
app.get('/profiles', (_, res) => {
	db.collection('profiles').get()
		.then((snapshot) => {
			var rows = [];
			snapshot.forEach((doc) => {
				var childData = doc.data();
				rows.push(childData);
			});
			res.status(200).send({rows: rows});
		})
		.catch((err) => {
			console.log('Error getting documents', err);
		});
});

/**
 * GET Request
 * /delete Delete the particular profile
 */
app.get('/delete', (req, res) => {
	db.collection('profiles').doc(req.query.id).delete();
	res.status(200).send({message: 'Deleted'});
});

const server = app.listen(port, url, e => {
	if(e) throw e;
	else {
		console.warn('Running at \n'+server.address().address + '\t' +server.address().port);
	}
});
