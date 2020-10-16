const fs = require('fs');
const path = require('path');
const sqlcmd = require('sqlcmd-runner');
const cfg = require('./config.json');
const files = fs.readdirSync(path.resolve(__dirname, `${cfg.path}`));

const arrFiles = [];
files.forEach(async (file) => {
  if (file.indexOf('.sql') > -1 || file.indexOf('.SQL') > -1) {
    arrFiles.push(path.resolve(__dirname, `${cfg.path}`, `${file}`));
  }
});

module.exports.dumpScriptinDatabase = (config, context) => {
  return sqlcmd({
    server: config.server,
    database: config.database,
    username: config.username,
    password: config.password,
    encryptedConnection: false,
    inputFiles: arrFiles,
  });
};
