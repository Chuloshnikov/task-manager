const express = require('express');
const bodyParser = require('body-parser');


const app = express();

dotenv.config();

const port = process.env.PORT || 8080;


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello server!');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});