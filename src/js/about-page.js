/*
 * Copyright 2015 Hewlett-Packard Development Company, L.P.
 *
 * Licensed under the MIT License (the "License"); you may not use this project except in compliance with the License.
 */

define([
    'js-whatever/js/base-page',
    'text!about-page/templates/about-page.html',
    'datatables.net-bs'
], function(BasePage, template) {

    return BasePage.extend({
        template: _.template(template),

        initialize: function(options) {
            this.options = options;

            this.options.icon = this.options.icon || 'fa fa-cog';
        },

        render: function() {
            this.$el.html(this.template(this.options));

            this.$('table.table').dataTable({
                autoWidth: false,
                language: {
                    search: ''
                }
            });

            this.$('.dataTables_filter input')
                .prop('placeholder', this.options.strings.search);
        }

    });
});
