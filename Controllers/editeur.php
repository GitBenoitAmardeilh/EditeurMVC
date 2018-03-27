<?php

class Editeur extends Controller{
    
	private $session;

	public function __CONSTRUCT(){

		$this->setSession();

	}

	public function setSession(){

		$this->session = new Session();

	}
    
    public function view(){
        $this->render('home');
    }
    
    public function error(){
        
        $this->render('error');
        
    }
    
}