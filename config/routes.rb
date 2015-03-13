Rails.application.routes.draw do
  root :to => 'pages#landing'

  get '/search' => 'pages#search'
  # Might need to be nested within flights' routes
  resources :seats

  resources :users
  resources :flights
  resources :airplanes

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
end
