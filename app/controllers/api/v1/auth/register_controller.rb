module Api
  module V1
    module Auth
      class RegisterController < Api::V1::BaseController
        def create
          print "Password"
          puts strip_whitespace(user_params)
          user = User.create!(strip_whitespace(user_params))

          if user
            session[:user_id] = user.id
          end
          success_response({ user: user }, :created)
        end

        private

        def user_params
          params.permit(
            :first_name,
            :last_name,
            :email,
            :password
          )
        end
      end
    end
  end
end
