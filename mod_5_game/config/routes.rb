Rails.application.routes.draw do
  resources :character_items
  resources :monster_items
  resources :monsters
  resources :items
  resources :characters
  resources :jobs
  resources :players
  post '/signup', to: 'players#create'
  post 'login', to: 'sessions#create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
