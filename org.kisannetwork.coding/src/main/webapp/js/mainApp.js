//var app = angular.module("myApp", ["ngRoute"]);
app.controller("mainApp", [

		"$scope",
		"UserService",
		"SMSService",
		function($scope, UserService, SMSService) {
			
			$scope.users = angular.copy(UserService.getUser());
			$scope.sendOTPToUser = function(user) {
				// https://2factor.in/API/V1/{api_key}/SMS/+91{user's_phone_no}/AUTOGEN
				alert("sending message to " + user.firstName + "="
						+ user.lastName + "" + user.number);
				var response = SMSService.sendSMS(user).then(
						function(response) {
							console.log(response);
						}, function(error) {
							console.log(error)
						});
			}
		} ]);
app.controller("createUser", [ "$scope", "UserService",
		function($scope, UserService) {
			$scope.users = UserService.getUser();
			$scope.user = {};
			$scope.createUsers = function(user) {
				// for angular copy and alert if successfully created
				var isFound = false;
				console.log(user);
				angular.forEach($scope.users, function(value, key) {
					console.log(value)
					if (angular.equals($scope.user, value)) {
						isFound = true;
						alert("user updated successfully");
						$scope.users[key] = angular.copy($scope.user);
					}
				});
				if (!isFound) {
					$scope.user.id = Math.random() * 20 + 1;
					UserService.createUser($scope.user);
					alert("User Succesffuly Created");

				}
				$scope.user = {};
			}
			$scope.editUser = function(user) {
				$scope.user = angular.copy(user);
				// alert("Please save the updated Value ")
			}
		}

]);

app.config(function($routeProvider) {
	$routeProvider.when("/sendSMS", {
		templateUrl : "home.html",
		controller : "mainApp"
	}).when("/", {
		templateUrl : "createUser.html",
		controller : "createUser"
	}).when("/createUser", {
		templateUrl : "createUser.html",
		controller : "createUser"
	})
});
