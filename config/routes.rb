Rails.application.routes.draw do
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
  end

  match '*unmatched_route', :to => 'application#raise_not_found!', :via => :all
end
