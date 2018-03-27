/*
|-------------------------------------------------
|                JQuery - Drag & Drop
|-------------------------------------------------
*/

(function($){
    
    $(window).on('load',function(){

        /* ***************************** */

        var lengthContainer = $('#div_container_paragraphes').offset();
        var lengthlistPolice = $('#div_list_polices').offset();

        /* ***************************** */

        draggedDiv = null;

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



        /* A finir */
        var listPolice = [

                'Arial',
                'ArialBlack',
                'DancingScriptRegular',
                'Drifttype',
                'Dust West',
                'LittleBird',
                'RioGrande',
                'TimeNewRoman',
                'TheRedlightFree',  

        ]; 


        /******************* SCROLL ********************/


        $(window).scroll(function(e){

            scrollBodyY = $(window).scrollTop();

        })


        /***********************************************/


        $('#div_list_polices').mCustomScrollbar({

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

        $('body').on('mousemove', function(e){

            posXYMouse( e );

        })

        $('.div_polices').attr('draggable','true');

        $('.div_polices').on('dragstart', function(e){

            draggedDiv = e.target;
            e.originalEvent.dataTransfer.setData('text/plain', draggedDiv.id); /* < originalEvent > Seulement pour JQuery*/
            
            data = e.originalEvent.dataTransfer.getData("text"); /* < originalEvent > Seulement pour JQuery*/

            posXYDiv();

            posXYMouseInDiv();
            
            addDDImg( e );

        });
        

        $('.div_polices').on('mouseup', function(e){

            removeDDImg();

        });

        /************************************************/

        $('#ifrm').contents().each(function(){

            ifrm = this;

            styleFilePolice = document.createElement("Link");
            styleFileIframe = document.createElement("Link");

            styleFilePolice.setAttribute("rel", "stylesheet");
            styleFilePolice.setAttribute("type", "text/css");
            styleFilePolice.setAttribute("href", "../styles/css/police.css");  

            styleFileIframe.setAttribute("rel", "stylesheet");
            styleFileIframe.setAttribute("type", "text/css");
            styleFileIframe.setAttribute("href", "../styles/css/iframe.css");  

            ifrm.head.appendChild(styleFilePolice);
            ifrm.head.appendChild(styleFileIframe);

        });

        /***************** DRAG & DROP ******************/


        $('#ifrm').contents().on('dblclick', function(e){

            if( $(div_iframe_edition).css('display') == 'block'){

                $(div_iframe_edition).css('display','none');

            }

            console.log('ok');

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
            
            removeDDImg();

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


        /*****************************************************/


        posXYMouse = function( e ){

            posXMouse = e.originalEvent.clientX; /* < originalEvent > Seulement pour JQuery*/

            posYMouse = e.originalEvent.clientY; /* < originalEvent > Seulement pour JQuery*/

        },

        posXYDiv = function(){

            posXDiv = lengthlistPolice.left; /* +4 ? */

            posYDiv = document.getElementById(draggedDiv.id).offsetTop;

        },

        posXYMouseInDiv = function(){

            posXMouseInDiv = posXMouse - posXDiv;

            posYMouseInDiv = ((posYMouse - ( lengthlistPolice.top + posYDiv)) - scrollDivPoliceY) + scrollBodyY + 5; /* + 5px = margin h2 */

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

            if(object == null){
                
            }
            else{
            
                for(var id in object.arrayDivInfos){

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

        },


        addDDImg = function( e ){

            var img = new Image();
                img.src = '../style/img/imgDrag.png';
            
            e.dataTransfer.setDragImage(img ,posImgX,posImgY);

        }
        
        removeDDImg = function(){


            
        }

    });
    
    
    /****************** ACTIONS MENUS *******************/

    $('.classBtnMenu').each(function(){
        
        $("#div_container_"+$(this).attr('id')).css('visibility' , 'hidden');
        
        $(this).on('click', function(){
            
            for( var i = 0 ; i < $('.classBtnMenu').length ; i++){
                
                $('.class_container').css('visibility' , 'hidden');
                
            }
            
            $("#div_container_"+$(this).attr('id')).css('visibility') == 'hidden' ? 

                $("#div_container_"+$(this).attr('id')).css('visibility', 'visible') :

            $("#div_container_"+$(this).attr('id')).css('visibility', 'hidden');


        });                    
                            
    });  
    
})(jQuery);
