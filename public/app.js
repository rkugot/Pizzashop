function add_to_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key); // create unic key for product in localStorage
	x = x*1 + 1;
	window.localStorage.setItem(key, x);

	update_orders_input();
	update_orders_button();
}

function remove_from_cart(id)
{
	var key = 'product_' + id;
	var x = window.localStorage.getItem(key); // create unic key for product in localStorage
	
	if(x*1 >= 1)
	{
		x = x*1 - 1;
		window.localStorage.setItem(key, x);

		update_orders_input();
		update_orders_button();
	}

}

function update_orders_input()
{
	var orders = cart_get_orders();
	$('#orders_input').val(orders);
}

function update_orders_button()
{
	var text = 'Cart (' + cart_get_number_of_items() + ')';
	$('#orders_button').val(text);
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

	return orders;
}

function order_cancel()
{
	window.localStorage.clear();
	update_orders_input();
	update_orders_button();
	$('#cart').text('Your cart is now empty');
	return false;
}

//add function remove_from_cart, add plus and minus buttons

$(function () {
  // инициализировать все элементы на страницы, имеющих атрибут data-toggle="tooltip", как компоненты tooltip
  $('[data-toggle="tooltip"]').tooltip()
})
