module.exports = function(config) {
  config.set({

    browsers: ["PhantomJS"],

    frameworks: ["qunit"],

    preprocessors: {
      "app/templates/*.hbs": "ember"
    },

    files: [
      "bower_components/jquery/jquery.js",
      "bower_components/handlebars/handlebars.js",
      "bower_components/ember/ember.js",
      "app/templates/*.hbs",
      "app/app.js",
      "app/**/*.js",
      "test/test_helper.js",
      "test/unit/**/*_test.js",
      "test/e2e/**/*_test.js"
    ],

    autoWatch: true

  });
};
