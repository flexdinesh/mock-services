/* eslint-disable no-console */
const axios = require('axios');
const program = require('commander');
const config = require('./config');

const isPortAvailable = port =>
  axios
    .get('/', { baseURL: `http://localhost:${port}` })
    .then(res => false)
    .catch(err => err.code === 'ECONNREFUSED');

/*
  @usage
  npm run start -- -s foo,...
*/
program
  .version('0.1.0')
  .option('-s, --services <services>', 'list of services to start')
  .parse(process.argv);

let services = {};
if (program.services) program.services.split(',').forEach(service => (services[service] = true));
else {
  services = {
    foo: true,
    bar: true,
  };
}

const startServer = (name, port) =>
  isPortAvailable(port).then((isAvailable) => {
    if (isAvailable) {
      require(`./services/${name}`).listen(port);
      console.log(`Mock ${name} service started on port ${port}`);
    }
  });

if (services.foo) startServer('foo', config.foo.port);
if (services.bar) startServer('bar', config.bar.port);
