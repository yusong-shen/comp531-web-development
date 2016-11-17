heroku addons:create heroku-redis:hobby-dev
heroku plugins:install heroku-redis

heroku config | grep REDIS

