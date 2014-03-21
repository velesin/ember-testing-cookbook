var controller;
var view;

module("template bound properties", {
  setup: function() {
    controller = Ember.Controller.create({
      someProperty: "controller property value"
    });

    view = Ember.View.create({
      container: new Ember.Container(),
      template: Ember.TEMPLATES["unit-bound-properties"],
      controller: controller,
      someProperty: "view property value"
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("properties are rendered", function() {
  equal(Ember.$("#qunit-fixture .controller-property").text(), "controller property value");
  equal(Ember.$("#qunit-fixture .view-property").text(), "view property value");
});

test("properties are updated", function() {
  Ember.run(function() {
    controller.set("someProperty", "controller property value - updated");
    view.set("someProperty", "view property value - updated");
  });

  equal(Ember.$("#qunit-fixture .controller-property").text(), "controller property value - updated");
  equal(Ember.$("#qunit-fixture .view-property").text(), "view property value - updated");
});
