
Ember.TEMPLATES["unit-views"] = Ember.Handlebars.compile(
  '<div class="unit-views">{{view "inner"}}</div>'
);

//--------------------------------------------------------------------------

module("templates - views", {
  setup: function() {
    var container = new Ember.Container();
    container.register("view:inner", Ember.View.extend({
      template: Ember.Handlebars.compile("view stub")
    }));

    var view = Ember.View.create({
      container: container,
      template: Ember.TEMPLATES["unit-views"]
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("template renders correctly", function() {
  equal(Ember.$("#qunit-fixture .unit-views").text(), "view stub");
});
