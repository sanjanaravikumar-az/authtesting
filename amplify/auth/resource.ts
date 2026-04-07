import { defineAuth } from '@aws-amplify/backend';
import { authtestign747cfc3b747cfc3bCreateAuthChallenge } from './authtestign747cfc3b747cfc3bCreateAuthChallenge/resource';
import { authtestign747cfc3b747cfc3bCustomMessage } from './authtestign747cfc3b747cfc3bCustomMessage/resource';
import { authtestign747cfc3b747cfc3bDefineAuthChallenge } from './authtestign747cfc3b747cfc3bDefineAuthChallenge/resource';
import { authtestign747cfc3b747cfc3bPostAuthentication } from './authtestign747cfc3b747cfc3bPostAuthentication/resource';
import { authtestign747cfc3b747cfc3bPreAuthentication } from './authtestign747cfc3b747cfc3bPreAuthentication/resource';
import { authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse } from './authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse/resource';

export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: '1209',
      verificationEmailBody: () => '{####}this is',
    },
  },
  userAttributes: {
    email: {
      required: true,
      mutable: true,
    },
  },
  triggers: {
    createAuthChallenge: authtestign747cfc3b747cfc3bCreateAuthChallenge,
    customMessage: authtestign747cfc3b747cfc3bCustomMessage,
    defineAuthChallenge: authtestign747cfc3b747cfc3bDefineAuthChallenge,
    postAuthentication: authtestign747cfc3b747cfc3bPostAuthentication,
    preAuthentication: authtestign747cfc3b747cfc3bPreAuthentication,
    verifyAuthChallengeResponse:
      authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse,
  },
  multifactor: {
    mode: 'OFF',
  },
});
