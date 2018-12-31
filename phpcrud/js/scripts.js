	$(document).ready(function(){
		$('#pais').on('change', function(){
				if($('#pais').val() == ""){
					$('#estado').empty();
					$('<option value = "">Selecciona un Estado</option>').appendTo('#estado');
					$('#estado').attr('disabled', 'disabled');
				}else{
					$('#estado').removeAttr('disabled', 'disabled');
					//$('#estado').load('municipio_get.php?id_departamento=' + $('#id_departamento').val());
					var id = $('#pais').val();
					var params = {'id': id};
					$.ajax({
				        data:  params,
				        url:   'index.php?pg=estado',
				        dataType: 'html',
				        type:  'post',
				        beforeSend: function () {
				            //mostramos gif "cargando"
				            //jQuery('#loading_spinner').show();
				            //antes de enviar la petición al fichero PHP, mostramos mensaje
				            //jQuery("#resultado").html("Procesando...");
				        }, 
				        success:  function (response) {
				            //escondemos gif
				            //jQuery('#loading_spinner').hide();
				            //mostramos salida del PHP
				            //jQuery("#resultado").html(response);
				            $('#estado').html(response);
				        }
				    });
				}
		});

		$('#estado').on('change', function(){
				if($('#estado').val() == ""){
					$('#municipio').empty();
					$('<option value = "">Selecciona un municipio</option>').appendTo('#municipio');
					$('#municipio').attr('disabled', 'disabled');
				}else{
					$('#municipio').removeAttr('disabled', 'disabled');
					//$('#municipio').load('municipio_get.php?id_departamento=' + $('#id_departamento').val());
					var id = $('#estado').val();
					var params = {'id': id};
					$.ajax({
				        data:  params,
				        url:   'index.php?pg=municipio',
				        dataType: 'html',
				        type:  'post',
				        beforeSend: function () {
				            //mostramos gif "cargando"
				            //jQuery('#loading_spinner').show();
				            //antes de enviar la petición al fichero PHP, mostramos mensaje
				            //jQuery("#resultado").html("Procesando...");
				        },
				        success:  function (response) {
				            //escondemos gif
				            //jQuery('#loading_spinner').hide();
				            //mostramos salida del PHP
				            //jQuery("#resultado").html(response);
				            $('#municipio').html(response);
				        }
				    });
				}
		});

		$('#municipio').on('change', function(){
				if($('#municipio').val() == ""){
					$('#parroquia').empty();
					$('<option value = "">Selecciona un parroquia</option>').appendTo('#parroquia');
					$('#parroquia').attr('disabled', 'disabled');
				}else{
					$('#parroquia').removeAttr('disabled', 'disabled');
					//$('#municipio').load('municipio_get.php?id_departamento=' + $('#id_departamento').val());
					var id = $('#municipio').val();
					var params = {'id': id};
					$.ajax({
				        data:  params,
				        url:   'index.php?pg=parroquia',
				        dataType: 'html',
				        type:  'post',
				        beforeSend: function () {
				            //mostramos gif "cargando"
				            //jQuery('#loading_spinner').show();
				            //antes de enviar la petición al fichero PHP, mostramos mensaje
				            //jQuery("#resultado").html("Procesando...");
				        },
				        success:  function (response) {
				            //escondemos gif
				            //jQuery('#loading_spinner').hide();
				            //mostramos salida del PHP
				            //jQuery("#resultado").html(response);
				            $('#parroquia').html(response);
				        }
				    });
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