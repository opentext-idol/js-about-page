define([
    'js-utils/js/base-page',
    'text!about-page/templates/about-page.html',
    'datatables',
    'datatables-plugins/datatable-htmlsort'
], function(BasePage, template) {

    return BasePage.extend({
        template: _.template(template),

        render: function() {
            this.$el.html(this.template(this.getTemplateParameters()));

            this.$('table.table').dataTable({
                htmlFiltering: true,
                bAutoWidth: false,
                oLanguage: {
                    sSearch: ''
                }
            });

            this.$('.dataTables_filter input')
                .prop('placeholder', this.getTemplateParameters().strings.search)
                .addClass('search-query');
        },

        getTemplateParameters: $.noop
    });
});
