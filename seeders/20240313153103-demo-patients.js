'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const patientsData = [
      {
        name: 'Patient 1',
        email: 'patient1@example.com',
        phone: '1234567890',
        DOB: new Date(1990, 0, 1), 
        gender: 'Male',
       

        password: 'password123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patient 2',
        email: 'patient2@example.com',
        phone: '9876543210',
        DOB: new Date(1985, 5, 15), 
        gender: 'Female',


        password: 'securepass',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patient 3',
        email: 'patient3@example.com',
        phone: '5551234567',
        DOB: new Date(1988, 9, 25), // October 25, 1988
        gender: 'Male',
       
 
        password: 'pass1234',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patient 4',
        email: 'patient4@example.com',
        phone: '7778889999',
        DOB: new Date(1995, 2, 8), // March 8, 1995
        gender: 'Female',
   
  
        password: '12345678',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Patient 5',
        email: 'patient5@example.com',
        phone: '4445556666',
        DOB: new Date(1992, 7, 20), // August 20, 1992
        gender: 'Male',


        password: 'password',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Insert patientsData into the 'Patients' table
    return queryInterface.bulkInsert('Patients', patientsData, {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all records from the 'Patients' table
    return queryInterface.bulkDelete('Patients', null, {});
  }
};
