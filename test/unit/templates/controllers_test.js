module("templates - controllers - full environment", {
  setup: function() {
    var container = new Ember.Container();
    container.register("template:rendered", Ember.Handlebars.compile("controller stub"), {instantiate: false});
    container.register("view:rendered", Ember.View);
    container.register("controller:rendered", Ember.Controller);

    var view = Ember.View.create({
      controller: Ember.Controller.create({
        container: container
      }),
      template: Ember.TEMPLATES["unit-controllers"]
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("template renders correctly", function() {
  equal(Ember.$("#qunit-fixture .unit-controllers").text(), "controller stub");
});

module("templates - controllers - stubbing helper", {
  setup: function() {
    sinon.stub(Ember.Handlebars.helpers, 'render').returns(new Handlebars.SafeString("controller stub"));

    var view = Ember.View.create({
      template: Ember.TEMPLATES["unit-controllers"]
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("template renders correctly", function() {
  equal(Ember.$("#qunit-fixture .unit-controllers").text(), "controller stub");
});
