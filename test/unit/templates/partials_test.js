module("template partials - testing template and partial together", {
  setup: function() {
    var container = new Ember.Container();
    container.register("template:_partial", Ember.TEMPLATES["_partial"], {instantiate: false});

    var view = Ember.View.create({
      container: container,
      template: Ember.TEMPLATES["unit-partials"]
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("template with partial renders correctly", function() {
  equal(Ember.$("#qunit-fixture .unit-partials .partial").text(), "partial text");
});

module("template partials - testing template and partial separately");

test("template renders correctly", function() {
  var container = new Ember.Container();
  container.register("template:_partial", Ember.Handlebars.compile("partial stub"), {instantiate: false});

  var view = Ember.View.create({
    container: container,
    template: Ember.TEMPLATES["unit-partials"]
  });

  Ember.run(function() {
    view.appendTo("#qunit-fixture");
  });

  equal(Ember.$("#qunit-fixture .unit-partials").text(), "partial stub");
});

test("partial renders correctly", function() {
  var view = Ember.View.create({
    container: new Ember.Container(),
    template: Ember.TEMPLATES["_partial"]
  });

  Ember.run(function() {
    view.appendTo("#qunit-fixture");
  });

  equal(Ember.$("#qunit-fixture .partial").text(), "partial text");
});


module("template partials - using App.__container__", {
  setup: function() {
    var view = Ember.View.create({
      container: App.__container__,
      template: Ember.TEMPLATES["unit-partials"]
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("template with partial renders correctly", function() {
  equal(Ember.$("#qunit-fixture .unit-partials .partial").text(), "partial text");
});
