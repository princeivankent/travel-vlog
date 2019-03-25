$(document).ready(function(){
	

	$(document).on('click', '.category_action', function(){
		var action = "SearchRooms";
		var category = $(this).attr("id");

		$.ajax({
			url: "Model/action.php",
			type: "POST",
			data: {
				action:action,
				category:category
			},
			success: function(data, status){
				
				if(status == "success"){
					
					if(data == "BAD"){
						$('.rooms').html(
							`<span style="background-color: red; color: white; font-size: 14px; padding: 5px; display: block"><center>No available rooms for this type</center></span>
							`);
					}
					else{
						$('.rooms').html(data);
						$('html,body').animate({ scrollDown: 0 }, 'slow');
		        		return false;
					}
				}
			}
		});
	});



	$(document).on('click', '.booking_action', function(){

		var action = "Booking";
		var id = $(this).attr("id");
		
		$.ajax({
			url: "Model/action.php",
			type: "POST",
			data: {
				action:action,
				id:id
			},
			success: function(data){
				
				$('.content').load('View/pages/transaction-process.php');
				
			}
		});
	});


	var checkin_date;
	var checkout_date;
	var night_count;
	var people_count;

	$(document).on('click', '.search_action', function(){

		var checkin = $("#checkin").val();
		var checkout = $("#checkout").val();
		var people = $("#people").val();

		var date    = new Date(checkin),
		    yr      = date.getFullYear(),
		    oldmonth = date.getMonth()+1,
		    month = oldmonth < 10 ? '0' + oldmonth : oldmonth,
		    // month   = date.getMonth() < 10 ? '0' + date.getMonth()+1 : date.getMonth(),
		    day     = date.getDate()  < 10 ? '0' + date.getDate()  : date.getDate(),
		    new_checkin = yr + '-' + month + '-' + day;

		var date1    = new Date(checkout),
		    yr1      = date1.getFullYear(),
		    oldmonth1 = date1.getMonth()+1,
		    month1 = oldmonth1 < 10 ? '0' + oldmonth1 : oldmonth1,
		    // month   = date.getMonth() < 10 ? '0' + date.getMonth()+1 : date.getMonth(),
		    day1     = date1.getDate()  < 10 ? '0' + date1.getDate()  : date1.getDate(),
		    new_checkout = yr1 + '-' + month1 + '-' + day1;

		var nights = day1 - day;
		
		$('#booking_checkin').text(checkin);
		$('#booking_checkout').text(checkout);
		$('#booking_nights').text(nights);
		$('#booking_people').text(people);

		checkin_date = checkin;
		checkout_date = checkout;
		night_count = nights;
		people_count = people;
	});


	$(document).on('click', '#confirm-registration', function(){

			var action = "RegisterGuest";

			var new_checkin_date = checkin_date;
			var new_checkout_date = checkout;
			var new_night_count = night_count;
			var new_people_count = people_count;

			var fullname = $('#fullname').val();
			var address = $('#address').val();
			var nationality = $('#nationality').val();
			var contactno = $('#contactno').val();

			$.ajax({
				url: "Model/action.php",
				type: "POST",
				data: {
					action:action,
					new_checkin_date:checkin_date,
					new_checkout_date:checkout_date,
					new_night_count: night_count,
					new_people_count: people_count,
					fullname:fullname,
					address:address,
					nationality:nationality,
					contactno:contactno
				},
				success: function(data, status){

					if(status == "success"){
						if ($('#booking_checkin').text() == "" || $('#booking_checkout').text() == "") {
							alert("Choose date first!");
						}
						if ($('#fullname').val() == "" || $('#address').val() == "") {
							alert("Personal Information is incomplete");
						}
						else{
							if (data == "GOOD") {
								swal({
								  title: "Successfully submitted!",
								  text: "Please, check your reservation form",
								  icon: "success",
								  button: "Okay!",
								});

								$(document).on('click', '.swal-button', function(){
									var action = "getUserId";
									$.ajax({
										url: "Model/action.php",
										type: "POST",
										data: {
											action:action	
										}
									})
									.done(function(data){
										// alert(data);
										window.location = "View/pages/reservation-form.php";
									})
									.fail(function(err){

									});
								});
							}
							else if (data == "BAD") {

							}	
						}
					}
					else{
						alert('failed!');
					}
				}
			});
		});

		var id;
		function getPerson(){
			
			var action = "GetLastPersonRegistered";

			$.ajax({
				url: "Model/action.php",
				type: "POST",
				data: {
					action:action
				},
				dataType: 'JSON',
				success: function(data, status){

					if(status == "success"){
						id = data.guest_id;
					}
					else{

					}
				}
			});
		}
});