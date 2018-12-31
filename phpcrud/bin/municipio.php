<?php
defined('WEBSITEPATH') OR exit('No direct script access allowed');
//Cleaning Form´s variables
  $id = isset($_POST['id']) ? trim(filter_input(INPUT_POST, 'id', $filter = FILTER_VALIDATE_INT)) : "";

//Validating Form´s variables
if(isset($id)){
  echo '<option value = "">Selecciona un Municipio</option>';
  $municipio = new controllerCounties();
  $result = $municipio->listCounties($id);
  foreach ($result as $row){
    echo '<option value="'.$row['id_county'].'">'.$row['name_county'].'</option>';
  }
}