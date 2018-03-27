<?php

class Profil extends Controller{

	private $session;

	public function __CONSTRUCT(){

		$this->setSession();

	}

	public function setSession(){

		$this->session = new Session();

	}
    
    public function verifAccount(){
        
        if(isset($_POST['btn_valider']) == 'VALIDER'){
            
   			$this->loadModel('User');
			$data = $this->User->read();
            
			if(isset($_POST['pseudo']) && $_POST['pseudo'] == $data['pseudo']){
				if(sha1(isset($_POST['password'])) && sha1($_POST['password']) == $data['password']){

					$this->session->setSession($data['id']);
					header('location:view');
				}
			}           
            
        }
        
    }
    
    public function view(){
        $this->render('compte');
    }
    
    public function deconnexion(){
        
        $this->session->sessionDestroy();
        
    }
    
}