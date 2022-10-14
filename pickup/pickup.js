'use strict';

const AWS = require('aws-sdk');
const {Consumer} = require('sqs-consumer');

AWS.config.update({ region: 'us-west-2' });

const message = 'process.argv[2]';

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:913662206055:pickup.fifo';

const payload = {
  Message: message,
  TopicArn: topic,
};

sns.publish(payload).promise()
  .then(data => console.log(data))
  .catch(err => console.log(err));

const app = Consumer.create({
  queueURL: 'https://sqs.us-west-2.amazonaws.com/913662206055/packages.fifo',
  handleMessage: (data) => {
    let body = JSON.parse(data.Body);
    console.log('message Received: ', body);
  },
});

app.start();