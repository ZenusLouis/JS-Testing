//Must be remove before run the solutions code

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../index'); // Adjust the path if needed
const Employee = require('../models/Employee');

describe('Employee API', () => {
  let testEmployeeId;

  beforeAll(async () => {
    // Connect to a test database before running the tests
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Create a test employee before running the tests -> optional (you can doing or not)
  });

  afterAll(async () => {
    // Clean up the test employee and close the database connection after running the tests
    // await mongoose.connection.close();
  });

  it('GET /employees should return a list of employees', async () => {
    //Testing get data from the database
     // Check if response body is an array
  
    // Log the response body to see its contents
  
    // Example: Check if the response body contains specific items
    const expectedEmployees = [

    ];
  
    // Compare the length of the response body with the length of the expected list
    expect(response.body.length).toBe(expectedEmployees.length);
  
    // Check if each expected employee is present in the response body
    expectedEmployees.forEach((expectedEmployee, index) => {

    });
  });  


  // it('GET /employees/:id should return a specific employee', async () => {

  // });

  // it('POST /employees/add should add a new employee', async () => {

  // });
  
  // it('POST /employees/update/:id should update an employee', async () => {
  // });
  
//   it('DELETE /employees/:id should delete an employee', async () => {

//   });
});
