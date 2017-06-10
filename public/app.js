function something()
{
	var x = window.localStorage.getItem('aaa'); // x = hh['aaa']

	x = x*1 + 1; // x = x + 1

	window.localStorage.setItem('aaa', x); // hh['aaa'] = x

	alert(x);

}

function add_to_cart()
{
	alert('Hello from function');
}

$(function () {
  // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
  $('[data-toggle="tooltip"]').tooltip()
})
