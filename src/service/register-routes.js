const dataload = require('../routes/dataload');
const home = require('../routes/home');
const search = require('../routes/search');


const config = require('../config');

module.exports = {

  register: (app) => {
    app.get('/', home);
    app.get('/dataload', dataload);
    app.post('/search', search);
  },

};
