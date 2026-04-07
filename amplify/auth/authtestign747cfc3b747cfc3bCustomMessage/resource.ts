import { defineFunction } from '@aws-amplify/backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const authtestign747cfc3b747cfc3bCustomMessage = defineFunction({
  entry: './index.js',
  name: `authtestign747cfc3b747cfc3bCustomMessage-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: {
    EMAILSUBJECT: 'confirmation',
    MODULES: 'verification-link',
    REDIRECTURL: 'www.google.com',
    RESOURCENAME: 'authtestign747cfc3b747cfc3bCustomMessage',
    ENV: `${branchName}`,
    EMAILMESSAGE: 'click to redirect',
    REGION: 'us-east-1',
  },
  runtime: 22,
});
