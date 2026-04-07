/**
 * Define Auth Challenge trigger
 * Controls the multi-step custom auth flow:
 *   Step 1: SRP_A → respond with PASSWORD_VERIFIER
 *   Step 2: PASSWORD_VERIFIER success → respond with CUSTOM_CHALLENGE
 *   Step 3: CUSTOM_CHALLENGE success → issue tokens
 * Fails authentication after 3 failed attempts or on any unexpected state.
 *
 * @type {import('@types/aws-lambda').DefineAuthChallengeTriggerHandler}
 */
exports.handler = async (event) => {
  const session = event.request.session;

  console.log(JSON.stringify({
    event: 'DEFINE_AUTH_CHALLENGE',
    sessionLength: session.length,
    session: session.map((s) => ({
      name: s.challengeName,
      result: s.challengeResult,
    })),
  }));

  // Step 1: First round is SRP_A — move to PASSWORD_VERIFIER
  if (session.length === 1 && session[0].challengeName === 'SRP_A') {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'PASSWORD_VERIFIER';
  }
  // Step 2: Password verified — move to CUSTOM_CHALLENGE
  else if (
    session.length === 2 &&
    session[1].challengeName === 'PASSWORD_VERIFIER' &&
    session[1].challengeResult === true
  ) {
    event.response.issueTokens = false;
    event.response.failAuthentication = false;
    event.response.challengeName = 'CUSTOM_CHALLENGE';
  }
  // Step 3: Custom challenge answered correctly — issue tokens
  else if (
    session.length === 3 &&
    session[2].challengeName === 'CUSTOM_CHALLENGE' &&
    session[2].challengeResult === true
  ) {
    event.response.issueTokens = true;
    event.response.failAuthentication = false;
  }
  // Any other state — fail
  else {
    event.response.issueTokens = false;
    event.response.failAuthentication = true;
  }

  return event;
};
