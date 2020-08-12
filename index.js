const config = require('./config.json');
const script = require('./script.js');

console.log('Running script');

script
  .dumpScriptinDatabase(config, 'context')
  .then(() => {
    console.log('Script complete');
  })
  .catch((err) => {
    console.error('Script error: ', err);
  });
