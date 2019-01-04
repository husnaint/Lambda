exports.handler = function(event, context, callback) {
   var AWSXRay = require('aws-xray-sdk');

   AWSXRay.captureHTTPsGlobal(require('http')); 
   AWSXRay.captureHTTPsGlobal(require('https')); 

   const request = require('request-promise-native');
   AWSXRay.capturePromise();

   const handlerReq = async (event) => {
	const response = await request.get({
	  uri: 'https://www.amazon.com'
		});
		return {
	  statusCode: 200,
	  body: ''
		};
	   console.log(response);
   };
   
   console.log('Segment Document: ', AWSXRay.getSegment() + ' : ' +  new Date().toUTCString());

  module.exports = {
		handlerReq
  };
	  callback(null, "Success");
  }
