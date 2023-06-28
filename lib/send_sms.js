// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure



const accountSid = "AC64fb6646fff4fc0aab5370a8379c0ea0";
const authToken = "8c3d535ee57931a0703a21272a29db9a";
const client = require('twilio')(accountSid, authToken);

const sendtext = (number) => {
  client.messages
    .create({
      body: 'Your food is ready for pick up',
      from: '+17603506224',
      to: number
    })
    .then(message => console.log(message.sid));

};

module.exports = sendtext;
  