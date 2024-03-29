const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')

const mongoose = require('mongoose')
const dbConfig = require('./config/database.config')
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database.")
}).catch( err => {
    console.error('Couldn not connect to the database. Exiting now...', err);
    process.exit()
})

const app = express()
app.use(cors())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use(cookieParser())
app.use(bodyParser.json({limit: '1000mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '1000mb', extended: true}))
app.use(express.json({limit: '1000mb', extended: true}))
app.use(express.urlencoded({extended: true, limit: '1000mb'}))
//TODO: Session Setting

//TODO: Static Setting ( frontend dist, frontend landing, upload )
app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

const port = process.env.PORT || 5000;
const server = app.listen(port, function() {
	console.log('Server Listening On Port : ' + port );
});

const apiRoute = require('./routes/api.route.js')
const webRoute = require('./routes/web.route.js')
app.use('/api', apiRoute)
app.use('/web', webRoute)

app.get('/download', (req, res) => {
    
});

// TODO: Setting the Route for the Frontend dist
// app.use('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
// })
