function something()
{
	var x = window.localStorage.getItem('aaa'); // x = hh['aaa']

	x = x*1 + 1; // x = x + 1

	window.localStorage.setItem('aaa', x); // hh['aaa'] = x

	alert(x);

}