module Api
  module V1
    class BaseController < ApplicationController
      include Response
      include ExceptionHandler
      include CurrentUserConcern
      include ApplicationHelper
    end
  end
end
