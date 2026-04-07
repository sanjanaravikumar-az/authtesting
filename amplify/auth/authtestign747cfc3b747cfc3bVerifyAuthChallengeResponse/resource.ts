import { defineFunction } from '@aws-amplify/backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse =
  defineFunction({
    entry: './index.js',
    name: `authtestign747cfc3b747cfc3bVerifyAuthChallengeResponse-${branchName}`,
    timeoutSeconds: 25,
    memoryMB: 128,
    environment: {
      RECAPTCHASECRET: '',
      MODULES: 'boilerplate-verify',
      ENV: `${branchName}`,
      REGION: 'us-east-1',
    },
    runtime: 22,
  });
