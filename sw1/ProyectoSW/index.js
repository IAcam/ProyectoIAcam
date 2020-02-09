const express = require('express')
const app = express()
var camara = require('./camara/camera');
var ipcam = new camara();
var IaWatson = require('./watson/IA');
var dir = require('node-dir');
var watson = new IaWatson();

var notificacion = require('./notificacion/notificacion')
var noti = new notificacion();
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
      /* objetos = Array.from(response.result.images);
       objetos.forEach(element => {
         if (element.objects.collections) {
           noti.enviarNotificacion("Se ha detectado algo sospechoso",{
            priority: 'high',
            timeToLive: 60 * 60 * 24, // 1 day
          })
         }
       console.log(response.result)*/
       res.send(JSON.stringify(response.result))
    // })
  })
   // watson.consultar().then(response=>{
     // console.log(JSON.stringify(response.result, null, 2))
    //  res.send(response.result)
    })
});


app.get('/notificacion', (req, res)=>{
  noti.enviarNotificacion( "hola mundo",{
    priority: 'high',
    timeToLive: 60 * 60 * 24, // 1 day
  }).then(data=>{
    res.send(data)
  })
})
 

app.get('/rutas', (req,res)=>{
  dir.readFiles('c:/wamp64/www/IA/imagenes/',function(err, content, next) {
        if (err) throw err;
       // console.log('content:', content);
        next();
    },function(err, files){
        if (err) throw err;
        console.log('finished reading files:', files.length);
        res.send(files)
    });
});

app.listen(3000);
