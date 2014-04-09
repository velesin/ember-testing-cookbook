
App.BasicView = Ember.View.extend({
  classField: "class field value"
});

//--------------------------------------------------------------------------

var view;

module("view basic", {
  setup: function() {
    view = App.BasicView.create({
      instanceField: "instance field value"
    });
  }
});

test("both class and instance fields are accessible", function() {
  equal(view.get("classField"), "class field value");
  equal(view.get("instanceField"), "instance field value");
});
