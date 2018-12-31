<?php
defined('WEBSITEPATH') OR exit('No direct script access allowed');
//Cleaning Form´s variables
  $id = isset($_POST['id']) ? trim(filter_input(INPUT_POST, 'id', $filter = FILTER_VALIDATE_INT)) : "";

//Validating Form´s variables
if(isset($id)){
  echo '<option value = "">Selecciona un Estado</option>';
  $state = new controllerStates();
  $result = $state->listStates($id);
  foreach ($result as $row){
    echo '<option value="'.$row['id_state'].'">'.$row['name_state'].'</option>';
  }
}
           
