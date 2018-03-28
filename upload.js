'use strict';

const uuid = require('uuid');
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.s3()
const lambda = require('aws-lambda-invoke');

module.exports.upload = (event) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;
    const eventType = record.eventName;
    const eventTime = record.eventTime;
    const filesize = record.s3.object.size;

    const params = {
      TableName: 'Drop',
      Item: {
        id: uuid.v1(),
        name: filename,
        size: filesize,
        eventType: eventType,
        eventTime: eventTime
      }
    }
    dynamoDb.put(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      let raj = {
  FunctionName: 'ass04-dev-message',
  Payload: JSON.stringify({ filename: filename })
      }
      lambda.invoke(raj, (err, results) => {
        if(err) {
          console.log(err)
          return
        }
        console.log(results)
      })
    })

  });
};