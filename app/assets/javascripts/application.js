define(["backbone", "router"], function(Backbone, Router) {
    var App = {};
    App.start = function() {
        new Router();
        Backbone.history.start({
        	// add this so that you can actually do "www.whatever.com/extension" rather than "www.whatever.com/#extension"
        	pushState: true
        });
    };
    App.start();
    return App;
});
