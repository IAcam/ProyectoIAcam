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


const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v4');
const { IamAuthenticator } = require('ibm-watson/auth');
var fs = require('fs')
const visualRecognition = new VisualRecognitionV4({
  version: '2019-02-11',
  authenticator: new IamAuthenticator({
   // apikey: 'UOY4lz0utQcvPTa3H9CppINvwbMTFIaizUHeDZgvAjMj',
     apikey: 'mPmyhzibcxVZ-RqeXfu42QCr7VxLlJJdak9iO4KPJMej',
  }),
  url: 'https://gateway.watsonplatform.net/visual-recognition/api',
  disableSslVerification: true,
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
          collectionIds: ['77a128b5-c9e2-4bdf-9c38-4019f1fc12f3', '7dbe7129-f941-46ff-9f80-64363cf7c146'],
          features: ['objects'],
          threshold: threshold
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
