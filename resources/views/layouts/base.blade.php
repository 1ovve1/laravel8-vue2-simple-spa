<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>simple SPA</title>
	<link rel="stylesheet" href="{{ asset('css/app.css') }}">

</head>
<body>
	@yield('content')

	<script src="{{ mix('js/app.js') }}"></script>
	<script src="{{ asset('js/bootstrap.min.js') }}"></script>
</body>
</html>