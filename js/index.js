$( function () {
    $.getJSON( "/shop/mock/hotsale.json", function ( data ) {
        const html = template( "hot_sale_temp", { list: data.res_body.list } );
        $( ".grid_2" ).prepend( html );
    } );
} );

$(function () {
    $( ".grid_2" ).on( "click","a",function () {
        const currProd = {
            id: $( this ).find( ".id" ).text(),
            title: $( this ).find( "p" ).text(),
            price: $( this ).find( ".btn" ).text(),
            img: $( this ).find( ".img-responsive" ).attr( "src" ),
            amount: 1
        };
        $.cookie.json = true;
    } );
} )

