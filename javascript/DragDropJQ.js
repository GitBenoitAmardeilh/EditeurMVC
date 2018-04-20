/*
|-------------------------------------------------
|                JQuery - Drag & Drop
|-------------------------------------------------
*/

(function($){

    /* ***************************** */

    var lengthlistPolice = $('#divListPolices').offset();

    /* ***************************** */

    /* "ifrm" Utile pour appendChild() */

    ifrm;
    ifrm.contentDocument.body.style.margin = '0px';

    var count = 0;


    var scrollBodyY = 0;    

    var scrollDivPoliceY = 0;


    var posXMouse = 0;

    var posYMouse = 0;


    var posXDiv = 0;

    var posYDiv = 0;


    var posXMouseInDiv = 0;

    var posYMouseInDiv = 0;



    $('body').on('mousemove', function(e){

        posXYMouse( e );

    });


    /******************* SCROLL ********************/


    $(window).scroll(function(e){

        scrollBodyY = $(window).scrollTop();

    })


    $('#divListPolices').mCustomScrollbar({

        theme:'minimal-dark',

        scrollInertia:200,

        setHeight:450,

        scrollbarPosition: "inside",

        mouseWheel:{ preventDefault: true },

        callbacks:{

            whileScrolling:function(){

                scrollDivPoliceY = this.mcs.top;

            }
        }


    });

    /**************** CONFIG IFRAME *****************/

    $('#ifrm').contents().each(function(){

        ifrm = this;

        styleFilePolice = document.createElement("Link");
        styleFileIframe = document.createElement("Link");
        blcHeaderIframe = document.createElement("header");
        blcBodyIframe   = document.createElement("section");
        blcfooterIframe = document.createElement("footer");

        styleFilePolice.setAttribute("rel", "stylesheet");
        styleFilePolice.setAttribute("type", "text/css");
        styleFilePolice.setAttribute("href", "../styles/css/police.css");  

        styleFileIframe.setAttribute("rel", "stylesheet");
        styleFileIframe.setAttribute("type", "text/css");
        styleFileIframe.setAttribute("href", "../styles/css/iframe.css"); 

        blcHeaderIframe.setAttribute("id", "top_header"); 
        blcHeaderIframe.setAttribute("class", "header_ifrm"); 
        blcBodyIframe.setAttribute("id", "body");
        blcBodyIframe.setAttribute("class", "body_ifrm");
        blcfooterIframe.setAttribute("id", "bottom_footer"); 
        blcfooterIframe.setAttribute("class", "footer_ifrm");


        ifrm.head.appendChild(styleFilePolice);
        ifrm.head.appendChild(styleFileIframe);

        ifrm.body.appendChild(blcHeaderIframe);
        ifrm.body.appendChild(blcBodyIframe);
        ifrm.body.appendChild(blcfooterIframe);

    });

    $('#ifrm').contents().find('.header_ifrm').each(function(){

        $(this).on('click', function(){

            posTop = parseInt($(this).css('height')) - 10;

            $('#div_container_header_ifrm').css('display','block');
            $("#div_container_header_ifrm").css('top' , posTop);
            $("#div_container_header_ifrm").css('left' ,' 50%');

        });


    });

    (function(){

        arrayDirectionHF = ['top', 'left','bottom','right'];

        for( var id in arrayDirectionHF){

            $('#div_position_'+arrayDirectionHF[id]).on('click', function(){



            });

        }

    })();


    /***************** DRAG & DROP ******************/

    $('.divPolices').attr('draggable','true');

    $('.divPolices').on('dragstart', function(e){

        e.originalEvent.dataTransfer.setData('text/plain', $(this).attr('id')); /* < originalEvent > Seulement pour JQuery*/

        data = e.originalEvent.dataTransfer.getData("text"); /* < originalEvent > Seulement pour JQuery*/

        console.log(document.getElementById(data).firstChild);

        posXYDiv( $(this).attr('id') );

        posXYMouseInDiv();

    });

    $('#ifrm').contents().on('dblclick', function(e){

        if( $(div_iframe_edition).css('display') == 'block'){

            $(div_iframe_edition).css('display','none');

        }

    })


    $('#ifrm').contents().on('dragover', function(e){

        $(this).prop('designMode','on');

        posXYMouse(e);

    })

    $('#ifrm').contents().on('dragleave', function(e){

        $(this).prop('designMode','off');

    })

    $('#ifrm').contents().on('drop', function(e){

        e.preventDefault();

        ifrm.body.appendChild(document.getElementById(data).cloneNode(true));


        $(this).contents().find('#'+data).each(function(){


            $(this).attr('class','blc_edition');

            $(this).attr('id',data+count);

            $(this).addClass(data);


            $(this).css('width', Math.round( parseInt( $(this).css('width'))) ); 

            $(this).css('height', Math.round( parseInt( $(this).css('height'))) ); 


            $(this).css('left', posXMouse - posXMouseInDiv - 1); /* Bordure */

            $(this).css('top', posYMouse - posYMouseInDiv);


            var object = createObjectDivIframe( $(this).attr('id') );

            initMenuValuesDiv( object );

            addMenuEdition(object.arrayDivInfos);


        });


        count++;

        $(this).prop('designMode','off');


    })

    $('#ifrm').contents().bind("contextmenu", function (e) { // click droit


    });


    /****************** FUNCTIONS ******************/


    posXYMouse = function( e ){

        posXMouse = e.originalEvent.clientX; /* < originalEvent > Seulement pour JQuery*/

        posYMouse = e.originalEvent.clientY; /* < originalEvent > Seulement pour JQuery*/

    },

    posXYDiv = function( id ){

        posXDiv = parseInt($('#divContainerParagraphes').css('left')); /* +4 ? */

        posYDiv = document.getElementById( id ).offsetTop;

    },

    posXYMouseInDiv = function(){

        posXMouseInDiv = posXMouse - posXDiv;

        posYMouseInDiv = ((posYMouse - ( parseInt($('#divContainerParagraphes').css('top')) + posYDiv)) - scrollDivPoliceY) + scrollBodyY + 5; /* + 5px = margin h2 */

        console.log(posYMouseInDiv);

    },

    createObjectDivIframe = function( id ){

        var object = ' ';

        $("#ifrm").contents().find('#'+id ).each(function(index){

            /* OBJET DIV */
            ObjectDiv = function( thisDiv ){

                object = this;

                this.arrayDivInfos = {

                    /* Paragraphe , title ... */

                    type       :    ' ',

                    /*******/

                    width      :    Math.round(thisDiv.width()),

                    height     :    thisDiv.height(),

                    offTop     :    thisDiv.offset().top,

                    offLeft    :    thisDiv.offset().left,

                    margin     :    thisDiv.css('margin'),

                    padding    :    thisDiv.css('padding'),

                    /*******/

                    fontFamily :    thisDiv.css('font-family'),

                    BGColor    :    thisDiv.css('background-color')

                }


                this.mClick = function(){ 

                    initMenuValuesDiv(this); 

                    addMenuEdition(this.arrayDivInfos);

                };


                this.mMove = function(){ };

                this.mOver = function(){ };

                this.mDBClick = function(){ };


            }

            var obj = new ObjectDiv( $(this) );


            $(this).click(function(){

                obj.mClick();

            });


        });

        return object;


    },

    /* Affiche les valeurs de la Div dans le menu coordonnées */

    initMenuValuesDiv = function( object ){

        if(object != null){

            for(var id in object.arrayDivInfos){

                /* On recupère l'input via l'id puis on lui ajoute une valeur */

                if( $('input[name="'+id+'"]').val() != undefined){

                    $('input[name="'+id+'"]').val(object.arrayDivInfos[id]);
                } 
            }
        }
    },


    addMenuEdition = function(arrayDivInfos){

        $('#div_iframe_edition').css( 'display' , $(div_iframe_edition).css('display') == 'none' ? 'block' : 'block' );

        $('#mouseover_blc').css( 'display' , 'none' );

        $('#div_iframe_edition').css( 'left'    ,  arrayDivInfos['offLeft'] + $('#ifrm').position().left + 1 ); /* +2 Bordure */

        $('#div_iframe_edition').css( 'top'     ,  arrayDivInfos['offTop'] + parseInt($('#ifrm').css('margin-top')) + 1 ); /* +1 Bordure */   

        $('#div_iframe_edition').css( 'width'   ,  arrayDivInfos['width'] );

        $('#div_iframe_edition').css( 'height'  ,  arrayDivInfos['height'] );

    }
        
    
    /****************** ACTIONS MENUS *******************/

    $('.classBtnMenu').each(function(){
        
        $(this).on('click', function(){

            idSubMenu = $(this).attr('id');
            idSubMenu = idSubMenu[0].toUpperCase()+idSubMenu.substring(1);
            
            if( $("#divContainer"+idSubMenu).css('display') == 'none' ){
                
                $("#divContainer"+idSubMenu).css('display' , 'block');
                
            }
            else{
                
                $("#divContainer"+idSubMenu).css('display' , 'none');
                
            }
            

        });                    
                            
    });
    
    $("#loadPageBody").remove();

    for( var i = 0 ; i < $(".delete").length ; i++){

        $(".delete").remove();

    }
    
})(jQuery);
