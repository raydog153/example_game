Rails.application.routes.draw do
  devise_for :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: "greenhouses#index"

  # Greenhouse routes
  get "greenhouses/add_modal", to: "greenhouses#greenhouse_add_modal", as: :greenhouse_add_modal
  resources :greenhouses
  #get "greenhouses/add_modal", to: "greenhouses#greenhouse_add_modal", as: :greenhouse_add_modal
end
