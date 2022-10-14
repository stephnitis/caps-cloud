'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});

const Chance = require('chance');
const chance = new Chance();

const sns = new AWS.SNS();

const topic = 'arn:aws:sns:us-west-2:913662206055:pickup.fifo';
const queueUrl = 'https://sqs.us-west-2.amazonaws.com/913662206055/flowers';

let orderDetails = {
  orderId: chance.guid(),
  customer: chance.name(),
  vendorId: queueUrl,
};

let messageString = JSON.stringify(orderDetails);

const payload = {
  Message: messageString,
  TopicArn: topic,
  MessageGroupId: 'flowerVendors',
  MessageDeduplicationId: chance.guid(),
};

sns.publish(payload).promise()
  .then(data => console.log(data))
  .catch(err => console.log(err));

