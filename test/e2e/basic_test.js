module("index page", {
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
