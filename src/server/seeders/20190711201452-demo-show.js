module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Shows', [
      {
        name: 'Test Show',
        startDate: 'test',
        endDate: 'enddate test',
        country: 'US',
        network: 'HBO',
        status: 'Running',
        imageThumbnailPath: 'Thing'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Shows', null, {});
  }
};
