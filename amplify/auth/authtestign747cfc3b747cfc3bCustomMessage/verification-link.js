/**
 * Custom Message trigger
 * Customizes email/SMS messages for sign-up verification (with a
 * click-to-verify link), forgot-password, and resend-code flows.
 *
 * @type {import('@types/aws-lambda').CustomMessageTriggerHandler}
 */
exports.handler = async (event) => {
  console.log(JSON.stringify({
    event: 'CUSTOM_MESSAGE',
    triggerSource: event.triggerSource,
    user: event.userName,
  }));

  if (event.triggerSource === 'CustomMessage_SignUp') {
    // Verification link flow for new sign-ups
    const { codeParameter } = event.request;
    const { region, userName } = event;
    const { clientId } = event.callerContext;
    const redirectUrl = `${process.env.REDIRECTURL}/?username=${userName}`;
    const resourcePrefix = process.env.RESOURCENAME.split('CustomMessage')[0];

    const hyphenRegions = [
      'us-east-1', 'us-west-1', 'us-west-2',
      'ap-southeast-1', 'ap-southeast-2', 'ap-northeast-1',
      'eu-west-1', 'sa-east-1',
    ];
    const separator = hyphenRegions.includes(region) ? '-' : '.';

    const payload = Buffer.from(
      JSON.stringify({ userName, redirectUrl, region, clientId }),
    ).toString('base64');

    const bucketUrl = `http://${resourcePrefix}verificationbucket-${process.env.ENV}.s3-website${separator}${region}.amazonaws.com`;
    const url = `${bucketUrl}/?data=${payload}&code=${codeParameter}`;

    event.response.emailSubject = process.env.EMAILSUBJECT;
    event.response.emailMessage = `${process.env.EMAILMESSAGE}. \n ${url}`;
    event.response.smsMessage = `Your verification code is ${codeParameter}`;
  } else if (event.triggerSource === 'CustomMessage_ForgotPassword') {
    // Forgot password flow
    const { codeParameter } = event.request;
    event.response.emailSubject = 'Reset your password';
    event.response.emailMessage = `Your password reset code is: ${codeParameter}`;
    event.response.smsMessage = `Your password reset code is: ${codeParameter}`;
  } else if (event.triggerSource === 'CustomMessage_ResendCode') {
    // Resend verification code
    const { codeParameter } = event.request;
    event.response.emailSubject = 'Your new verification code';
    event.response.emailMessage = `Your new verification code is: ${codeParameter}`;
    event.response.smsMessage = `Your new verification code is: ${codeParameter}`;
  }

  return event;
};
