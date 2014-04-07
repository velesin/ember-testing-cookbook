
App.BasicController = Ember.Controller.extend({
  classField: "class field value"
});

//--------------------------------------------------------------------------

var controller;

module("controller basic", {
  setup: function() {
    controller = App.BasicController.create({
      instanceField: "instance field value"
    });
  }
});

test("both class and instance fields are accessible", function() {
  equal(controller.get("classField"), "class field value");
  equal(controller.get("instanceField"), "instance field value");
});
