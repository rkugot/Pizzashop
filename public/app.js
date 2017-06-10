function something()
{
	var x = window.localStorage.getItem('aaa'); // x = hh['aaa']

	x = x*1 + 1; // x = x + 1

	window.localStorage.setItem('aaa', x); // hh['aaa'] = x

	alert(x);

}

function add_to_cart(id) //change to button plus
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key); // create unic key for product in localStorage
	x = x*1 + 1;
	window.localStorage.setItem(key, x);
}

//add function remove_from_cart - button minus

$(function () {
  // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
  $('[data-toggle="tooltip"]').tooltip()
})
