/*
 * (c) Copyright 2015 Micro Focus or one of its affiliates.
 *
 * Licensed under the MIT License (the "License"); you may not use this file
 * except in compliance with the License.
 *
 * The only warranties for products and services of Micro Focus and its affiliates
 * and licensors ("Micro Focus") are as may be set forth in the express warranty
 * statements accompanying such products and services. Nothing herein should be
 * construed as constituting an additional warranty. Micro Focus shall not be
 * liable for technical or editorial errors or omissions contained herein. The
 * information contained herein is subject to change without notice.
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
