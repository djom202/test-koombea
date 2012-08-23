$(window).load(function() {

	//------- Google Maps ---------//
		  
		  
	// Creating a LatLng object containing the coordinate for the center of the map
	var latlng = new google.maps.LatLng(,);
	  
	// Creating an object literal containing the properties we want to pass to the map  
	var options = {  
		zoom: 15, // This number can be set to define the initial zoom level of the map
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP // This value can be set to define the map type ROADMAP/SATELLITE/HYBRID/TERRAIN
	};  
	// Calling the constructor, thereby initializing the map  
	var map = new google.maps.Map(document.getElementById('checkin-map'), options);  
	
	// Define Marker properties
	var image = new google.maps.MarkerImage('images/marker.png',
		// This marker is 106 pixels wide by 67 pixels tall.
		new google.maps.Size(106, 67),
		// The origin for this image is 0,0.
		new google.maps.Point(0,0),
		// The anchor for this image is the base of the flagpole at 50,42.
		new google.maps.Point(50, 42)
	);
	
	// Add Marker
	var marker1 = new google.maps.Marker({
		position: new google.maps.LatLng(51.517917,-0.15559), 
		map: map,		
		icon: image // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
	});	
	
	// Add listener for a click on the pin
	google.maps.event.addListener(marker1, 'click', function() {  
		infowindow1.open(map, marker1);  
	});
		
	// Add information window
	var infowindow1 = new google.maps.InfoWindow({  
		content:  createInfo('White Noise Multimedia', '23 Baker Street,<br> London, United Kingdom')
	}); 
	
	// Create information window
	function createInfo(title, content) {
		return '<div class="infowindow"><strong>'+ title +'</strong><br />'+content+'</div>';
	} 

});