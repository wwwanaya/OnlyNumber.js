OnlyNumber.js
=============

This is a small pluggin for make a HTML input with only numbers allowed on that input.

Easy to use:

<!DOCTYPE html>
<html lang="es">
<head>
	<title>Input with only numbers allowed</title>
</head>
<body>
<form>
  <!-- Here we create 2 inputs, type number, so these will be affected by the plugin-->
	<label for="num1">Numero 1</label>
	<input id="num1" type="number">
	<label for="num2">Numero 1</label>
	<input id="num2" type="number">
	
</form>
<!-- Include jQuery always, if this is not included, will not work. -->
<script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- Include our plugin onlynumber. -->
<script type="text/javascript" src="onlynumber.min.js"></script>
<! -- Then we call it with this small script -->
<script type="text/javascript">
  // Here we start with a typical jQuery start
	$(document).ready(function(){
	  // Here we past the input ID for make it a input with only numbers allowed.
		onlyNumber($('#num1'), $('#num2'));
	});
</script>
</body>
</html>

Conclusion: 

The sintaxy is easy:
onlyNumber($('#ID_Input'), $('#ID_Input'), $(ID_Input), ..);

Hope you understand is very easy.

If you need more help or something, contact me at: 

Kevin Anaya
email: www.anaya@gmail.com
skype: www.anaya
