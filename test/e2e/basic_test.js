
Ember.TEMPLATES["e2e-basic"] = Ember.Handlebars.compile(
  '<div id="e2e-basic">e2e basic page text</div>'
);

App.Router.map(function() {
  this.route("e2e-basic");
});

//--------------------------------------------------------------------------

module("e2e-basic page", {
  setup: function() {
    App.reset();
  }
});

test("contains proper text", function() {
  visit("/e2e-basic");
  andThen(function() {
    equal(find("#e2e-basic").text(), "e2e basic page text");
  });
});
