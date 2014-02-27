module("template basic", {
  setup: function() {
    var view = Ember.View.create({
      container: new Ember.Container(),
      template: Ember.TEMPLATES["unit-basic"]
    });

    Ember.run(function() {
      view.appendTo("#qunit-fixture");
    });
  }
});

test("template is rendered", function() {
  equal(Ember.$("#qunit-fixture .unit-basic").text(), "unit basic template text");
});
