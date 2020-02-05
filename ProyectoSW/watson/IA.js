/*

'use strict';

var VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  iam_apikey: 'INSERT YOUR IAM API KEY HERE',
  version: '2020-02-05'
});

var params = {
  // An image file (.jpg, .png) or .zip file with images
  // images_file: fs.createReadStream('./resources/car.png')
  images_file: fs.createReadStream('./resources/images.zip')
};

visualRecognition.classify(params, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(res, null, 2));
  }
});

*/

//1. he cambiado a v3 según la documentación del repositorio en git (v4 es para python no para node)
const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v3');
const { IamAuthenticator } = require('ibm-watson/auth');
var fs = require('fs')



const visualRecognition = new VisualRecognitionV4({
  //2. he colocado la versión en la que se creó mi apykey
  version: '2020-02-05',
  
  authenticator: new IamAuthenticator({
    //3.  he cambiado la apikey 1Gv2HoSLBAUhEB2QmhPY8OCI5LKa52S3DIPSgNaeowhw a mi proyecto de ibmcloud
     apikey: '1Gv2HoSLBAUhEB2QmhPY8OCI5LKa52S3DIPSgNaeowhw',
  }),
  
  //4. he colocado la dirección url que corresponde a mi instancia en ibmcloud
  url: 'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/98b82d5e-0534-40f7-b23e-7da3fea938c8',
  disableSslVerification: true,
  
  headers: {
    'X-Watson-Learning-Opt-Out': 'true'
  }
  
});


class IaWatson{
     constructor(){}

     consultar(imagen){
        var threshold = 0.55;
        const params = {
          imagesFile: [
            {
              data: fs.createReadStream(imagen),
              contentType: 'image/jpeg',
            }
          ],
          //collectionIds: ['26c2ed88-9daa-4474-9621-6fc41bd76c9b','154baf83-411c-4250-83e9-5dec4d9f0b35'],
          collectionIds: ['d43688e9-955f-44c7-aec8-8def5194e636'],
          features: ['objects'],
          threshold: 55
        };
        
        return visualRecognition.analyze(params);
          /*.then(response => {
           // console.log(JSON.stringify(response.result, null, 2))
            resolve(JSON.stringify(response.result, null, 2));
          })
          .catch(err => {
            console.log('error: ', err);
          });
*/
     }
}

module.exports = IaWatson;
