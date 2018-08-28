// Perform these operations on datatables
// 'l' - Length changing
// 'f' - Filtering input
// 't' - The table!
// 'i' - Information
// 'p' - Pagination
// 'r' - pRocessing
// For removing default search box just remove the f character from sDom.
// like:

$(document).ready(function () {
    var dataSet = data;
    var tableInst = $('#ufo-table').DataTable({
        data: dataSet,
        //'scrollY': false,
        //scrollY:        "300px",
        //scrollX:        true,
        //scrollCollapse: true,
        //responsive: true,
        sDom:'<"top"fi>rt<"bottom"lp><"clear">',
        columns: [
            { 'data': "datetime" },
            { 'data': "city" },
            { 'data': "state" },
            { 'data': "country" },
            { 'data': "shape" },
            { 'data': "durationMinutes" },
            {
                'data': "comments",
                'sortable': false
            }
        ]
    });

    $('#ufo-table tfoot th').each(function () {
        var title = $('#ufo-table tfoot th').eq($(this).index()).text();
        $(this).html('<input type="text" placeholder="Search '+title+'" />');
    });

    // DataTable
    var table = $('#ufo-table').DataTable();

    // Apply the search
    table.columns().eq(0).each(function (colIdx) {
        $('input', table.column(colIdx).footer()).on('keyup change', function () {
            table
                .column(colIdx)
                .search(this.value)
                .draw();
        });
    });

    $('.showHideColumn').on('click', function(){
        //alert($(this).attr('data-columnindex'));
        var tableColumn = table.column($(this).attr('data-columnindex'));
        tableColumn.visible(!tableColumn.visible());
    });

});


