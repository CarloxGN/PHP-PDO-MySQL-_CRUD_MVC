<?php
include_once 'class/Database.class.php';

class Sectors{
    private static $instance;
    private $id_sector;
    private $name_sector;

    // DB Connection attrib
    private $conn;
    private $query;
    // Config attrib
    private $attrib;
    private $field;

    public function __construct(){
      $this->conn = new Database();
    }

    public static function singleton(){
        if (!isset(self::$instance)) {
            $myclass = __CLASS__;
            self::$instance = new $myclass;
        }
        return self::$instance;
    }

    public function set($attrib, $content) {
      $this->$attrib = $content;
    }

    public function get($attrib) {
      return $this->$attrib;
    }

    public function get_sector(){
        try {
            $this->query = $this->conn->prepare('select * from tbl_sectors 
                inner join
                    tbl_counties
                        on tbl_sectors.id_county = tbl_counties.id_county
                inner join 
                    tbl_states 
                        on tbl_sectors.id_state = tbl_state.id_state 
                inner join 
                    tbl_countries 
                        on tbl_states.id_country = tbl_countries.id_country  
                where 
                    id_sector = :id_sector');
            $this->query->bindValue(':id_sector', $this->id_sector, PDO::PARAM_INT);
            $this->query->execute();
            $data = $this->query->fetchAll();
            $this->query = null;
            return $data;
        }catch (PDOException $e) {
            $e->getMessage();
        }
    }

    public function get_sectors(){
        try {
            $this->query = $this->conn->prepare('select * from tbl_sectors');
            $this->query->execute();
            $data = $this->query->fetchAll();
            $this->query = null;
            return $data;
        }catch (PDOException $e) {
            $e->getMessage();
        }
    }

    private function __clone(){
        trigger_error('Clone option does not allowed!.', E_USER_ERROR);
    }
}
