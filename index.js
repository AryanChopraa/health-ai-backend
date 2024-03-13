const express = require('express')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
var cors = require('cors')
const WebSocket = require('ws')
const gptController = require('./controllers/gptController')

dotenv.config();

const port = 3000
const app = express()
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//middlewares
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors())

//routes 
const authRoute = require('./routes/authRoute')
app.use('/auth', authRoute)

const chatRoute= require('./routes/chatRoute')
app.use("/chat",chatRoute)

const requestRoute= require('./routes/requestRoute')
app.use("/request",requestRoute)

// testConnection()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


wss.on('connection', function connection(ws) {
  console.log('Client connected');

  ws.on('message', async function incoming(message) {
    messageString=message.toString()
    const potentialDiagnosis = await gptController.diagnosis(messageString);
    const relatedQuestions = await gptController.relatedQuestions(messageString);

    // Constructing the response object
    const responseObject = {
      potentialDiagnosis,
      relatedQuestions
    };

    // Convert the object to a JSON string
    const responseString = JSON.stringify(responseObject);

    // Send the JSON string over WebSocket
    ws.send(responseString);

  });
});

server.listen(8080, function () {
  console.log('Server started on port 8080');
});
