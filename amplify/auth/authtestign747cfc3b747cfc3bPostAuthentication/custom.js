/**
 * Post Authentication trigger
 * Runs after a successful authentication. Use it for analytics,
 * logging, or syncing user data to external systems.
 *
 * @type {import('@types/aws-lambda').PostAuthenticationTriggerHandler}
 */
exports.handler = async (event, context) => {
  const { userAttributes } = event.request;
  const email = userAttributes.email || '';

  // Log successful authentication for auditing
  console.log(JSON.stringify({
    event: 'POST_AUTH',
    email,
    userPoolId: event.userPoolId,
    triggerSource: event.triggerSource,
    timestamp: new Date().toISOString(),
  }));

  // Example: track last login time
  // You could write to DynamoDB here if you add the table + IAM permissions
  // const params = {
  //   TableName: process.env.USERS_TABLE,
  //   Key: { email },
  //   UpdateExpression: 'SET lastLogin = :now',
  //   ExpressionAttributeValues: { ':now': new Date().toISOString() },
  // };
  // await dynamoDb.update(params).promise();

  return event;
};
