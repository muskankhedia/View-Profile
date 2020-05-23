/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express'),
	bodyParser = require('body-parser'),
	app = express(),
	port = process.env.PORT || 5000,
    url = '0.0.0.0',
    firebase = require('firebase');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true,
}));

app.use((_,res,next)=>{
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

var firebaseConfig = {
    apiKey: "AIzaSyAtBXLZeFCZqG8sxgNa5BE7vseSVQ8_Ixg",
    authDomain: "view-profile-8cfa7.firebaseapp.com",
    databaseURL: "https://view-profile-8cfa7.firebaseio.com",
    projectId: "view-profile-8cfa7",
    storageBucket: "view-profile-8cfa7.appspot.com",
    messagingSenderId: "518216747719",
    appId: "1:518216747719:web:0bfee0b5468bfd01904ce2",
    measurementId: "G-VBCBJFGMDL"
};

const firestore = firebase.initializeApp(firebaseConfig).firestore();
var db = firebase.firestore();

const collection =firestore.collection('profiles').get()
                .then(snapshot => snapshot.docs.map(doc => ({...doc.data(), id: doc.id })));

const doc = firestore.collection('profiles').doc("1").get()
            .then(item => ({id: item.id, ...item.data()}))

setTimeout(() => {
    console.log("collection: ", collection);
    console.log("doc: ", doc);
}, 10000);

app.get('/', (_ ,res) => {
	res.send('this is working');
});

app.post('/createProfile', (req, res) => {
    let data = req.body;
    let doc = db.collection("profiles").doc();
    data.id = doc.id;
    doc.set(data);
    res.send("Added with Id: ", data.id)
})

app.get('/profile/:id', (req, res) => {
    let id = req.params.id;
    db.collection('profiles').doc(id).get()
    .then((doc) => {
        var childData = doc.data();
        res.send({row: childData});
    })
})

app.post('/editProfile/:id', (req, res) => {
    let data = req.body;
    let doc = db.collection("profiles").doc(id);
    doc.update(data)
})

app.get('/profiles', (_, res) => {
    db.collection('profiles').get()
    .then((snapshot) => {
        var rows = [];
        snapshot.forEach((doc) => {
            var childData = doc.data();
            rows.push(childData);
        });
        res.send({rows: rows});
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
})

const server = app.listen(port, url, e => {
	if(e) throw e;
	else {
		console.warn('Running at \n'+server.address().address + '\t' +server.address().port)
	}
});