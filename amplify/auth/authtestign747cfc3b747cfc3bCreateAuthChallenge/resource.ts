import { defineFunction } from '@aws-amplify/backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const authtestign747cfc3b747cfc3bCreateAuthChallenge = defineFunction({
  entry: './index.js',
  name: `authtestign747cfc3b747cfc3bCreateAuthChallenge-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    MODULES: 'boilerplate-create-challenge',
    CHALLENGEANSWER: '',
    ENV: `${branchName}`,
    REGION: 'us-east-1',
  },
  runtime: 22,
});
