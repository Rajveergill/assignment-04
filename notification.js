'use strict';

const AWS = require('aws-sdk');
const accountSid = 'your accountSid'
const authToken = 'your authToken'
const client = require('twilio')(accountSid, authToken)

module.exports.notification = (event, context, callback) => {

  console.log('notification')
  // const data = JSON.parse(event);
  console.log(event)

  client.messages.create(
    {
      to: '',
      from: '+16042106756',
      body: 'your has been added to your S3 bucket'
    },
    
  )
};