<html>
<head>
    
    <?php if(Session::getSession()){ ?>
     
    <?php echo '<link rel="stylesheet" href="'.ROOT.'styles/css/home.css"/>'; ?>
    <?php echo '<link rel="stylesheet" href="'.ROOT.'styles/css/jquery.mCustomScrollbar.min.css"/>'; ?>
    <?php echo '<link rel="stylesheet" href="'.ROOT.'styles/css/police.css"/>'; ?>
    <?php echo '<link rel="stylesheet" href="'.ROOT.'styles/css/iframeEdition.css"/>'; ?>
    
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <?php echo '<script src="'.ROOT.'/javascript/jquery.mCustomScrollbar.concat.min.js"></script>';?> 
    
    
    <meta name="viewport" content="width=device-width"/>
    
</head>
    
    <body>
        
        <div id="main_container_editeur">
        
            <div id="headerMainMenu">

                <div id="div_header_menu">
                    
                    <ul id="ul_left">
                    
                        <li><a href="#">Fichier</a></li>
                        <li><a href="#">Outils</a></li>
                        <li><a href="#">Affichages</a></li>
                    
                    </ul>
                    
                    <ul id="ul_right">
                    
                        <li><a href="#">Créer un PDF</a></li>
                    
                    </ul>
                    
                </div>

            </div>

            <div id="container_iframe">

                <iframe id="ifrm" readonly="readonly"></iframe>

            </div>

            <div id="div_menu_edition">

                <div id="div_btn_edition">
                
                    <ul>
                    
                        <li><?php echo '<a id="paragraphes" class="classBtnMenu"><img src="'.ROOT.'styles/img/paragrapheFini1.png" class="img_dir"/></a>'; ?>
                        </li>
                        
                        <li><?php echo '<a id="blocks" class="classBtnMenu"><img src="'.ROOT.'styles/img/blocs1.png" class="img_dir"/></a>'; ?></li>
                        
                        <li><?php echo '<a id="images" class="classBtnMenu"><img src="'.ROOT.'styles/img/images1.png" class="img_dir"/></a>'; ?></li>
                    
                    </ul>
                
                </div>

            </div>
            
        </div>
        
        <!-- ***  -->
        
        <div id="div_container_paragraphes" class="class_container">
                                
            <div id="main_title">

                <h1>Ajouter du texte</h1>

            </div>

            <div id="div_list_polices">

                <div class="second_title">

                    <h2>Paragraphes</h2>

                </div>


                <div id="DancingScriptRegular" class="div_polices">

                    <p>DancingScriptRegular</p>

                </div>

                <div id="TimeNewRoman" class="div_polices">

                    <p>TimeNewRoman</p>

                </div>

                <div id="Arial" class="div_polices">

                    <p>Arial</p>

                </div>

                <div id="ArialBlack" class="div_polices">

                    <p>ArialBlack</p>

                </div>

                <div id="TheRedlightFree" class="div_polices">

                    <p>TheRedlightFree</p>

                </div>

                <!-- *********** -->

                <div id="h2" class="second_title">

                    <h2>Titre</h2>

                </div>

                <div id="DustWestCollege" class="div_polices">

                    <p>Dust West</p>

                </div>

                <div id="RioGrande" class="div_polices">

                    <p>RioGrande</p>

                </div>

                <div id="Drifttype" class="div_polices">

                    <p>Drifttype</p>

                </div>

                <!-- *********** -->

                <div class="second_title">

                    <h2>Fantaisie</h2>

                </div>

                <div id="LittleBird" class="div_polices">

                    <p>LittleBird</p>

                </div>

            </div>

            <div id="div_footer"></div>

        </div>
        
        <div id="div_container_blocks" class="class_container">
        
            <div id="main_title">

                <h1>En-Tête / Pied de page</h1>

            </div>
        
        </div>
        
        <div id="div_container_images" class="class_container"></div>
        
        <!-- ***  -->
        
        <div id="div_iframe_edition">
        
            <div id="click_blc" draggable="true">



            </div>
            
            
            <div id="mouseover_blc">

                <span id="title_mouse_down">Paragraphe</span>

            </div>
        
        </div>
        
        <div id="div_container_coord">
        
            <div id="blc_actions">
            
                <div id="top">
                
                    <?php echo '<a href=""><img src="'.ROOT.'/styles/img/files_menu/copy.png"></a>'; ?>
                    
                    <?php echo '<a href=""><img src="'.ROOT.'/styles/img/files_menu/col.png"></a>'; ?>
                
                </div>
                
                <div id="bottom">
                    
                    <?php echo '<a href=""><img src="'.ROOT.'/styles/img/files_menu/poubelle.png"></a>'; ?>
                
                </div>

            
            </div>
            
            <div id="blc_values">


                <div id="ul_length">
                    
                    <h3>Taille</h3>

                    
                    <div id="row">
                    
                        <div id="div_rname">
                        
                            <p id="p_width">L : </p>
                        
                        </div>
                        
                        <div id="div_input">
                        
                            <input type="test" name="width"/>
                        
                        </div>
                        
                    </div>

                    <div id="row">
                    
                        <div id="div_rname">
                        
                            <p id="p_height">H : </p>
                        
                        </div>
                        
                        <div id="div_input">
                        
                            <input type="test" name="height"/>
                        
                        </div>
                        
                    </div>
                    
                </div>
                
                <div id="ul_position">
                    
                    <h3>Position</h3>

                    
                    <div id="row">
                    
                        <div id="div_rname">
                        
                            <p id="p_width">X : </p>
                        
                        </div>
                        
                        <div id="div_input">
                        
                            <input type="test" name="offLeft"/>
                        
                        </div>
                        
                    </div>

                    <div id="row">
                    
                        <div id="div_rname">
                        
                            <p id="p_width">Y : </p>
                        
                        </div>
                        
                        <div id="div_input">
                        
                            <input type="test" name="offTop"/>
                        
                        </div>
                        
                    </div>
                    
                </div>


            </div>
        
        </div>
        
        <?php echo '<script src="'.ROOT.'javascript/DragDropJQ.js"></script>'; ?>
        
    </body>
    
    <?php } else {echo Session::getSession();  ?>
    
    <body>
    
        <p>Erreur</p>
    
    </body>
    
    <?php } ?>
    
</html>