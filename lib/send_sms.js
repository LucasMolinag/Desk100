// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "AC64fb6646fff4fc0aab5370a8379c0ea0";
const authToken = "dda2d74b52d80d8b8f558b20150c62bc";
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Your food is ready for pick up',
    from: '+17603506224',
    to: '+1-604-445-4107'
  })
  .then(message => console.log(message.sid));