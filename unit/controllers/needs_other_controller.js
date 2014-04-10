
App.NeedsOtherController = Ember.Controller.extend({
  needs: "other",

  valueThroughDependency: function() {
    return this.get('controllers.other.someValue');
  }.property()
});

//--------------------------------------------------------------------------

var controller;

module("controller needs other controller", {
  setup: function() {
    controller = App.NeedsOtherController.create({
      controllers: {
        other: Ember.Controller.create({
          someValue: "some value"
        })
      }
    });
  }
});

test("controller can access value through dependency to other controller", function() {
  equal(controller.get("valueThroughDependency"), "some value");
});
