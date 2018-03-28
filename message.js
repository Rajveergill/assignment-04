'use strict';

const AWS = require('aws-sdk');
const accountSid = 'your accountSid'
const authToken = 'your authToken'
const client = require('twilio')(accountSid, authToken)

module.exports.message = (event, context, callback) => {


  client.messages.create(
    {
      to: '',
      from: '+16042106756',
      body: 'file uploaded'
    },
    
  )
};
