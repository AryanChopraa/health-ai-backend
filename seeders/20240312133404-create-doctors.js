// YYYYMMDDHHmmss-create-doctors.js (or any other name you prefer)
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Seed dummy data for the Doctor model
    await queryInterface.bulkInsert('Doctors', [
      {
        name: 'Dummy Doctor 1',
        email: 'dummydoctor1@example.com',
        phone: '1234567890',
        DOB: new Date('1990-01-01'),
        gender: 'Male',
        password: '123',
        rating: 4, // Example rating value
        field: 'Cardiology', // Example field value
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dummy Doctor 2',
        email: 'dummydoctor2@example.com',
        phone: '9876543210',
        DOB: new Date('1985-05-15'),
        gender: 'Female',
        password: '456',
        rating: 3, // Example rating value
        field: 'Orthopedics', // Example field value
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Dummy Doctor 3',
        email: 'dummydoctor3@example.com',
        phone: '5555555555',
        DOB: new Date('1982-09-20'),
        gender: 'Male',
        password: '789',
        rating: 5,
        field: 'Neurology',
        createdAt: new Date(),
        updatedAt: new Date()
        },
  
        {
        name: 'Dummy Doctor 4',
        email: 'dummydoctor4@example.com',
        phone: '6666666666',
        DOB: new Date('1978-03-10'),
        gender: 'Female',
        password: 'abc',
        rating: 4,
        field: 'Oncology',
        createdAt: new Date(),
        updatedAt: new Date()
        },
  
        {
        name: 'Dummy Doctor 5',
        email: 'dummydoctor5@example.com',
        phone: '4444444444',
        DOB: new Date('1995-07-25'),
        gender: 'Male',
        password: 'def',
        rating: 3,
        field: 'Dermatology',
        createdAt: new Date(),
        updatedAt: new Date()
        },
  
        {
        name: 'Dummy Doctor 6',
        email: 'dummydoctor6@example.com',
        phone: '2222222222',
        DOB: new Date('1989-11-05'),
        gender: 'Female',
        password: 'ghi',
        rating: 4,
        field: 'Pediatrics',
        createdAt: new Date(),
        updatedAt: new Date()
        },
  
        {
        name: 'Dummy Doctor 7',
        email: 'dummydoctor7@example.com',
        phone: '3333333333',
        DOB: new Date('1976-02-15'),
        gender: 'Male',
        password: 'jkl',
        rating: 5,
        field: 'Psychiatry',
        createdAt: new Date(),
        updatedAt: new Date()
        },
  
        {
        name: 'Dummy Doctor 8',
        email: 'dummydoctor8@example.com',
        phone: '9999999999',
        DOB: new Date('1980-08-30'),
        gender: 'Female',
        password: 'mno',
        rating: 4,
        field: 'Urology',
        createdAt: new Date(),
        updatedAt: new Date()
        },
  
        {
        name: 'Dummy Doctor 9',
        email: 'dummydoctor9@example.com',
        phone: '8888888888',
        DOB: new Date('1987-04-12'),
        gender: 'Male',
        password: 'pqr',
        rating: 3,
        field: 'Gastroenterology',
        createdAt: new Date(),
        updatedAt: new Date()
        }

      // Add more dummy doctor records as needed
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data
    await queryInterface.bulkDelete('Doctors', null, {});
  }
};
