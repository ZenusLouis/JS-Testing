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

    // Create a test employee before running the tests
    // const testEmployee = await Employee.create({
    //   name: 'Test Employee',
    //   position: 'Tester',
    //   department: 'Testing',
    // });
    // testEmployeeId = testEmployee._id;
  });

  afterAll(async () => {
    // Clean up the test employee and close the database connection after running the tests
    // await Employee.deleteMany({});
    // await mongoose.connection.close();
    // server.close();
  });

  it('GET /employees should return a list of employees', async () => {
    const response = await request(app).get('/employees');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true); // Check if response body is an array
  
    // Log the response body to see its contents
    console.log('Response Body:', response.body);
  
    // Example: Check if the response body contains specific items
    const expectedEmployees = [
      { name: 'John Doe', position: 'Manager', department: 'Finance' },
      { name: 'Jane Smith', position: 'Developer', department: 'Engineering' },
    ];
  
    // Compare the length of the response body with the length of the expected list
    expect(response.body.length).toBe(expectedEmployees.length);
  
    // Check if each expected employee is present in the response body
    expectedEmployees.forEach((expectedEmployee, index) => {
      expect(response.body[index].name).toBe(expectedEmployee.name);
      expect(response.body[index].position).toBe(expectedEmployee.position);
      expect(response.body[index].department).toBe(expectedEmployee.department);
    });
  });  

  // it('POST /employees/add should add a new employee', async () => {
  //   const newEmployeeData = {
  //     name: 'New Employee',
  //     position: 'Developer',
  //     department: 'Development',
  //   };
  //   const response = await request(app).post('/employees/add').send(newEmployeeData);
  //   expect(response.status).toBe(200);
  //   expect(response.text).toBe('"Employee added!"'); // Update expectation to include quotation marks
  // });
  
  // it('POST /employees/update/:id should update an employee', async () => {
  //   const updatedEmployeeData = {
  //     name: 'Updated Employee',
  //     position: 'Tester',
  //     department: 'Testing',
  //   };
  //   const response = await request(app).post(`/employees/update/${testEmployeeId}`).send(updatedEmployeeData);
  //   expect(response.status).toBe(200);
  //   expect(response.text).toBe('"Employee updated!"'); // Update expectation to include quotation marks
  // });
  
//   it('DELETE /employees/:id should delete an employee', async () => {
//     const response = await request(app).delete(`/employees/${testEmployeeId}`);
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('Employee deleted.');
//   });
});
