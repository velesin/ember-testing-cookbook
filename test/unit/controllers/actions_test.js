module("controller actions");

test("invoking action", function() {
  var controller = App.ActionsController.create();

  Ember.run(function() {
    controller.send("updateProperty", "new property value");
  });

  equal(controller.get("someProperty"), "new property value");
});
