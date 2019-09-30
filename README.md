# ATM Simulation
[![Build Status](https://travis-ci.org/EMacco/atm-simulation.svg?branch=develop)](https://travis-ci.org/EMacco/atm-simulation) [![Maintainability](https://api.codeclimate.com/v1/badges/0474103db20a820c07a5/maintainability)](https://codeclimate.com/github/EMacco/atm-simulation/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/0474103db20a820c07a5/test_coverage)](https://codeclimate.com/github/EMacco/atm-simulation/test_coverage)

This is an online ATM simulator capable of handling different virtual financial transactions between users. This application is built using `Ruby on Rails` for the backend and `React & Redux` for the frontend 

# Project Management
This application was managed using [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/2400403)

# Current Features

  - Authentication (Login and Registration)
  - Deposit money in your account
  - Withdraw money from your account
  - View receipt after each sucessful transaction


### Technologies Used

* [Ruby on Rails](http://rubyonrails.org/) - A web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller
* [ReactJS](https://reactjs.org/) - is a tool for building UI components
* [Redux](https://redux.js.org/) - a predictable state container for JS apps
* [RSpec](https://rspec.info/) - a testing tool wrritten in Ruby to test Ruby


### Installation

The system requires [Ruby v2.5.6](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-2.5.6-1/rubyinstaller-devkit-2.5.6-1-x64.exe) and  [MySQL](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-web-community-8.0.17.0.msi) to run.

Clone the repository
```sh
$ git clone https://github.com/EMacco/atm-simulation.git
```

Install the application dependencies and devdependencies.

```sh
$ cd atm-simulation
$ bundle install
$ yarn install
```

Create the databases and run migrations
```sh
$ rake db:setup
$ rake db:migrate
```

Start the rails server 
```sh
$ rails server
```

Start the webpack dev server in a different terminal
```sh
$ ruby ./bin/webpack-dev-server
```

or start both servers at once
```sh
$ foreman start
```

Verify the deployment by navigating to your server address in your preferred browser.
[http://localhost:3000/](http://localhost:3000/)


# Future Features

  - Transfer money to other users
  - Cardless withdrawal (Give a unique code to another user and they can get a specific amount of money from your account)
  - Store accounts of friends to easily transfer money


License
----

MIT
