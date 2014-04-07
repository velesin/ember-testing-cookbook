module.exports = function(config) {
  config.set({

    browsers: ["PhantomJS"],

    frameworks: ["sinon", "qunit"],

    files: [
      "bower_components/jquery/jquery.js",
      "bower_components/handlebars/handlebars.js",
      "bower_components/ember/ember.js",
      "bootstrap.js",
      "test/unit/**/*_test.js",
      "test/e2e/**/*_test.js"
    ],

    autoWatch: true

  });
};
