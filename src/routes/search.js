const fetch = require('isomorphic-fetch');
const Constituency = require('../models/Constituency');


module.exports = (req, res, next) => {
  const postcode = req.body.postcode;

  fetch(`http://postcodes.io/postcodes/${postcode}`)
    .then(response => response.json())
    .then((json) => {
      if (json && json.result && json.result.parliamentary_constituency) {
        const constituency = json.result.parliamentary_constituency;
        const query = Constituency.findOne({ 'name': constituency });

        query.exec((err, mp) => {
          if (err) {
            res.json({});
          } else {
            res.render('pages/mp-details', {
              details: mp,
              layout: false,
            });
          }
        });
      } else {
        res.json({});
      }
    })
    .catch(err => res.json({}));
};
