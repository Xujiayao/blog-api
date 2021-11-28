const Application = require('@waline/vercel');

module.exports = Application({
  disallowIPList: ['8.8.8.8', '4.4.4.4'],
});
