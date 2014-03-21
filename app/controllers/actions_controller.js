App.ActionsController = Ember.Controller.extend({
  someProperty: "initial property value",

  actions: {
    updateProperty: function(newValue) {
      this.set("someProperty", newValue);
    }
  }
});
