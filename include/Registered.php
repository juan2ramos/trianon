<?php
require 'Connection.php';

class Registered
{
    private $infoPost;
    private $fields;
    private $messages = array();
    private $infoMail;
    private $dataBase;
    private $send = false;

    function __construct($post, $fields, $infoMail, $dataBase)
    {
        $this->infoPost = $post;
        $this->fields = $fields;
        $this->infoMail = $infoMail;
        $this->dataBase = $dataBase;
        $this->verifyAll();
    }

    private function verifyAll()
    {
        if (empty($this->infoPost) || empty($this->fields)) {
            $this->send = false;
            return;
        }
        foreach ($this->fields as $key => $fields) {

            foreach ($fields as $field) {

                switch ($field) {
                    case 'required':
                        $this->verifyRequired($key);
                        break;
                    case 'email':
                        $this->verifyMail($key);
                        break;
                    case 'number':
                        $this->verifyNumber($key);
                        break;
                }
            }
        }

        if (count($this->messages) == 0) {
            $this->insertDB();
            $this->sendMail();
        }

    }

    private function insertDB()
    {
        $connection = Connection::getInstance($this->dataBase);
        $connection->run($this->sqlTxt());

    }

    private function sqlTxt()
    {
        $columns = '' ;
        $values = '' ;
        $numItems = count($this->infoPost);
        $i = 0;
        foreach($this->infoPost as $key => $post){
            $columns .= '`' . $key . '`';
            $values .= '"' . $post . '"';
            if(++$i !== $numItems) {
                $columns .= ',';
                $values .= ',';
            }
        }
        return 'INSERT INTO `list-user` (' . $columns . ') VALUES(' . $values . ');';

    }

    private function sendMail()
    {

        $mail = new PHPMailer;
        $mail->FromName = $this->infoMail['fromName']; //'Formulario llenitas'
        $mail->CharSet = 'UTF-8';
        $mail->From = $this->infoMail['from']; //'webmaster@simonsein.com'
        $mail->Subject = $this->infoMail['subject'];//'Mensaje llenitas';
        $mail->MsgHTML('Mensaje con HTML');

        $mail->Body = $this->template();
        $addresses = explode(',', $this->infoMail['emails']);

        foreach ($addresses as $address) {
            $mail->AddAddress($address);
        }
        $this->send = ($mail->Send()) ? true : false;
    }

    private function template()
    {
        $web = $this->infoMail['web'];
        $template = '<h1>Mensaje enviado desde ' . $web . '</h1><br><br>';
        foreach ($this->infoPost as $key => $post) {
            $template .= $key . ': ' . $post[$key] . '<br>';
        }
        return $template;
    }

    private function verifyRequired($key)
    {
        if (empty($this->infoPost[$key])) {
            $this->messages[] = [$key => "Es obligatorio"];
        }
    }

    private function verifyMail($key)
    {
        if (!filter_var($this->infoPost[$key], FILTER_VALIDATE_EMAIL)) {
            $this->messages[] = [$key => "Debe ser un email valido"];
        }
    }

    private function verifyNumber($key)
    {
        if (!is_numeric($this->infoPost[$key])) {
            $this->messages[] = [$key => "Debe ser un número"];
        }
    }

    public function getMessages()
    {
        return $this->messages;
    }

    public function getSend()
    {

        return $this->send;
    }
}