var path = require('path');
var fs = require('fs');

var options = {
    envvar: 'NODE_ENV',
    load_default: false,
    default_env: 'default',
    config_dir: path.join(process.cwd(), 'config'),
};

exports.set = function(option, value) {
    if(!options.hasOwnProperty(option)) {
        throw new Error('Trying to set unknown option ' + option);
    }
    options[option] = value;
}

exports.load = function(environment, callback) {
    if(typeof environment == 'function' && callback === undefined) {
        callback = environment;
        environment = undefined;
    }
    var env = environment || process.env[options.envvar] || options.default_env;
    var configFilePath = path.join(options.config_dir, env + '.json');

    fs.exists(configFilePath, function(exists) {
        if(!exists) {
            callback(new Error('Configuration file is missing at path ' + configFilePath));
        }
        callback(false, require(configFilePath));
    });
}
