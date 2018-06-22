$( function () {
    $( ".header" ).load( "/shop/html/include/header.html", function () {
        $( ".search :text" ).on( "keyup", function () {
            let val = $( this ).val();
            let url = `https://suggest.taobao.com/sug?code=utf-8&q=${val}&callback=?`
            $.getJSON( url, function ( data ) {
                let html = "";
                data.result.forEach( function ( curr ) {
                    html += `<div>${curr[ 0 ]}</div>`;
                } );
                $( ".suggest" ).show().html( html );
            } );
        } );
        $( ".suggest" ).delegate( "div", "click", function () {
            let text = $( this ).text();
            $( ".search :text" ).val( text );
            $( ".suggest" ).hide();
        } );
        /*$( ".header_bottom_right" ).mouseout( function () {
            $( ".suggest" ).hide();
        } );
         $( ".suggest" ).mouseover( function () {
            $( ".suggest" ).show();
        } ); */
        let timer = 0;
        $( ".menu" ).mouseenter( function () {
            $( this ).children( ".megapanel" ).show();
        } );
        $( ".menu" ).mouseleave( function () {
            timer = setTimeout( () => {
                $( this ).children( ".megapanel" ).hide();
            }, 300 );
        } );
        $(".megapanel").hover(function () {
            //鼠标移入二级菜单
            clearTimeout( timer );
            $( this ).show();
        },function () {
            //鼠标移出二级菜单,不做处理
        })
    } );
    $( ".footer" ).load( "/shop/html/include/footer.html" );
} );