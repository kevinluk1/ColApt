
const express = require("express");
const app = express();
const PORT = 3002;
const cors = require('cors')
var axios = require('axios');


app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5002'],
    credentials: true
}))


app.get('/', async (req, res) => {
    console.log(req.query)
    const city = req.query.city
    var config = {
        method: 'GET',
        url: `https://zylalabs.com/api/226/cities+cost+of+living+and+average+prices+api/655/cost+of+living+by+city?country=united-states&city=${city}`,
        headers: {
            'Authorization': 'Bearer 664|oMNo9KmNjtAVLoFAkikzEt5TAaWTGzS9Uy4UiXiN'
        },
    };
    axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
    })
        .catch(function (error) {
            console.log(error);
        });

    let responseData;
    async function getData() {
        try {
            const response = await axios(config);
            responseData = response.data;
            // console.log(responseData["Country Name"])
        } catch (error) {
            console.log(error);
        }
    }

    await getData();
    console.log(responseData);
    res.send(responseData)
})

app.get('/receiveMessage', async (req, res) => {
    try {
        console.log("Message Requested")
        res.send("A message from CS361")
    } catch (error) {
        console.log(error);
    }
})

app.post('/sendMessage', async (req, res) => {
    try {
        console.log("Message Sent")
        res.send("A message from CS361, POST request")
    } catch (error) {
        console.log(error);
    }
})

app.get('/laCol', async (req, res) => {
    try {
        const laCol = require('./laCol.json')
        console.log(laCol);
        console.log("Los Angeles Requested")
        res.json(laCol)
    } catch (error) {
        console.log(error);
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});


