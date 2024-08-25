var buttons = document.getElementsByClassName('uncheck-all');

buttons[0].onclick = function(){
	document.querySelectorAll('input[type=checkbox]:checked').forEach(el => el.click());
};
