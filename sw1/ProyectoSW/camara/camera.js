const cam = require('foscam');
let fs = require('fs');

cam.setup({
    host: '192.168.0.20',
    port: 80,
    user: 'admin',
    pass: ''
  });
class camara{
    constructor(){

    }

    capturar(){
        capturarInfinito(0);
    }

  
    capturarUno(i){
        return new Promise((resolve , reject)=>{
            cam.snapshot('C:/wamp64/www/IA/imagenes/'+ i + '.jpg' , result =>{
               // console.log(result);
                resolve(result)
                //  capturarInfinito(++i);
            });
        })
       
    }
}

function capturarInfinito(i) {
    setTimeout(() => {
        cam.snapshot('./imagenes/'+ i + '.jpg' , result =>{
            console.log(result);
            capturarInfinito(++i);
        });
    }, 2000)
}


module.exports = camara;