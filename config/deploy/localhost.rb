set :branch, :"develop"
set :user, :cheng

role :app, %w{localhost}
role :web, %w{localhost}
role :db,  %w{localhost}

set :ssh_options, {
  user: fetch(:user),
  auth_methods: %w(publickey password)
}
