Rails.application.routes.draw do
  resources :orders
  resources :line_items
  resources :carts
  root 'store#index', as: 'store_index'
  resources :products do
    member do
      get 'who_bought'
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
