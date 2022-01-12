# Rails.application.routes.draw do
#   use_doorkeeper
  
#   resources :knuxes 
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

#   # Defines the root path route ("/")
#   # root "articles#index"
# end

Rails.application.routes.draw do
  use_doorkeeper
  jsonapi_resources :users, only: %w[create]

  jsonapi_resources :knuxes 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
