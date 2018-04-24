(function($){
    
    $(window).on('load',function(){

        let mainBody = $('#firstBodyEditeur');
        const ROOT = $('input[type="hidden"]').val();
        mainBody.find($('input[type="hidden"]')).remove();
        
        let log = [
            
            'initialisation', 
            'Création des menus'
        ];
        
        let script = [

            'jquery.mCustomScrollbar.concat.min',
            'DragDropJQ'
            //'width_screen',
            
        ];
        
        let polices = [

            '-Paragraphe',
            
            'DustWest',
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
            
            let bls = $('<'+type+'></'+type+'>');
                bls.attr( 'id' , idBls );
                bls.attr( 'class' , classBls );
                bls.attr( 'href' , href );
            
            return bls;
            
        };
        
        (function(){

            $("html").append( 
                
                $("<body></body>").attr("id","loadPageBody") 
            
            );
            
            let paragraphe = $("<p></p>").text(log[0]);
                paragraphe.attr('id','para');
            
            let container = $("<div></div>");
            
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
            
            
            /** MAIN CONTAINER EDITOR - MENU LEFT / RIGHT 
            ----------------------------------------------------------------- **/


            let divContainer        = createBalise('div','mainContainerEditor');
            let divHeaderMainMenu = createBalise('div', 'divheaderMainMenu');
            let divHeaderMenu       = createBalise('div','divHeaderMenu');
            let divContainerIframe  = createBalise('div', 'divContainerIframe');
            let divMenuEdition      = createBalise('div', 'divMenuEdition');
            let divBtnEdition       = createBalise('div', 'divBtnEdition');

            let editor              = createBalise('iframe','ifrm');
                editor.attr('readonly','readonly');

            let ulLeft              = createBalise('ul','ulLeft');
            let ulRight             = createBalise('ul','ulRight');
            let ulLeftMenu          = createBalise('ul');

            let liFile              = createBalise('li');
            let liTool              = createBalise('li');
            let liDisplay           = createBalise('li');
            let liCreatePDF         = createBalise('li');
            let liParagraphe        = createBalise('li');
            let liHF                = createBalise('li');
            let liImage             = createBalise('li');

            let linkFile            = createBalise('a' , null , null , '#');
            let linkTool            = createBalise('a' , null , null , '#');
            let linkDisplay         = createBalise('a' , null , null , '#');
            let linkCreatePDF       = createBalise('a' , null , null , '#');
            let linkParagraphe      = createBalise('a' , 'paragraphes' , 'classBtnMenu' , '#');
            let linkHF              = createBalise('a' , 'HF' , 'classBtnMenu' , '#');
            let linkImage           = createBalise('a' , 'images' , 'classBtnMenu' , '#');

            let imgParagraphe       = createBalise('img' , null , null , null);
                imgParagraphe.attr('src' , ROOT+'styles/img/paragrapheFini1.png');
            let imgHF               = createBalise('img' , null , null , null);
                imgHF.attr('src' , ROOT+'styles/img/blocs1.png');
            let imgImage            = createBalise('img' , null , null , null);
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
            divContainerIframe.append(editor);
            divBtnEdition.append(ulLeftMenu);
            divMenuEdition.append(divBtnEdition);
            
            divContainer.append(divHeaderMainMenu);
            divContainer.append(divContainerIframe);
            divContainer.append(divMenuEdition);

            mainBody.append(divContainer);
            
            
            /** CONTAINER PARAMETRES 
            ----------------------------------------------------------------- **/


            let divContainerParagraphes = createBalise('div','divContainerParagraphes','classContainer');
            let divMainTitle            = createBalise('div','divMainTitle');
            let divListPolices          = createBalise('div','divListPolices');
            let divFooter               = createBalise('div','divFooter');
            
            let h1                      = createBalise('h1');
                h1.text("Ajouter du texte");
            
            
            for( let i = 0 ; i < polices.length ; i++){
                
                
                if( polices[i][0] === '-'){

                    let divSecondTitle  = createBalise('div','divSecondTitle');
                    
                    let h2              = createBalise('h2');
                        h2.text( polices[i].substring(1) );
                    
                    divSecondTitle.append(h2);
                    divListPolices.append(divSecondTitle);
                    
                }
                else{
                 
                    let divParagraphe   = createBalise('div', polices[i] , 'divPolices');
                    let pParagraphe     = createBalise('p',);
                        pParagraphe.text(polices[i]);
                    
                    divParagraphe.append(pParagraphe);
                    divListPolices.append(divParagraphe);
                    
                }
                
            }

            
            divMainTitle.append(h1);
            divContainerParagraphes.append(divMainTitle);
            divContainerParagraphes.append(divListPolices);
            divContainerParagraphes.append(divFooter);

            mainBody.append(divContainerParagraphes);
            
            
            /** CONTAINER COORDONNEES 
            ----------------------------------------------------------------- **/


            let divContainerCoord   = createBalise('div' , 'divContainerCoord');
            let divCoordValue       = createBalise('div' , 'divCoordValue');
            let divLength           = createBalise('div' , 'divLength');
            let divPosition         = createBalise('div' , 'divPosition');
            let divRowW             = createBalise('div' ,'W' ,  'divRow');
            let divRowH             = createBalise('div' ,'H' ,  'divRow');
            let divRowX             = createBalise('div' ,'X' ,  'divRow');
            let divRowY             = createBalise('div' ,'Y' ,  'divRow');
            let divNameWidth        = createBalise('div' , null , 'divName');
            let divNameHeight       = createBalise('div' , null , 'divName');
            let divInputWidth       = createBalise('div' , null , 'divInput');
            let divInputHeight      = createBalise('div' , null , 'divInput');
            let divNameLeft         = createBalise('div' , null , 'divName');
            let divNameTop          = createBalise('div' , null , 'divName');
            let divInputLeft        = createBalise('div' , null , 'divInput');
            let divInputTop         = createBalise('div' , null , 'divInput');

            let h3Width             = createBalise('h3');
            let h3Position          = createBalise('h3');

            let pWidth              = createBalise('p' , 'pWidth');
            let pLength             = createBalise('p' , 'pLength');
            let pLeft               = createBalise('p' , 'pLeft');
            let pTop                = createBalise('p' , 'pTop');

            let inputWidth          = createBalise('input');
                inputWidth.attr('type' , 'text');
                inputWidth.attr('name' , 'width');

            let inputHeight         = createBalise('input');
                inputHeight.attr('type' , 'text');
                inputHeight.attr('name' , 'height');

            let inputLeft           = createBalise('input');
                inputLeft.attr('type' , 'text');
                inputLeft.attr('name' , 'offLeft');

            let inputTop            = createBalise('input');
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

            mainBody.append(divContainerCoord);
            
            
            
        })();
        
        
        /**************************************************
                    Ajouts des liens css et script
        **************************************************/
        
        
        (function(){
            
            for(let idScrit in script){

                // language=HTML
                let link = $("<script></script>");
                    link.attr('src',ROOT+'javascript/'+script[idScrit]+'.js');

                $("head").append(

                    link

                );
                
            }
            
        })();
        
    });
    
})(jQuery);