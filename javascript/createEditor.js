(function($){
    
    $(window).on('load',function(){

        ROOT = $('input[type="hidden"]').val();
        $('#firstBodyEditeur').find($('input[type="hidden"]')).remove();
        
        log = [
            
            'initialisation', 
            'Création des menus'
        ];
        
        script = [

            'jquery.mCustomScrollbar.concat.min',
            'DragDropJQ'
            //'width_screen',
            
        ];
        
        polices = [

            '-Paragraphe',
            
            'DancingScriptRegular',
            'TimeNewRoman',
            'Arial',
            'ArialBlack',
            'TheRedlightFree',
            
            '-Titre',
            
            'DustWest',
            'RioGrande',
            'Drifttype',
            
            '-Fantaisie',
            
            'LittleBird'
            
            
            
        ];
        
        createBalise = function( type , idBls = null , classBls = null , href = null ){
            
            bls = $('<'+type+'></'+type+'>');
            bls.attr( 'id' , idBls );
            bls.attr( 'class' , classBls );
            bls.attr( 'href' , href );
            
            return bls;
            
        };
        
        (function(){

            $("html").append( 
                
                $("<body></body>").attr("id","loadPageBody") 
            
            );
            
            paragraphe = $("<p></p>").text(log[0]);
            paragraphe.attr('id','para');
            
            container = $("<div></div>");
            
            container.append( 
                
                $("<h1></h1>").text("Chargement") 
            
            );
            
            container.append( 
                
                $("<div></div>").attr("id","progressBar")
            
            );
            
            container.append(paragraphe);
            
            $("#loadPageBody").append(container);

            
        })();
        
        /**************************************************
                        création des menus
        **************************************************/
        
        
        (function(){
            
            $("#para").text(log[1]);
            
            
            /****** MAIN CONTAINER EDITOR - MENU LEFT / RIGHT *****/
            
            
            divContainer        = createBalise('div','mainContainerEditor');
            divHeaderMainMenu   = createBalise('div','divheaderMainMenu');
            divHeaderMenu       = createBalise('div','divHeaderMenu');
            divContainerIframe  = createBalise('div', 'divContainerIframe');
            divMenuEdition      = createBalise('div', 'divMenuEdition');
            divBtnEdition       = createBalise('div', 'divBtnEdition');
            
            iframe              = createBalise('iframe','ifrm');
            iframe.attr('readonly','readonly');

            ulLeft              = createBalise('ul','ulLeft');
            ulRight             = createBalise('ul','ulRight');
            ulLeftMenu          = createBalise('ul');
            
            liFile              = createBalise('li');
            liTool              = createBalise('li');
            liDisplay           = createBalise('li');
            liCreatePDF         = createBalise('li');
            liParagraphe        = createBalise('li');
            liHF                = createBalise('li');
            liImage             = createBalise('li');
            
            linkFile            = createBalise('a' , null , null , '#');
            linkTool            = createBalise('a' , null , null , '#');
            linkDisplay         = createBalise('a' , null , null , '#');
            linkCreatePDF       = createBalise('a' , null , null , '#');
            linkParagraphe      = createBalise('a' , 'paragraphes' , 'classBtnMenu' , '#');
            linkHF              = createBalise('a' , 'HF' , 'classBtnMenu' , '#');
            linkImage           = createBalise('a' , 'images' , 'classBtnMenu' , '#');
            
            imgParagraphe       = createBalise('img' , null , null , null);
            imgParagraphe.attr('src' , ROOT+'styles/img/paragrapheFini1.png');
            imgHF               = createBalise('img' , null , null , null);
            imgHF.attr('src' , ROOT+'styles/img/blocs1.png');
            imgImage            = createBalise('img' , null , null , null);
            imgImage.attr('src' , ROOT+'styles/img/images1.png');
            
            
            
            linkFile.text("Fichier");
            linkTool.text("Outils");
            linkDisplay.text("Affichages");
            linkCreatePDF.text("Créer un pdf");
            
            linkParagraphe.append(imgParagraphe);
            linkHF.append(imgHF);
            linkImage.append(imgImage);
            
            liFile.append(linkFile);
            liTool.append(linkTool);
            liDisplay.append(linkDisplay);
            liCreatePDF.append(linkCreatePDF);
            liParagraphe.append(linkParagraphe);
            liHF.append(linkHF);
            liImage.append(linkImage);
            
            ulLeft.append(liFile);
            ulLeft.append(liTool);
            ulLeft.append(liDisplay);
            ulLeftMenu.append(liParagraphe);
            ulLeftMenu.append(liHF);
            ulLeftMenu.append(liImage);
            ulRight.append(liCreatePDF);
            
            divHeaderMenu.append(ulLeft);
            divHeaderMenu.append(ulRight);
            divHeaderMainMenu.append(divHeaderMenu);
            divContainerIframe.append(iframe);
            divBtnEdition.append(ulLeftMenu);
            divMenuEdition.append(divBtnEdition);
            
            divContainer.append(divHeaderMainMenu);
            divContainer.append(divContainerIframe);
            divContainer.append(divMenuEdition);
            
            $('#firstBodyEditeur').append(divContainer);
            
            
            
            /************* CONTAINER PARAMETRES *************/
            
            
            
            divContainerParagraphes = createBalise('div','divContainerParagraphes','classContainer');
            divMainTitle            = createBalise('div','divMainTitle');
            divListPolices          = createBalise('div','divListPolices');
            divFooter               = createBalise('div','divFooter');
            
            h1                      = createBalise('h1');
            h1.text("Ajouter du texte");
            
            
            for( var i = 0 ; i < polices.length ; i++){
                
                
                if( polices[i][0] == '-'){
                    
                    divSecondTitle  = createBalise('div','divSecondTitle');
                    
                    h2              = createBalise('h2');
                    h2.text( polices[i].substring(1) );
                    
                    divSecondTitle.append(h2);
                    divListPolices.append(divSecondTitle);
                    
                }
                else{
                 
                    divParagraphe   = createBalise('div', polices[i] , 'divPolices');
                    pParagraphe     = createBalise('p',)
                    pParagraphe.text(polices[i]);
                    
                    divParagraphe.append(pParagraphe);
                    divListPolices.append(divParagraphe);
                    
                }
                
            }

            
            divMainTitle.append(h1);
            divContainerParagraphes.append(divMainTitle);
            divContainerParagraphes.append(divListPolices);
            divContainerParagraphes.append(divFooter);
            
            $('#firstBodyEditeur').append(divContainerParagraphes);
            
            
            
            /************* CONTAINER PARAMETRES *************/

            

            divContainerCoord   = createBalise('div' , 'divContainerCoord');
            divCoordValue       = createBalise('div' , 'divCoordValue');
            divLength           = createBalise('div' , 'divLength');
            divPosition         = createBalise('div' , 'divPosition');
            divRowW             = createBalise('div' ,'W' ,  'divRow');
            divRowH             = createBalise('div' ,'H' ,  'divRow');
            divRowX             = createBalise('div' ,'X' ,  'divRow');
            divRowY             = createBalise('div' ,'Y' ,  'divRow');
            divNameWidth        = createBalise('div' , null , 'divName');
            divNameHeight       = createBalise('div' , null , 'divName');
            divInputWidth       = createBalise('div' , null , 'divInput');
            divInputHeight      = createBalise('div' , null , 'divInput');
            divNameLeft         = createBalise('div' , null , 'divName');
            divNameTop          = createBalise('div' , null , 'divName');
            divInputLeft        = createBalise('div' , null , 'divInput');
            divInputTop         = createBalise('div' , null , 'divInput');
            
            h3Width             = createBalise('h3');
            h3Position             = createBalise('h3');
            
            pWidth              = createBalise('p' , 'pWidth');
            pLength             = createBalise('p' , 'pLength');
            pLeft               = createBalise('p' , 'pLeft');
            pTop                = createBalise('p' , 'pTop');
            
            inputWidth          = createBalise('input');
            inputWidth.attr('type' , 'text');
            inputWidth.attr('name' , 'width');
            
            inputHeight         = createBalise('input');
            inputHeight.attr('type' , 'text');
            inputHeight.attr('name' , 'height');
            
            inputLeft           = createBalise('input');
            inputLeft.attr('type' , 'text');
            inputLeft.attr('name' , 'offLeft');
            
            inputTop            = createBalise('input');
            inputTop.attr('type' , 'text');
            inputTop.attr('name' , 'offTop');
            
            h3Width.text("Taille");
            pWidth.text("L");
            pLength.text("H");
            h3Position.text("Position");
            pLeft.text("X");
            pTop.text("Y");
            
            divContainerCoord.append(divCoordValue);
            divCoordValue.append(divPosition);
            divCoordValue.append(divLength);
            divPosition.append(h3Position);
            divPosition.append(divRowY);
            divPosition.append(divRowX);
            divLength.append(h3Width);
            divLength.append(divRowH);
            divLength.append(divRowW);
            divRowY.append(divInputTop);
            divRowY.append(divNameTop);
            divRowX.append(divInputLeft);
            divRowX.append(divNameLeft);
            divRowH.append(divInputHeight);
            divRowH.append(divNameHeight);
            divRowW.append(divInputWidth);
            divRowW.append(divNameWidth);
            divInputTop.append(inputTop);
            divInputLeft.append(inputLeft);
            divNameTop.append(pTop);
            divNameLeft.append(pLeft);
            divInputHeight.append(inputHeight);
            divInputWidth.append(inputWidth);
            divNameHeight.append(pLength);
            divNameWidth.append(pWidth);

            $('#firstBodyEditeur').append(divContainerCoord);
            
            
            
        })();
        
        
        /**************************************************
                    Ajouts des liens css et script
        **************************************************/
        
        
        (function(){
            
            for(var idScrit in script){
                
                link = $("<script></script>")
                link.attr('src',ROOT+'javascript/'+script[idScrit]+'.js');

                $("head").append(

                    link

                );
                
            }
            
        })();
        
    });
    
})(jQuery);