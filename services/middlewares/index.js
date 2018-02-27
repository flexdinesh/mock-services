const cors = require('./cors');
const delayResponse = require('./delay-response');

module.exports = {
	corsMiddleware: cors,
	delayResponseMiddleware: delayResponse
};
