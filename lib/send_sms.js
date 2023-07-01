// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure



const accountSid = "AC64fb6646fff4fc0aab5370a8379c0ea0";
const authToken = "85c25a994d70fb28c61ebf8746f048b9";
const client = require('twilio')(accountSid, authToken);

const sendtextOrderConfirm = (number, message) => {
  client.messages
    .create({
      body: message,
      from: '+17603506224',
      to: number
    })
    .then(message => console.log(message.sid));

};

const sendtextReadyPickup = (number) => {
  client.messages
    .create({
      body: 'Your food is ready for pick up',
      from: '+17603506224',
      to: number
    })
    .then(message => console.log(message.sid));

};

module.exports = {sendtextOrderConfirm,sendtextReadyPickup};
  