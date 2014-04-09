
Ember.TEMPLATES["unit-basic"] = Ember.Handlebars.compile(
  '<div class="unit-basic">unit basic template text</div>'
);

//--------------------------------------------------------------------------

module("template basic", {
  setup: function() {
    var view = Ember.View.create({
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
