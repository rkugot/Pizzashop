#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db"

class Product < ActiveRecord::Base
end

class Shipment < ActiveRecord::Base
end

get '/' do
	@products = Product.all
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
	@orders = params[:ordersinput]
	@items = parse_orders_input(@orders)

	@items.each do |item|
		item[0] = Product.find(item[0])
	end

	erb :cart
end

post '/order' do
	@s = Shipment.new params[:order]
	@s.save
	erb :order
end

def parse_orders_input(orders)
	s = orders.split(',')
	arr = []
	s.each do |x|
		s1 = x.split('=')
		s2 = s1[0].split('_')
		arr2 = [s2[1],s1[1]]
		arr << arr2
	end
	return arr
end