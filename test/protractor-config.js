const VisualReview = require('visualreview-protractor');

var vr = new VisualReview({
  hostname: 'localhost',
  port: 7000,
  metaDataFn: function (capabilities) {
    return {
      createdBy: 'Daniel',
      on: '2015-02-20',
      webStorageEnabled: capabilities.caps_.webStorageEnabled,
      wut: undefined,
      wat: null
    }
  },
  propertiesFn: function (capabilities) {
    return {
      jsEnabled: capabilities.caps_.javascriptEnabled,
      browser: capabilities.caps_.browserName
    };
  }
});

exports.config = {

  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumPort: null,
  seleniumArgs: ['-browserTimeout=60'],
  specs: [
    'e2e/**/*.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  rootElement: 'body',

  params: {
    visualreview: vr
  },

  beforeLaunch: function() {
    return vr.initRun('VisualReviewExamplePage', 'mainScenario');
  },

  afterLaunch: function(exitCode) {
    return vr.cleanup(exitCode);
  },

  framework: 'jasmine',
  jasmineNodeOpts: {
    silent: false,
    showColors: true
  }
};
