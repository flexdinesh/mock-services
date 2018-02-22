module.exports.getFooDetails = (options = {}) => ({
  id: options.id || '911',
  name: options.name || 'weepybruce',
  role: options.role || 'user',
  emailId: options.emailId || 'brucewayne@batman.dc',
});
