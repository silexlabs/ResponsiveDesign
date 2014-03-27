$( document ).ready(function() {
	$('#saveFile').hide();
	$('#saveDisk').hide();
	$.get('/api/v1.0/services/list/')
		.done(function(res){
			if(res[0].isConnected && res[0].isLoggedIn){
				buttonConnexion();
			}
		});

});

function buttonConnexion(){
	$('#connectD').html('Logout')
				.removeClass('btn-primary')
				.addClass('btn-success')
				.attr('onclick', 'javascript:logoutD()');
	$('#saveFile').show();
	$('#saveDisk').show();
}

function logoutD(){
	$.get('/api/v1.0/dropbox/logout')
		.done(function(res){
			if(res.success){
				window.location.reload();
		}
	});
};


function dropboxco(){
	$.ajax({
		url:  "/api/v1.0/dropbox/connect/",
		type: "GET"
	}).done(function(res){
		var authPopup = window.open( res.authorize_url, 'authPopup', 'height=700,width=960,dialog');
		if (authPopup)
		{
			var timer = setInterval(function()
				{
					if (authPopup.closed)
					{
						clearInterval(timer);
						$.get('/api/v1.0/dropbox/login/')
							.done(function(res){
								if(res.success){
									$.get('/api/v1.0/dropbox/account/')
										.done(function(res){
											buttonConnexion();
										});
								}
							})
					}
				}, 500);
		}
	})
}

function saveDisk(){
	var content = $('#content-css').val(),
		name = ($('#name-css').val() != "" ) ? $('#name-css').val() : "style",
		type = $('#typeFile').val();

	window.location = '/download/'+encodeURIComponent(name+'.'+type) + '/' + btoa(content);
}

function saveFileCss(){
	var content = $('#content-css').val(),
		name = ($('#name-css').val() != "" ) ? $('#name-css').val() : "style",
		type = $('#typeFile').val();

	$.post("/api/v1.0/dropbox/exec/put/"+name+"."+type,{
		data: content
	})
		.done(function(req, res){
				$('#success-file').html('<p class="bg bg-success">Fichier bien ajouté !</p>');
		})
		.fail(function(){
			$('#success-file').html('<p class="bg bg-danger">Le fichier n\'a pas été ajouté</p>');
		});
}