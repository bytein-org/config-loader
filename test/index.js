var configLoader = require('../lib/');
var path = require('path');
var assert = require('assert');

describe('config-loader', function() {

    before(function() {
        configLoader.set('config_dir', path.join(process.cwd(), 'test', 'fixtures', 'config'));
    });

    it('should load default config', function(done) {
        configLoader.load(function(err, config) {
            assert.equal(null, err);
            assert.equal('default', config.name);
            done();
        });
    });

    it('should load testing config', function(done) {
        process.env.NODE_ENV = 'testing';
        configLoader.load(function(err, config) {
            assert.equal(null, err);
            assert.equal('testing', config.name);
            done();
        });
    });

    it('should load production config', function(done) {
        configLoader.load('production', function(err, config) {
            assert.equal(null, err);
            assert.equal('production', config.name);
            done();
        });
    });

    it('should fail loading non-existing config', function(done) {
        configLoader.load('development', function(err, config) {
            assert.notEqual(null, err);
            done();
        });
    });

});
