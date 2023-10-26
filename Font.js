const express = require('express');
const axios = require('axios');
const app = express();
var bodyParser = require('body-parser');



const base_url = 'http://localhost:3000';


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(__dirname + '/public'));

app.get('/Players', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/Player');
        res.render('Players', { Players: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/Player/:ID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/Player/' + req.params.ID);
        res.render('Player', { Player: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createPlayer", (req, res) => {
    res.render('createPlayer');
});

app.post("/createPlayer", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.post(base_url + '/Player', data);
        res.redirect("/Players"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updatePlayer/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/Player/' + req.params.ID);
            res.render('updatePlayer', { Player: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updatePlayer/:ID", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.put(base_url + '/Player/' + req.params.ID, data);
        res.redirect("/Players");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deletePlayer/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/Player/' + req.params.ID);
            res.redirect("/Players");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});







app.get('/Clubs', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/Club');
        res.render('Clubs', { Clubs: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/Club/:ID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/Club/' + req.params.ID);
        res.render('Club', { Club: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createClub", (req, res) => {
    res.render('createClub');
});

app.post("/createClub", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.post(base_url + '/Club', data);
        res.redirect("/Clubs"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateClub/:ID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/Club/' + req.params.ID);
            res.render('updateClub', { Club: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateClub/:ID", async (req, res) => {
    try {
        const data = { Name: req.body.Name, Data: req.body.Data, Pic: req.body.Pic };
        await axios.put(base_url + '/Club/' + req.params.ID, data);
        res.redirect("/Clubs");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteClub/:ID", async (req, res) => {
    try {
        await axios.delete(base_url + '/Club/' + req.params.ID);
            res.redirect("/Clubs");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});









app.get('/', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/ClubOfPlayer');
        res.render('ClubOfPlayers', { ClubOfPlayers: response.data });
    } catch (err) {
        console.log(err);
        res.status(500).send('err');
    }
});

app.get("/ClubOfPlayer/:PlayerID", async (req, res) => {
    try {
        const response = await axios.get(base_url + '/ClubOfPlayer/' + req.params.PlayerID);
        res.render('ClubOfPlayer', { ClubOfPlayer: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/createClubOfPlayer", (req, res) => {
    res.render('createClubOfPlayer');
});

app.post("/createClubOfPlayer", async (req, res) => {
    try {
        const data = { PlayerID: req.body.PlayerID, ClubID: req.body.ClubID };
        await axios.post(base_url + '/ClubOfPlayer', data);
        res.redirect("/"); 
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/updateClubOfPlayer/:PlayerID", async (req, res) => {
    try {
        const response = await axios.get(
            base_url + '/ClubOfPlayer/' + req.params.PlayerID);
            res.render('updateClubOfPlayer', { ClubOfPlayer: response.data });
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.post("/updateClubOfPlayer/:PlayerID", async (req, res) => {
    try {
        const data = { PlayerID: req.body.PlayerID, ClubID: req.body.ClubID };
        await axios.put(base_url + '/ClubOfPlayer/' + req.params.PlayerID, data);
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});

app.get("/deleteClubOfPlayer/:PlayerID", async (req, res) => {
    try {
        await axios.delete(base_url + '/ClubOfPlayer/' + req.params.PlayerID);
            res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send('err');
    }
});








app.listen(3300, () => {
    console.log('Listening on port 3300');
});