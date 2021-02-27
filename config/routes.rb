Rails.application.routes.draw do
  resources :pages
    root 'pages#index'

    namespace :api do
      namespace :v1 do
        resources :trips, param: :slug
        resources :locations, only: [:create,:destroy]
      end
    end

    get '*path', to: 'pages#index', via: :all
end
