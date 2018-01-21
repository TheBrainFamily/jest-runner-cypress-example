
module.exports = {
  projects: [
    {
      'runner': 'jest-runner-cypress',
      'testMatch': ['<rootDir>/cypress/integration/*_spec.js'],
      'displayName': 'cypress'
    },
    {
      'displayName': 'test'
    }
  ]
}