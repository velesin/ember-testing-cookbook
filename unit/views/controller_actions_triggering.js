
App.ControllerTriggeringView = Ember.View.extend({
  click: function() {
    this.get("controller").send("someAction", "some param");
  }
});

//--------------------------------------------------------------------------

var view;
var someActionSpy;

module("view controller actions triggering", {
  setup: function() {
    someActionSpy = sinon.spy();

    // Due to Ember architecture, actions hash can be passed only during class extension, not creation - that's why we're using createWithMixins. Alternatively  extend().create() can be used.
    view = App.ControllerTriggeringView.create({
      controller: Ember.Controller.createWithMixins({
        actions: {
          someAction: someActionSpy
        }
      })
    });
  }
});

test("controller action is triggered", function() {
  view.click();
  ok(someActionSpy.calledWith("some param"));
});
