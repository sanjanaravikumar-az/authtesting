import { defineFunction } from '@aws-amplify/backend';

const branchName = process.env.AWS_BRANCH ?? 'sandbox';

export const authtestign747cfc3b747cfc3bPostAuthentication = defineFunction({
  entry: './index.js',
  name: `authtestign747cfc3b747cfc3bPostAuthentication-${branchName}`,
  timeoutSeconds: 25,
  memoryMB: 128,
  environment: { MODULES: 'custom', ENV: `${branchName}`, REGION: 'us-east-1' },
  runtime: 22,
});
