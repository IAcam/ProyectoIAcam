const express = require('express')
const app = express()
var camara = require('./camara/camera');
var ipcam = new camara();
var IaWatson = require('./watson/IA');
var watson = new IaWatson();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
/////////////////////////

app.use(function(req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  // Request headers you wish to allow
  //res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/camara' , (req,res)=>{
    ipcam.capturarUno(req.body.i);
    res.send({ dato : 'capturado'});
});

app.post('/watson' , (req , res)=>{
  ipcam.capturarUno(req.body.i).then(ruta=>{
    watson.consultar(ruta).then(response=>{
      //console.log(JSON.stringify(response.result, null, 2))
       res.send(response.result)
     })
  })
   /* watson.consultar().then(response=>{
     // console.log(JSON.stringify(response.result, null, 2))
      res.send(response.result)
    })*/
});
 
app.listen(3000);