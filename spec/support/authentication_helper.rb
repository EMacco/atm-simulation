module AuthenticationHelper
  def login(user)
    post "/api/v1/auth/login", params: {
        account_number: user.account_number,
        password: user.password
    }
  end
end
