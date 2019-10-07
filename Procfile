release: bundle exec rake db:migrate
web: bundle puma -t 5:5 -p ${PORT:-3000} -e ${RACK_ENV:-development}
webpacker: ruby ./bin/webpack-dev-server -w
