# Combining code coverage from multiple runs

Minimal reproduction attempt for [issue 821](https://github.com/istanbuljs/nyc/issues/821) in the `istanbuljs/nyc` repo, which was reported with version 11.6.0 (released March 13, 2018). Everything worked as expected with version 13.3.0 (released February 14, 2019).

## Setup

`$ npm install`

## Tests

Run Unit Tests

`$ npm run test:unit`

Run Integration Tests

`$ npm run test:integration`

Run Unit & Integration Tests

`$ npm test`

## Code Coverage

Generate Code Coverage for Unit Tests

`$ npm run coverage:unit`

Generate Code Coverage for Integration Tests

`$ npm run coverage:integration`

Generate Code Coverage for Unit & Integration Tests

`$ npm run coverage`
