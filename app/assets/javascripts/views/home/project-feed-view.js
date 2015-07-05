define(['jquery',
	'backbone',
	'underscore',
    'views/home/project-post-view',
	'stache!views/home/project-feed-view',
    ], function ($,
     Backbone,
     _,
     ProjectPostView,
     ProjectFeedViewTpl) {
	'use strict';

	var ProjectFeedView = Backbone.View.extend({

		initialize: function () {
		},

		events: {},

		render: function () {
			var self = this;
            this.$el.html(ProjectFeedViewTpl());

            this.projectPostView = new ProjectPostView({
                el: '.project-post-view'
            });

            this.projectPostView.render();
		}
	});

	return ProjectFeedView;

});
