if Rails.env == "production"
  Rails.application.config.session_store :cookie_store, key: "_atm-simulation_", domain: "atm-simulation-api.herokuapp.com"
else
  Rails.application.config.session_store :cookie_store, key: "_atm-simulation_"
end
