define(["backbone", "events", "views/home/index-view"], function(Backbone, Events, IndexView) {

  var Router = Backbone.Router.extend({

    routes: {
        '*path': 'defaultRoute'
    },

    defaultRoute: function () {
        console.log('heard default route');

        var indexView = new IndexView({
            el: '#TheApp'
        });

        indexView.render();
    }
  });

  return Router;


});

