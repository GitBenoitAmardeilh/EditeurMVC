(function($){
    
    $(window).on('load',function(){
        
        (function(){
            
            body = $("<body></body>").attr("id","loadPageBody");
            $("html").append(body);
            
            title = $("<h1></h1>").text("Chargement");
            progressBar = $("<div></div>").attr("id","progressBar");
            paragraphe = $("<p></p>").text("création des modules");
            
            container = $("<div></div>");
            container.append(title);
            container.append(progressBar);
            container.append(paragraphe);
            
        
            
            $("#loadPageBody").append(container);

            
        })();
        
    });
    
    
})(jQuery);