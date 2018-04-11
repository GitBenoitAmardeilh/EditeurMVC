<html>
<head>
    
    <?php if(Session::getSession()){ ?>
     
    <?php echo '<link rel="stylesheet" href="'.ROOT.'styles/css/createEditor.css"/>'; ?>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    
    <?php echo '<script src="'.ROOT.'javascript/createEditor.js"></script>'; ?>
    <?php // echo '<script src="'.ROOT.'javascript/DragDropJQ.js"></script>'; ?>
    
    <meta name="viewport" content="width=device-width"/>
    
</head>
    
    <body id="firstBodyEditeur">
        
        
        
    </body>
    
    <?php } else {echo Session::getSession();  ?>
    
    <body>
    
        <p>Erreur</p>
    
    </body>
    
    <?php } ?>
    
</html>