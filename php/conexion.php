<?php
class Conexion
{
    private $host;
    private $db;
    private $user;
    private $password;
    private $charset;

    public function __construct()
    {
        $this->host = 'localhost';
        $this->db = 'guessthesong';
        $this->user = 'root';
        $this->password = '';
        $this->charset = 'utf8'; //utf8mb4
    }

    public function connect()
    {
        $com = "mysql:host=".$this->host.";dbname=".$this->db.";charset=".$this->charset;
        $enlace = new PDO($com, $this->user, $this->password);
        return $enlace;
    }
}

$conexion = new Conexion();
print_r($conexion->connect());

?>
