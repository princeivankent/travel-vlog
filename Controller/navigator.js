$(document).ready(() => {
	$('.content').load('View/pages/home.php');

	$(document).on('click', '.nav-link', function(){
		var button = $(this).attr("id");

		if(button == "home_nav"){
			$('.content').load('View/pages/home.php');
      $('#home_tab').addClass('active');
      $('#about_tab').removeClass('active');
      $('#contact_tab').removeClass('active');
      $('#destination_tab').removeClass('active');
		}
		else if(button == "room_nav"){
			$('.content').load('View/pages/rooms.php');
      $('#home_tab').addClass('active');
      $('#about_tab').removeClass('active');
      $('#contact_tab').removeClass('active');
      $('#destination_tab').removeClass('active');
		}
		else if(button == "about_nav"){
			$('.content').load('View/pages/about-component.php');
      $('#about_tab').addClass('active');
      $('#home_tab').removeClass('active');
      $('#contact_tab').removeClass('active');
      $('#destination_tab').removeClass('active');
		}
		else if(button == "contact_nav"){
			$('.content').load('View/pages/contact-component.php');
      $('#contact_tab').addClass('active');
      $('#about_tab').removeClass('active');
       $('#destination_tab').removeClass('active');
       $('#home_tab').removeClass('active');
		}
		else if(button == "destination_nav"){
			$('.content').load('View/pages/destination-component.php');
      $('#destination_tab').addClass('active');
      $('#home_tab').removeClass('active');
      $('#contact_tab').removeClass('active');
      $('#about_tab').removeClass('active');
		}
	});

	// AUTO REFRESH TABLE
	// setInterval(function talkshit(){
	// 	showInventory();
	// }, 5000);
}); 