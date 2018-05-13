<!DOCTYPE html>
<html lang="en">
<head>
<title>Kisan Network OTP Example</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">


<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>

<script src="js/UserService.js" type="text/javascript"></script>
<script src="js/mainApp.js" type="text/javascript"></script>
<script src="js/SMSService.js" type="text/javascript"></script>
<script src="https://code.jquery.com/jquery-3.3.1.min.js"
	integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	crossorigin="anonymous"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>
	<nav class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a class="navbar-brand" href="#!sendSMS">Kisan Network OTP App</a>
			</div>
			<ul class="nav navbar-nav">
				<li ><a href="#!sendSMS">Home</a></li>
				<li class="active"><a href="#!createUser">Create/Edit User</a></li>
			</ul>
		</div>
	</nav>
	<div class="container">
		<div ng-app="myApp">
			<div class="ng-view"></div>

		</div>
	</div>
</body>
</html>
