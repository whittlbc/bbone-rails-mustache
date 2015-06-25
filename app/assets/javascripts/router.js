define(["backbone", "events"], function(Backbone, Events) {

  var Router = Backbone.Router.extend({

    routes: {
    },

    defaultRoute: function () {
      console.log('STARTING APP');
    }
  });

  return Router;

});

