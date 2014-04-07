document.write('<div id="app-fixture"></div>');
document.write('<div id="qunit-fixture"></div>');

App = Ember.Application.create();
App.rootElement = '#app-fixture';
App.setupForTesting();
App.injectTestHelpers();
