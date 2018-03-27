<?php

include('config/database.php');
include('lib\session.php');

/*
|-------------------------------------------------
|Création de constante
|-------------------------------------------------
| Ces constantes permettront la modification des URL.
|
| WEEBROOT : URL par rapport à la racine du projet
| ROOT : Repertoire du site sur le serveur
*/

define('ROOT',str_replace('index.php','',$_SERVER['SCRIPT_NAME']));
define('WEBROOT',str_replace('index.php','',$_SERVER['SCRIPT_FILENAME']));

/*
|-------------------------------------------------
|APPEL DES FICHIERS CONTROLLER ET MODEL
|-------------------------------------------------
| Appel du controller et du model mère du dossier core
*/

require('Core/model.php');
require('Core/controller.php');

$param = explode('/',$_GET['p']);

include('Controllers/'.$param[0].'.php');

/*
|-------------------------------------------------
| TRAITEMENT DE L'URL
|-------------------------------------------------
| L'url permet de déterminer le controlleur utiliser ainsi que
| l'action (la méthode) qui est appelé dans le controlleur. Cette
| section permet donc de determiner, selon l'url le controlleur et 
| l'action
*/

$controllers = new $param[0];
$action = isset($param[1]) ? $param[1] : 'index';

/*************************************************/

if(method_exists($controllers, $action)){
    
    $controllers->$action();
    
}
else{
    echo 'error 404';
}
