# config-loader

__config-loader__ is a simple configuration loader that loads configuration from JSON file and passes it to a callback function.

## Use

Create a config/default.json inside your application folder.

```
var config = require('config-loader');

config.load(function(conf) {
    // console.log(conf);
}
```
