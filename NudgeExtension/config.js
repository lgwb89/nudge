var config = {
  'debug': true,
  'apiEndpoint': 'http://ec2-34-252-87-55.eu-west-1.compute.amazonaws.com:3000/'
}

// http://ec2-34-252-87-55.eu-west-1.compute.amazonaws.com:3000/

//  global debug option for logger
debugMode = config.debug;

if (debugMode) {
  console.log('in debug mode');
}

function log(data) {

  if (debugMode == true) {
    console.log(data)
  }
}