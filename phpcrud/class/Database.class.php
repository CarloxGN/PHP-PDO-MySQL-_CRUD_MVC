<?php
include_once 'config/Config.php';
class Database extends PDO{
  private $conn, $user, $pass;

  public function __construct(){
    $this->conn = 'mysql:host='.HOST.';dbname='.DATABASE;
    $this->user = USER;
    $this->pass = PASSWORD;
    $this->charset = CHARSET;
    try{
      parent::__construct($this->conn, $this->user, $this->pass);
      parent::setAttribute(PDO::MYSQL_ATTR_INIT_COMMAND,'SET NAMES '.$this->charset);
      parent::setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $ex){
      die('Attention: Error connecting to Database. '. $ex->getMessage());
    }
  }

  public function __destruct() {
		$this->conn = null;
	}
}
