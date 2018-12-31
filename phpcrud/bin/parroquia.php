<?php
defined('WEBSITEPATH') OR exit('No direct script access allowed');
//Cleaning Form´s variables
  $id = isset($_POST['id']) ? trim(filter_input(INPUT_POST, 'id', $filter = FILTER_VALIDATE_INT)) : "";

//Validating Form´s variables
if(isset($id)){
  echo '<option value = "">Selecciona una Parroquia</option>';
  $parroquia = new controllerSectors();
  $result = $parroquia->listSectors($id);
  foreach ($result as $row){
    echo '<option value="'.$row['id_sector'].'">'.$row['name_sector'].'</option>';
  }
}
           
