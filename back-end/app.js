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

const collection =firestore.collection('userdata').get()
                .then(snapshot => snapshot.docs.map(doc => ({...doc.data(), id: doc.id })));

const doc = firestore.collection('userdata').doc('details').get()
            .then(item => ({id: item.id, ...item.data()}))

setTimeout(() => {
    console.log("collection: ", collection);
    console.log("doc: ", doc);
}, 10000);

app.get('/', (_ ,res) => {
	res.send('this is working');
});

const server = app.listen(port, url, e => {
	if(e) throw e;
	else {
		console.warn('Running at \n'+server.address().address + '\t' +server.address().port)
	}
});