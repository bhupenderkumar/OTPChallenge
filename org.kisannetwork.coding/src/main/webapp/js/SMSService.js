app.service("SMSService", function($http) {

	this.sendSMS = function(user) {
		var number = user.number;
		alert(number);
		return $http({
			method : 'JSONP',
			url : this.URL + "/" + number + "/AUTOGEN",
			data : "message=" + number,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		});
	}
	
	this.changeAPIKEY = function(apiKey) {
		this.APIKEY=apiKey;
	}
	this.APIKEY = "7095c04f-5676-11e8-a895-0200cd936042";
	this.URL = "https://2factor.in/API/V1/" + this.APIKEY + "/SMS";

});