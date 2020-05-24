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
app.use(express.text({
    type: "text/plain"
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

const db = firebase.initializeApp(firebaseConfig).firestore();

app.get('/', (_ ,res) => {
	res.status(200).send('this is working');
});

app.post('/login', (req, res) => {
    let data = req.body;
    let username = data.username;
    let password = data.password;
    db.collection('logindetails').doc('idpass').get()
        .then((doc) => {
            var childData = doc.data();
            console.log("childData idpass:", childData);
            if (username == childData.id && password == childData.pass){
                res.status(200).send({status: 200, data: {message: 'LoggedIn'}});
            } else {
                res.status(300).send({status: 300, data: {message: 'Invalid'}})
            }
        })
})

app.post('/createProfile', (req, res) => {
    console.log("req: ", req.body)
    let data = {};
    let doc = db.collection("profiles").doc();
    data.id = doc.id;
    doc.set(data);
    console.log("data: ", data);
    console.warn(data.id)
    res.status(200).send(`Added with id: ${data.id}`)
})

app.get('/profile/:id', (req, res) => {
    let id = req.params.id;
    db.collection('profiles').doc(id).get()
    .then((doc) => {
        var childData = doc.data();
        res.status(200).send({row: childData});
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
        res.status(200).send({rows: rows});
    })
    .catch((err) => {
        console.log('Error getting documents', err);
    });
})

app.get('/delete', (req, res) => {
    db.collection('profiles').doc(req.query.id).delete();
    res.status(200).send("Deleted")
});

const server = app.listen(port, url, e => {
	if(e) throw e;
	else {
		console.warn('Running at \n'+server.address().address + '\t' +server.address().port)
	}
});