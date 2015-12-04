define([
    'js-whatever/js/base-page',
    'text!about-page/templates/about-page.html',
    'datatables.net-bs'
], function(BasePage, template) {

    return BasePage.extend({
        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.getTemplateParameters()));

            this.$('table.table').dataTable({
                autoWidth: false,
                language: {
                    search: ''
                }
            });

            this.$('.dataTables_filter input')
                .prop('placeholder', this.getTemplateParameters().strings.search)
                .addClass('search-query');
        },

        getTemplateParameters: $.noop
    });
});
