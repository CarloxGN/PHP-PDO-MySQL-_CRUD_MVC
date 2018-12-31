	$(document).ready(function(){
		$('#id_departamento').on('change', function(){
				if($('#id_departamento').val() == ""){
					$('#municipio').empty();
					$('<option value = "">Selecciona un municipio</option>').appendTo('#municipio');
					$('#municipio').attr('disabled', 'disabled');
				}else{
					$('#municipio').removeAttr('disabled', 'disabled');
					//$('#municipio').load('municipio_get.php?id_departamento=' + $('#id_departamento').val());
					$.ajax(){

					}
				}
		});

		$('#blogtable').DataTable();

		addEventListener("load", function() {
		  setTimeout(hideURLbar, 0);
		}, false);

		function hideURLbar(){
		  window.scrollTo(0,1);
		}
	});