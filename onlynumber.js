function onlyNumber(){

	/*
	* 05/19/2014
	* Kevin Anaya
	* www.anaya@gmail.com
	*/

	// Variable para almacenar array de inputs
	inputs = [];

	/* Teclas permitidas
	*
	* En el rango funcKey hasta nine tiene las teclas que usaremos en el if:
	* backspace, tab, enter, shift, ctrl, alt, pause/break,
	* capslock, escape, pageup, pagedown, end, home,
	* leftarrow, uparrow, rightarrow, downarrow, insert, delete, 
	* 0,1,2,3,4,5,6,7,8,9
	* 
	* En el rango de zero2 y nine2 tiene las teclas que usaremos en el if:
	* numpad se refiere a el teclado alfanumerico
	* numpad 0, numpad 1, numpad 2, numpad 3, numpad 4,
	* numpad 5, numpad 6, numpad 7, numpad 8, numpad 9
	*
	* variable dot y dot2 contienen el punto para los decimales
	*/

	var funcKey, zero, nine, zero2, nine2;
	funcKey = 8;
	//zero = 48;
	nine = 57;
	zero2 = 96;
	nine2 = 105;
	dot = 190;
	dot2 = 110;

	// Se llena el array con los inputs enviados
	for (var i = 0; i < arguments.length; i++) {
		inputs[i] = arguments[i];

		// Al precionarse una tecla en los inputs
		$(inputs[i]).keydown(function(evt){
			
			/* Para debug, se puede remover */
			//console.log(evt.keyCode);

			// Primer rango de teclas
			if (!(evt.keyCode >= funcKey) || !(evt.keyCode <= nine)) {
				// Segundo rango de teclas
				if (!(evt.keyCode >= zero2) || !(evt.keyCode <= nine2)) {
					// Verificando dot
					if (!(evt.keyCode == dot)) {
						if (!(evt.keyCode == dot2)) {
							evt.preventDefault();
						};
					};	
				};
			};
		});
	};
};