if(process.env.NODE_ENV !== 'production')
    require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;
const api_key = process.env.API_KEY;
/*uses static files like HTML, CSS, JS*/
app.use(express.static('public'));

/* root 's content */
// app.get('/',(req,res) => {
//     res.send("hello");
// })

/*get dinosaur's name*/
app.get('/dinoname', async (request,response) => {
    /*from node-fetch*/
    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
        }
    });
    const dinoNameResponse = await fetchApi.json();

    //get data from api to server
    response.json(dinoNameResponse);
})

/*get dinosaur's image*/
app.get('/dinoimage',async (request,response) => {
    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=10", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });
    const dinoImageResponse = await fetchApi.json();
    response.json(dinoImageResponse);
})

app.listen(port, () => {
    console.log("yoyo")
})