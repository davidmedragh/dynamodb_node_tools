// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Set the region


const params = {};

  
function getDynamoDB() {
    AWS.config.update({region: 'us-east-1'});
    return  new AWS.DynamoDB();
}

/** 
 * @author dmedragh
 * This function list all tables of the current dynamodb account
 * 
 * 
 */
function getListTable(params) {
    return getDynamoDB().listTables(params, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
      });
}

module.exports = {
    getListTable
}

getListTable(params)
