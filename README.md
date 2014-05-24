OnlyNumber.js
===

This is a small jQuery plugin for make a HTML input with only numbers allowed on that input.

I did this small jQuery plugin, while I was working in a small project and I use it for other one today. So may someone need it to save time like me... So, there it is. Hope this it helpful for you too.

Easy to use:

**First Download it: [Right click here and click on "Save link as..."](//github.com/wwwanaya/OnlyNumber.js/blob/master/onlynumber.min.js)**

**Then, here is an example how to use it:**

```
<!-- Here we create 2 inputs, type number, so these will be affected by the plugin -->
	<label for="num1">Number 1</label>
	<input id="num1" type="number">
	<label for="num2">Number 1</label>
	<input id="num2" type="number">
	
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
	// That's all, there you go.
</script>
```



** Conclusion: **

The sintaxy is easy:
```
onlyNumber($('#ID_Input'), $('#ID_Input'), $(ID_Input), ...);
```
Hope you understand, is very easy.

If you need more help or something, contact me at: 

* Kevin Anaya
* E-mail: [www.anaya@gmail.com](mailto:www.anaya@gmail.com)
* Skype: [www.anaya](skype:www.anaya?userinfo)
* Google+: [+KevinAnaya](https://plus.google.com/+KevinAnaya/)

