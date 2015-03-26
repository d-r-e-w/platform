/*global define*/
define(function (require) {
    'use strict';

    var CommentsHeaderView,
        BaseView = require('oroui/js/app/views/base/view'),
        template = require('text!../../../templates/comment/comments-header-view.html');

    CommentsHeaderView = BaseView.extend({
        template: template,
        listen: {
            'add collection': 'render',
            'remove collection': 'render',
            'reset collection': 'render',
            'syncStateChange collection': 'render',
            'stateChange collection': 'render'
        }
    });

    return CommentsHeaderView;
});
