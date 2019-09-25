module Api
  module V1
    module Auth
      class SessionsController < Api::V1::BaseController
        def logged_in
          if @current_user
            success_response(logged_in: true, user: @current_user)
          else
            success_response(logged_in: false)
          end
        end

        def login
          user_details = strip_whitespace(user_params)
          user = User.find_by(account_number: user_details["account_number"],
                              active: true)
          valid_user = user.try(:authenticate, user_details["password"])

          if user && valid_user
            session[:user_id] = user.id
            reset_login_attempt user
            success_response(user)
          elsif user && !valid_user
            failed_login_attempt user
          else
            error_response(global: "Incorrect Credentials")
          end
        end

        private

        def reset_login_attempt(user)
          user.login_attempts.delete_all
        end

        def failed_login_attempt(user)
          user.login_attempts.create(count: 1)
          count = user.login_attempts.count
          if count >= 3
            user.active = 0
            user.save!
            error_response({
                             global: "Account has been deactivated"
                           }, :bad_request)
          else
            error_response(global: "Incorrect Credentials")
          end
        end

        def user_params
          params.permit(
            :account_number,
            :password
          )
        end
      end
    end
  end
end
