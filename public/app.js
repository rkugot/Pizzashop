function something()
{
	var x = window.localStorage.getItem('aaa'); // x = hh['aaa']

	x = x*1 + 1; // x = x + 1

	window.localStorage.setItem('aaa', x); // hh['aaa'] = x

	alert(x);

}

function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key); // create unic key for product in localStorage
	x = x*1 + 1;
	window.localStorage.setItem(key, x);
	alert('Items in your cart: '+cart_get_number_of_items());
}

function cart_get_number_of_items()
{
	var cnt = 0;

	for(var i = 0; i < window.localStorage.length; i++) //аналог for each in ruby
	{
		var key = window.localStorage.key(i); //получаем ключ 
		var value = window.localStorage.getItem(key); //получаем значение по ключу

		if(key.indexOf('product_') == 0)
		{
			cnt = cnt + value * 1;
		}
	}

	return cnt;
}

function cart_get_orders()
{
	var orders = '';

	for(var i = 0; i < window.localStorage.length; i++) //аналог for each in ruby
	{
		var key = window.localStorage.key(i); //получаем ключ 
		var value = window.localStorage.getItem(key); //получаем значение по ключу

		if(key.indexOf('product_') == 0)
		{
			orders = orders + key + '=' + value + ',';
		}
	}

	return orders.slice(0,-1);
}
//add function remove_from_cart, add plus and minus buttons

$(function () {
  // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
  $('[data-toggle="tooltip"]').tooltip()
})
