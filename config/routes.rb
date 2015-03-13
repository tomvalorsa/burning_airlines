Rails.application.routes.draw do
  # Might need to be nested within flights' routes
  resources :seats

  resources :users
  resources :flights
  resources :airplanes

end
