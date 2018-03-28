'use strict';

const AWS = require('aws-sdk');
const accountSid = 'ACa05d22a7a0fd171683730169270a757b'
const authToken = 'd2eb185275936b32ebcc6e710f59f244'
const client = require('twilio')(accountSid, authToken)

module.exports.message = (event, context, callback) => {


  client.messages.create(
    {
      to: '+17782238722',
      from: '+16042106756',
      body: 'file uploaded'
    },
    
  )
};
