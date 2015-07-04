define(['jquery',
	'backbone',
	'underscore',
	'stache!views/home/index-view',
    ], function ($,
     Backbone,
     _,
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
		}
	});

	return IndexView;

});