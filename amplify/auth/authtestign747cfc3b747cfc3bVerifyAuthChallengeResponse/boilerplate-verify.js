/**
 * Verify Auth Challenge Response trigger
 * Compares the user's answer against the expected answer stored
 * in privateChallengeParameters during CreateAuthChallenge.
 *
 * @type {import('@types/aws-lambda').VerifyAuthChallengeResponseTriggerHandler}
 */
exports.handler = async (event) => {
  const expectedAnswer = event.request.privateChallengeParameters.answer;
  const userAnswer = event.request.challengeAnswer;

  event.response.answerCorrect = expectedAnswer === userAnswer;

  console.log(JSON.stringify({
    event: 'VERIFY_AUTH_CHALLENGE',
    user: event.userName,
    answerCorrect: event.response.answerCorrect,
    timestamp: new Date().toISOString(),
  }));

  return event;
};
