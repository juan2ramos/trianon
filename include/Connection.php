<?php

class Connection
{
    static $_instance;
    private $_dataBase;
    private $_link;
    private $_password;
    private $_server;
    private $_user;
    private function __construct($dataBase) {
        $this->_server = $dataBase['server'];
        $this->_dataBase = $dataBase['dataBase'];
        $this->_user = $dataBase['user'];
        $this->_password = $dataBase['password'];
        $this->conexion();
    }
    public static function getInstance($dataBase) {
        if (!(self::$_instance instanceof self)) {
            self::$_instance = new self($dataBase);
        }
        return self::$_instance;
    }
    private function __clone(){}

    private function conexion() {
        $this->link = mysqli_connect($this->_server,
            $this->_user, $this->_password, $this->_dataBase);
    }
    public function run($sql) {
        return mysqli_query($this->link, $sql);
    }
    public function query($stmt){

        while ($row = mysqli_fetch_array($stmt, MYSQLI_ASSOC)) {
            $rows[] = $row;
        }
        if (empty($rows))
            return FALSE;
        return $rows;
    }


}