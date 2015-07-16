<?php
include ('Connection.php');
class Login {

    private $post;
    private $message;
    private $dataBase;
    function __construct($post,$dataBase){
        $this->post = $post;
        $this->dataBase = $dataBase;
        $this->verifyData();
    }

    private function verifyData(){
        $connection = Connection::getInstance($this->dataBase);
        $sqlTxt = 'select * from User where user_name = "' . $this->post['user_name'] . '" and  password = "' . $this->post['password'] . '" limit 1 ;'  ;
        $user = $connection->query($connection->run($sqlTxt));
        if (!empty($user)){
            $_SESSION["id"] = $user[0]['id'];
            $_SESSION["user_name"] = $user[0]['user_name'];
            $this->message = "Bienvenidod " . $user[0]['user_name'] ;
        }else{
            $this->message = "Imposible iniciar sesión";
        }
    }

    function getMessage(){
        return $this->message;
    }
}