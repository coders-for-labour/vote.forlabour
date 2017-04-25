# 'vote.forlabour'

A microsite that allows a user to:

- search by location or postcode
- it works out what constituency they are in
- it then looks up constituency details
- it also provides written reasons why you should vote Labour, and how to register to vote

Currently the dataset shows the current MP, regardless of that MP's party. Maybe it should show the Labour representative details instead.

------------------------------

### Tech used

- [Node.js and npm](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/) (good for spatial search)
- [Express](http://expressjs.com/) and [Mongoose](http://mongoosejs.com/)
- [Handlebars](http://handlebarsjs.com/)
- [Less](http://lesscss.org/), [PostCSS](http://postcss.org/) and [Autoprefixer](https://github.com/postcss/autoprefixer)
- [Grunt](https://gruntjs.com/)
- [ESLint](http://eslint.org/)

------------------------------

#### Running locally

You'll need to have installed Node.js, npm, MongoDB, Grunt and ESLint.

There is a configuration file (`src/config.js`), make sure that all the values are correct.

Run Grunt (`grunt`) to make sure the CSS is built properly.

Run the app using `npm start`.

Assuming `MongoDB` is running in the background, visit `http://localhost:3000/dataload` to populate the database.

------------------------------

#### Included data

This repository comes with a dataset (`src/data/data.csv`). The data was pulled from [TheyWorkForYou](https://www.theyworkforyou.com/) on 24th April. It is loaded into a MongoDB instance to make it easier to do geospatial searches.

The data is CSV, includes Constituency, Latitude<sup>\*</sup>, Longitude<sup>\*</sup>, Current MP, Current MP's Party.


<sup>\*</sup> the lat/lon for the centre of the constituency as per [TheyWorkForYou](https://www.theyworkforyou.com/)