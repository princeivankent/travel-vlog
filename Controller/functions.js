$(document).ready(function(){

	localStorage.id = "";
	localStorage.username = "";
	localStorage.password = "";

	function removeAllStorage(){
		localStorage.id = "";
		localStorage.username = "";
		localStorage.password = "";
	}

	checkBrowserCompat();

	function checkBrowserCompat(){
		if(typeof(Storage) !== "undefined"){
			//code..
		}
		else{
			//code..
		}
	}

	$(document).on('submit', '#login_form', function(){
		var action = "Login";

		var username = $('#username').val();
		var password = $('#password').val();

		var new_username;
		var new_password;

		$.ajax({
			url: "Model/action.php",
			type: "POST",
			data: {
				action:action,
				username:username,
				password:password
			},
			succes: function(data){
				alert(data);
			}
		});
	});
});