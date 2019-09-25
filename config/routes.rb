Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      namespace :auth do
        resources :register, only: [:create]
        delete :logout, to: "sessions#logout"
        get :logged_in, to: "sessions#logged_in"
        post :login, to: "sessions#login"
      end
    end
  end

  match '*unmatched_route', :to => 'application#raise_not_found!', :via => :all
end
