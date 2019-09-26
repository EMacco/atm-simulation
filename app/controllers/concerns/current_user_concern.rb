module CurrentUserConcern
  extend ActiveSupport::Concern

  included do
    before_action :set_current_user
  end

  def set_current_user
    if session[:user_id]
      @current_user = User.find_by(id: session[:user_id], active: true)
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_in: false }
  end
end
