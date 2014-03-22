var controller;

module("controller actions", {
  setup: function() {
    controller = App.ActionsController.create();
  }
});

test("invoking action", function() {
  Ember.run(function() {
    controller.send("updateProperty", "new property value");
  });

  equal(controller.get("someProperty"), "new property value");
});
