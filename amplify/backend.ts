import { auth } from './auth/resource';
import { authtestign747cfc3b747cfc3bCreateAuthChallenge } from './auth/authtestign747cfc3b747cfc3bCreateAuthChallenge/resource';
import { authtestign747cfc3b747cfc3bCustomMessage } from './auth/authtestign747cfc3b747cfc3bCustomMessage/resource';
import { authtestign747cfc3b747cfc3bDefineAuthChallenge } from './auth/authtestign747cfc3b747cfc3bDefineAuthChallenge/resource';
import { authtestign747cfc3b747cfc3bPostAuthentication } from './auth/authtestign747cfc3b747cfc3bPostAuthentication/resource';
import { authtestign747cfc3b747cfc3bPreAuthentication } from './auth/authtestign747cfc3b747cfc3bPreAuthentication/resource';
import { authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse } from './auth/authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse/resource';
import { defineBackend } from '@aws-amplify/backend';
import { Duration } from 'aws-cdk-lib';

const backend = defineBackend({
  auth,
  authtestign747cfc3b747cfc3bCreateAuthChallenge,
  authtestign747cfc3b747cfc3bCustomMessage,
  authtestign747cfc3b747cfc3bDefineAuthChallenge,
  authtestign747cfc3b747cfc3bPostAuthentication,
  authtestign747cfc3b747cfc3bPreAuthentication,
  authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse,
});
const cfnUserPool = backend.auth.resources.cfnResources.cfnUserPool;
cfnUserPool.usernameAttributes = ['email'];
cfnUserPool.policies = {
  passwordPolicy: {
    minimumLength: 8,
    requireUppercase: false,
    requireLowercase: false,
    requireNumbers: false,
    requireSymbols: false,
    temporaryPasswordValidityDays: 7,
  },
};
const userPool = backend.auth.resources.userPool;
userPool.addClient('NativeAppClient', {
  refreshTokenValidity: Duration.days(30),
  enableTokenRevocation: true,
  enablePropagateAdditionalUserContextData: false,
  authSessionValidity: Duration.minutes(3),
  disableOAuth: true,
  generateSecret: false,
});
const branchName = process.env.AWS_BRANCH ?? 'sandbox';
backend.authtestign747cfc3b747cfc3bCreateAuthChallenge.resources.cfnResources.cfnFunction.functionName = `authtestign747cfc3b747cfc3bCreateAuthChallenge-${branchName}`;
backend.authtestign747cfc3b747cfc3bCustomMessage.resources.cfnResources.cfnFunction.functionName = `authtestign747cfc3b747cfc3bCustomMessage-${branchName}`;
backend.authtestign747cfc3b747cfc3bDefineAuthChallenge.resources.cfnResources.cfnFunction.functionName = `authtestign747cfc3b747cfc3bDefineAuthChallenge-${branchName}`;
backend.authtestign747cfc3b747cfc3bPostAuthentication.resources.cfnResources.cfnFunction.functionName = `authtestign747cfc3b747cfc3bPostAuthentication-${branchName}`;
backend.authtestign747cfc3b747cfc3bPreAuthentication.resources.cfnResources.cfnFunction.functionName = `authtestign747cfc3b747cfc3bPreAuthentication-${branchName}`;
backend.authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse.resources.cfnResources.cfnFunction.functionName = `authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse-${branchName}`;
