define(['jquery',
	'backbone',
	'underscore',
    'views/home/project-feed-view',
	'stache!views/home/index-view',
    ], function ($,
     Backbone,
     _,
     ProjectFeedView,
     IndexViewTpl) {
	'use strict';

	var IndexView = Backbone.View.extend({

		initialize: function () {
		},

		events: {},

		render: function () {
			var self = this;
            this.$el.html(IndexViewTpl({
            }));

            this.projectFeedView = new ProjectFeedView({
                el: '#project-feed'
            });

            this.projectFeedView.render();
		}
	});

	return IndexView;

});