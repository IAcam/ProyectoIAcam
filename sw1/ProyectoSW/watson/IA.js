/*var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

var visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: 'mPmyhzibcxVZ-RqeXfu42QCr7VxLlJJdak9iO4KPJMej'
});

var images_file= fs.createReadStream('./images.jpeg');

var params = {
  url: images_file,
};

visualRecognition.classify(params, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(JSON.stringify(response, null, 2))
  }
});
*/


const VisualRecognitionV4 = require('ibm-watson/visual-recognition/v4');
const { IamAuthenticator } = require('ibm-watson/auth');
var fs = require('fs')
const visualRecognition = new VisualRecognitionV4({
  version: '2020-02-05',//5/2/2020 
  authenticator: new IamAuthenticator({
   //clave de la cuenta del grupo
// apikey: 'J_FLM2BXQaO8vUl8uKcqvNW2ODtuPPpphJiJ-Mw_zdQu',
    //clave de mi cuenta :
 apikey: 'iHIqyXI9luwM7EJqiirESJqv2Qwaqe7giBa9mHmsS0bs',
  }),
  url: 
//'https://gateway.watsonplatform.net/visual-recognition/api',
'https://api.us-south.visual-recognition.watson.cloud.ibm.com/instances/98b82d5e-0534-40f7-b23e-7da3fea938c8',
  disableSslVerification: true,
});


class IaWatson{
     constructor(){}

     consultar(imagen){
        var threshold = 0.40;
        const params = {
          imagesFile: [
            {
              data: fs.createReadStream(imagen),
              contentType: 'image/jpeg',
            }
          ],
       //   collectionIds: ['26c2ed88-9daa-4474-9621-6fc41bd76c9b','154baf83-411c-4250-83e9-5dec4d9f0b35'],
//modulos de mi cuenta:
          collectionIds: ['d43688e9-955f-44c7-aec8-8def5194e636'],
          features: ['objects'],
          threshold: threshold
        };
        console.log(params)
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
