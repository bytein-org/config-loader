# config-loader

__config-loader__ is a simple configuration loader that loads configuration from JSON file and passes it to a callback function.

## Installation

```
npm install @bytein/config-loader
```

## Use

Create a `config/default.json` inside your application folder.

```javascript
var configLoader = require('config-loader');

configLoader.load(function(err, config) {
    if(err) throw err;
    // console.log(config);
}
```
