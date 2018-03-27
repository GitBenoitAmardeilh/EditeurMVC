<html>
    <head>
        
        <link rel="stylesheet" href="styles/css/accueil.css">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width"/>
        
    </head>

    <body>
        
        <aside id="formulaire">
            
            <h1>Se Connecter</h1>
            <p id="para_titre">Pas encore <a href="#">inscrit</a> ? </p>
            
            <form method="POST" action="profil/verifAccount">

                <input type="text" name="pseudo" placeholder="Identifiant"/>
                <input type="password" name="password" placeholder="Mot de passe" id="pwd"/>
                <input type="submit" value="VALIDER" name="btn_valider" id="btn_val"/>

            </form>
            
            <p id="para_psw"><a href="#">Mot de passe oublié ?</a></p>
            
        </aside>
        
    </body>
</html>