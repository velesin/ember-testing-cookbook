module("controller basic");

test("both class and instance fields are accessible", function() {
  var controller = App.BasicController.create({
    instanceField: "instance field value"
  });

  equal(controller.get("classField"), "class field value");
  equal(controller.get("instanceField"), "instance field value");
});
