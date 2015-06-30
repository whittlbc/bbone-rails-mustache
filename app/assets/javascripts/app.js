define(["backbone", "router"], function(Backbone, Router) {
    var App = {};
    App.start = function() {
        new Router();
        Backbone.history.start();
    };
    App.start();
    return App;
});
