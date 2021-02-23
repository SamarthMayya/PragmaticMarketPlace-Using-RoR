class StoreController < ApplicationController
  include CurrentCart
  before_action :set_cart
  def inc_counter
    if session[:counter].nil?
      session[:counter] = 0
    end
    session[:counter] += 1
  end
  def index
    @products = Product.order(:title)
    @count = inc_counter
  end
end
