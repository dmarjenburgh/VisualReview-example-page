const VisualReview = require('visualreview-protractor');

var vr = new VisualReview({
  hostname: 'localhost',
  port: 7000
});

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  seleniumPort: null,
  seleniumArgs: ['-browserTimeout=60'],
  specs: [
    'e2e/landingPage/langingPageScenario2.js'
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
