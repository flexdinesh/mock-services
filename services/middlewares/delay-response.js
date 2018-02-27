const delayResponse = (app, delayTime) => {
	delayTime = isFinite(delayTime) ? delayTime : 0;

	app.use((req, res, next) => {
		setTimeout(() => {
			next();
		}, delayTime);
	});
};

module.exports = delayResponse;
