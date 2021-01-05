const graylog2 = require('graylog2');

class Logger {
  constructor(options) {
    this.logger = new graylog2.graylog({
      servers: [{ host: options.host, port: options.port }],
    });
    this.config = {
      app: 'courseleaf',
      env: options.env,
      tag: `intdev.node.${options.env}.courseleaf`,
    };
    return this;
  }

  log(msg, level = 6) {
    this.config.level = level;
    this.logger.log(msg, this.config);
    console.log(msg);
  }

  error(msg, level = 1) {
    this.config.level = level;
    this.logger.log(msg, this.config);
    console.error(msg);
  }
}

module.exports = Logger;
