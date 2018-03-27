(function(){
 
    var btn_editeur = document.getElementById('btn_editeur');
    
    btn_editeur.addEventListener('click', function(){
        
        if( screen.width >= '1000' && screen.height >= '600' ){
            
            document.location.href="../editeur/view"; 
            
        }
        else{
            
            alert('bon');
            document.location.href="../editeur/error";
            
        }
        
    },false);
    
})();