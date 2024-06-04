# Employee Application Testing

This repository contains tests for the Employee Application project. Two main testing suites are included: one for testing server routes connecting with MongoDB, and another for testing the frontend using Jasmine.

## Server Testing

### Directory: `Employee-Application`

The server testing suite is located in the `Employee-Application` directory. It contains tests to ensure that the server routes interact correctly with the MongoDB database. To run these tests, follow these steps:

1. Navigate to the `Employee-Application` directory.
2. Ensure that MongoDB is running locally or accessible at the configured URI.
3. Run `npm update` to ensure all modules are updated to their latest versions.
4. Run `npx jasmine` to execute the server tests using the test framework configured in the project.

## Frontend Testing

### Directory: `TestFrontEnd`

The frontend testing suite is located in the `TestFrontEnd` directory. It contains Jasmine tests to verify the functionality of the frontend components and interactions. To run these tests, follow these steps:

1. Navigate to the `TestFrontEnd` directory.
2. Run `npm update` to ensure all modules are updated to their latest versions.
3. Run `npx jasmine` to execute the frontend tests using Jasmine.

For setting up Jasmine for frontend testing, please refer to the [Jasmine documentation](https://jasmine.github.io/setup/nodejs.html).

Ensure that you have updated all the required modules by running `npm update` before running the tests.
