Rails.application.routes.draw do
  use_doorkeeper 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
 
  # resource :users
  jsonapi_resources :users
  jsonapi_resources :knuxes
end
