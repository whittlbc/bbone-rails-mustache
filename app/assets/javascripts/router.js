define(["backbone",
    "events",
    "views/home/index-view",
    "views/projects/project-view"],
    function(Backbone,
     Events,
     IndexView,
     ProjectView) {

  var Router = Backbone.Router.extend({

    routes: {
        'projects': 'projectRoute',
        '': 'defaultRoute'
    },

    projectRoute: function() {
        console.log('heard project route');

        var projectView = new ProjectView({
            el: '#project'
        });

        projectView.render();
    },

      defaultRoute: function () {
          console.log('heard default route');

          var indexView = new IndexView({
              el: '#home'
          });

          indexView.render();
      }


  });

  return Router;


});

