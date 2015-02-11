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
    'e2e/**/*.js'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  rootElement: 'body',
  beforeLaunch: function() {
    return vr.initRun('VisualReviewExamplePage', 'mainScenario');
    // At this point, global variable 'protractor' object will NOT be set up,
    // and globals from the test framework will NOT be available. The main
    // purpose of this function should be to bring up test dependencies.
  },
  onPrepare: function() {
    // At this point, global variable 'protractor' object will be set up, and
    // globals from the test framework will be available. For example, if you
    // are using Jasmine, you can add a reporter with:
    // jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter(
    // 'outputdir/', true, true));
    //
    // If you need access back to the current configuration object,
    // use a pattern like the following:
    // browser.getProcessedConfig().then(function(config) {
    // // config.capabilities is the CURRENT capability being run, if
    // // you are using multiCapabilities.
    // console.log('Executing capability', config.capabilities);
    // });
  },
  onComplete: function() {
    // At this point, tests will be done but global objects will still be
    // available.
  },
  onCleanUp: function(exitCode) {},
  afterLaunch: function(exitCode) {
    return vr.cleanup(exitCode);
  },
  framework: 'jasmine',
  jasmineNodeOpts: {
    silent: false,
    showColors: true
  },
  params: {
    visualreview: vr
  }
};
