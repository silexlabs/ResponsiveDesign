$( document ).ready(function() {
	$('#saveFile').hide();
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


function saveFileCss(){
	var content = $('#content-css').val(),
		name = ($('#name-css').val() != "" ) ? $('#name-css').val() : "style",
		type = $('#typeFile').val();

	$.post("/api/v1.0/dropbox/exec/put/"+name+"."+type,{
		data: content
	})
		.done(function(req, res){
				$('#filesD li').removeClass('success');
				$('#filesD ul').append('<li class="success">'+name+'.'+type+'</li>');

				var url = encodeURIComponent('/api/v1.0/dropbox/exec/get/'+name+'.'+type) + '/' + btoa(content);


				var download = '<a target="_blank" href="/download/'+url+'" >download</a>';
				$('#success-file').html('<p class="bg bg-success">Fichier bien ajouté ! '+download+'</p>');
		})
		.fail(function(){
			$('#success-file').html('<p class="bg bg-danger">Le fichier n\'a pas été ajouté</p>');
		});
}