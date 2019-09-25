module Response
  def success_response(object, status = :ok)
    render json: { status: status, payload: object }, status: status
  end

  def error_response(object, status = :bad_request)
    render json: { status: status, errors: object }, status: status
  end
end
