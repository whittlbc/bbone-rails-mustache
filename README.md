Backbone-Rails-Mustache-RequireJS
==========================================

A 'Hello World' Template that's Heroku-ready

# Quick Start:

`git clone https://github.com/whittlbc/bbone-rails-mustache.git`
`cd bbone-rails-mustache`
`rails server`

# Heroku Quick Start

`heroku login` --> type in credentials when prompted

Create yourself a new app on Heroku and name it whatever you want

`heroku git:remote -a <APP_NAME> -r <REMOTE_NAME>`

`git push <REMOTE_NAME> <LOCAL_BRANCH_NAME>:master`

`heroku run rake db:migrate --app=<APP_NAME>`

`heroku restart --app=<APP_NAME>`

Good to go. Head on over to your new Heroku app's url.




