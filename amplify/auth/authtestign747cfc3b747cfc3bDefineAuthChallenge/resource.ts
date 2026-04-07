import { defineFunction } from '@aws-amplify/backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const authtestign747cfc3b747cfc3bDefineAuthChallenge = defineFunction({
  entry: './index.js',
  name: `authtestign747cfc3b747cfc3bDefineAuthChallenge-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    MODULES: 'boilerplate-define-challenge',
    ENV: `${branchName}`,
    REGION: 'us-east-1',
  },
  runtime: 22,
});
