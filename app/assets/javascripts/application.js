define(["backbone", "router"], function(Backbone, Router) {
    var App = {};
    App.start = function() {
        new Router();
        Backbone.history.start({pushState: true});
    };
    App.start();
    return App;
});
