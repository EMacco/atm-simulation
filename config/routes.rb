Rails.application.routes.draw do
  root "static#index"
  namespace :api do
    namespace :v1 do
      resources :account_balance, only: [:index]

      namespace :auth do
        resources :register, only: [:create]
        delete :logout, to: "sessions#logout"
        get :logged_in, to: "sessions#logged_in"
        post :login, to: "sessions#login"
      end
      namespace :transactions do
        patch :deposit, to: "deposit#update"
        patch :withdraw, to: "withdraw#update"
      end
    end
    match '*unmatched_route', :to => 'base#raise_not_found!', :via => :all
  end

  match '*unmatched_route', :to => 'static#index', :via => :all
end
