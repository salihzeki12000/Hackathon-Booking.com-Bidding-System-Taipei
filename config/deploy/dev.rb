set :branch, ENV["CI_BRANCH"]
set :user, :ubuntu

role :app, %w{dev.kidguard.com}
role :web, %w{dev.kidguard.com}
role :db,  %w{dev.kidguard.com}

set :deploy_to, '/opt/www/kid-guard-client-dev'

set :ssh_options, {
  user: fetch(:user),
  auth_methods: %w(publickey),
  keys: [
    File.join(ENV['HOME'], '.ssh', 'id_rsa'),
    File.join(ENV['HOME'], '.ssh', 'kid-guard.pem')
  ],
}
