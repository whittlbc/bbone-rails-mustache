define(['jquery',
    'backbone',
    'underscore',
    'stache!views/projects/project-view',
], function ($,
             Backbone,
             _,
             ProjectViewTpl) {
    'use strict';

    var ProjectView = Backbone.View.extend({

        initialize: function () {
        },

        events: {},

        render: function () {
            var self = this;
            this.$el.html(ProjectViewTpl({
                message: 'Projects'
            }));
        }
    });

    return ProjectView;

});