/**
 * Pre Authentication trigger
 * Runs before Cognito authenticates the user. Use it to apply custom
 * validation or reject sign-in attempts based on business rules.
 *
 * @type {import('@types/aws-lambda').PreAuthenticationTriggerHandler}
 */
exports.handler = async (event, context) => {
  const { userAttributes } = event.request;
  const email = userAttributes.email || '';

  // Example: block sign-in from specific email domains
  const blockedDomains = ['blocked.com', 'spam.com'];
  const domain = email.split('@')[1];

  if (blockedDomains.includes(domain)) {
    throw new Error('Sign-in not allowed from this email domain.');
  }

  // Log the sign-in attempt for auditing
  console.log(JSON.stringify({
    event: 'PRE_AUTH',
    email,
    userPoolId: event.userPoolId,
    timestamp: new Date().toISOString(),
  }));

  return event;
};
