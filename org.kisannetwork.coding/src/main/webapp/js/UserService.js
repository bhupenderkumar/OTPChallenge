var app = angular.module("myApp", [ "ngRoute" ]);
app.service("UserService", function() {
	this.initUser = function() {
		if (this.users===undefined ||this.users.length < 1) {
			this.users = []
			// if (true)
			for (var i = 0; i < 2; i++) {
				var user = {};
				user.id = i;
				if (i == 0)
					user.number = 9717267473;
				if (i == 1)
					user.number = 7982161152;
				user.firstName = "Bhupender _" + i;
				user.lastName = "Sharma _" + i;
				this.users.push(user);
			}
		}
		return this.users;
	}
	// this.initUser();

	this.getUser = function() {
		this.initUser();
		// alert(this.users.length)
		return angular.copy(this.users);
	}

	this.createUser = function(user) {
		this.users.push(user);
	}
	this.deleteUser = function(user) {
		var index = this.users.indexOf(user);
		if (index > -1) {
			this.users.splice(index, 1);
		}
	}
});