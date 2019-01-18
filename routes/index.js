
const path = require('path');
const dotEnvPath = path.resolve('./.env');
require('dotenv').config({ path: dotEnvPath});
// combine routes
const route1 = require('./route1');
const route2 = require('./startBot');

module.exports= (server) => {
  route1(server);
  route2(server);
};