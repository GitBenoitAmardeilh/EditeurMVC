<html>
<head>
    
    <?php if(Session::getSession()){ ?>
    
    <meta name="viewport" content="width=device-width"/>
    
    <?php
    
    echo '<link rel="stylesheet" href="'.ROOT.'styles/css/home.css"/>';
    echo '<link rel="stylesheet" href="'.ROOT.'styles/css/jquery.mCustomScrollbar.min.css"/>';
    echo '<link rel="stylesheet" href="'.ROOT.'styles/css/police.css"/>';
    echo '<link rel="stylesheet" href="'.ROOT.'styles/css/iframe.css"/>';
    
    echo '<link class="delete" rel="stylesheet" href="'.ROOT.'styles/css/createEditor.css"/>'; 
    echo '<script src="'.ROOT.'javascript/jquery-3.3.1.min.js"></script>'; 
    echo '<script class="delete" src="'.ROOT.'javascript/createEditor.js"></script>'; 

    
    ?>
    

    <input type="hidden" value="<?php echo ROOT; ?>">
    
    </head>

    <body id="firstBodyEditeur">



    </body>

    <?php } else {echo Session::getSession();  ?>

    <body>

    <p>Erreur</p>

    </body>

    <?php } ?>
    
</html>