# caps-cloud

## Author: Stephanie Hill

![UML](./assets/SNS%20and%20SQS.png)

## Functionality

- This program uses SNS and SQS to create a live connection allowing users to send and queue messages
- Essentially we first set up two different event systems with topic set to pickup, notifying drivers when there was a package to pickup
- The package SQS allowed these notifications to be queued, and returned to drivers in order so they are able to pick them up and deliver them appropriately
- The vendor is then able to be notified upon delivery, and is able to add a personal delivery note
- This whole process can be mimicked in the console, via users AWS account
- Given the proper permissions, users are able to use node to initiate code in each JS file and type in a string of communication to be transmitted back and forth

## Credits

- demo code and class videos