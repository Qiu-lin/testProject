$(function () {
    $.getJSON("/shop/mock/list.json",function (data) {
        const html = template( "list_template", { list: data.res_body.list } );
        $( ".list" ).html( html );
    });
});