'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const requestsData = [
      {
        patientId: 1,
        doctorId: 2,
        appointmentDate: new Date(),
        accepted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patientId: 2,
        doctorId: 2,
        appointmentDate: new Date(),
        accepted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patientId: 3,
        doctorId: 3,
        appointmentDate: new Date(),
        accepted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patientId: 4,
        doctorId: 2,
        appointmentDate: new Date(),
        accepted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        patientId: 1,
        doctorId: 4,
        appointmentDate: new Date(),
        accepted: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    // Insert requestsData into the 'Requests' table
    return queryInterface.bulkInsert('Requests', requestsData, {});
  },

  async down(queryInterface, Sequelize) {
    // Remove all records from the 'Requests' table
    return queryInterface.bulkDelete('Requests', null, {});
  }
};


