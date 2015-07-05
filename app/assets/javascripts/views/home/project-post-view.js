define(['jquery',
	'backbone',
	'underscore',
	'stache!views/home/project-post-view',
    ], function ($,
     Backbone,
     _,
     ProjectPostViewTpl) {
	'use strict';

	var ProjectPostView = Backbone.View.extend({

		initialize: function () {
		},

		events: {},

		render: function () {
			var self = this;
            this.$el.html(ProjectPostViewTpl({
            }));
		}
	});

	return ProjectPostView;

});
