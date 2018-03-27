<html>
<head>
     
    <?php echo '<link rel="stylesheet" href="'.ROOT.'styles/css/compte.css"/>'; ?>
    <meta name="viewport" content="width=device-width"/>
    <meta charset="UTF-8"/>
    
</head>
    
<body>
    
    <?php if(Session::getSession()){ ?>

        <div id="div_header_arbo">

            <div id="btnMainMenu">

                <ul>

                    <li><a href="#" class="divHideScreen">Fichier</a></li>
                    <li><a href="#" class="divHideScreen">Partage</a></li>
                    <li><a href="#" class="divHideScreen">Affichage</a></li>

                </ul>

            </div>

            <div id="divHideMenu">

                <div id="divFileDisplay">

                    <div id="divPressPapier" class="divContainerBtn">

                        <div id="divBtnMenu">

                            <div id="divBlcHoriz">

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/copy.png" class="img_hori"/>'; ?>

                                    <p>Copier</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/couper.png" class="img_hori"/>'; ?>

                                    <p>Couper</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/coller.png" class="img_hori"/>'; ?>

                                    <p>Coller</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/supprimer.png" class="img_hori"/>'; ?>

                                    <p>Supprimer</p>

                                </div></a>

                            </div>

                        </div>

                        <div id="divSpan">

                            <span>Presse-papiers</span>

                        </div>

                    </div>

                    <div id="divOptionsDir" class="divContainerBtn">

                        <div id="divBtnMenu">

                            <div id="divBlcHoriz">

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/dossier.png" class="img_hori"/>'; ?>

                                    <p>Nouveau Dossier</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/renommer.png" class="img_hori"/>'; ?>

                                    <p>Renommer</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/proprietes.png" class="img_hori"/>'; ?>

                                    <p>Propriétés</p>

                                </div></a>

                            </div>

                        </div>

                        <div id="divSpan">

                            <span>Organiser</span>

                        </div>

                    </div>

                    <div id="divSelection" class="divContainerBtn">

                        <div id="divBtnMenu">

                            <div id="divBlcHoriz">

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/AllSelect.png" class="img_hori"/>'; ?>

                                    <p>Sélèctionner tout</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/neverSelect.png" class="img_hori"/>'; ?>

                                    <p>Désélectionner tout</p>

                                </div></a>

                                <a href="#"><div>

                                    <?php echo '<img src="'.ROOT.'styles/img/files_menu/inversSelect.png" class="img_hori"/>'; ?>

                                    <p>Inverser la sélèction</p>

                                </div></a>

                            </div>

                        </div>

                        <div id="divSpan">

                            <span>Sélèctionner</span>

                        </div>

                    </div>

                </div>

            </div>

        </div>

        <div id="div_arbo">

            <p>jj</p>

        </div>

        <div id="div_dir_file">

            <div id="containe_dir_file">

                <div>

                    <?php echo '<a href="#"><img src="'.ROOT.'styles/img/dir.png" class="img_dir"/></a>'; ?>

                </div>

                <div>

                    <?php echo '<a href="#"><img src="'.ROOT.'styles/img/dir.png" class="img_dir"/></a>'; ?>

                </div>

            </div>

        </div>

        <div id="div_main_menu">


            <div id="btn_administrateur">

                <?php echo '<a href="#"><img src="'.ROOT.'styles/img/admin.png" id="img_admin" class="img_main_menu"/></a>'; ?>

            </div>

            <div id="btn_parametres">

                <?php echo '<a href="#"><img src="'.ROOT.'styles/img/parametres.png" id="img_parametres" class="img_main_menu"/></a>'; ?>

            </div>

            <div id="btn_editeur">

                <?php echo '<a href="#" id="btn_editeur"><img src="'.ROOT.'styles/img/editeur.png" id="img_editeur" class="img_main_menu"/></a>'; ?>

            </div>

            <div id="btn_aide">

                <?php echo '<a href="#"><img src="'.ROOT.'styles/img/aide.png" id="img_aide" class="img_main_menu"/></a>'; ?>

            </div>

            <div id="btn_deconnexion">

                <?php echo '<a href="'.ROOT.'profil/deconnexion"><img src="'.ROOT.'styles/img/deconnexion.png" id="img_deconnexion" class="img_main_menu"/></a>'; ?>

            </div>


        </div>

        <?php echo '<script src="'.ROOT.'javascript/width_screen.js"></script>'; ?>
        
        <?php } else { ?>
    
        
    
        <?php } ?>

</body>

</html>