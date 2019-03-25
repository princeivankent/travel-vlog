$(document).ready(function(){

	getID();
	function getID(){
		var action = "getUserData";
		$.ajax({
			url: "../../Model/customer-data.php",
			type: "POST",
			data: { action:action },
			dataType: 'json'
		})
		.done(function(data){
			console.log(data);
			$('#name').text(data.fullname);
			$('#address').text(data.address);
			$('#checkin').text(data.date_in);
			$('#checkout').text(data.date_out);
			$('#roomname').text(data.name);
			$('#roomtype').text(data.room_type);
		})
		.fail(function(err){

		});
	}

	$(document).on('click', '#print_action', function(){
		$('#print_action').hide();
		window.print();
		setTimeout(function(){ 
		$('#print_action').fadeIn();
		}, 500);
	});
});