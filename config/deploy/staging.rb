set :branch, ENV["CI_BRANCH"]
set :user, :ubuntu

role :app, %w{staging.kidguard.com}
role :web, %w{staging.kidguard.com}
role :db,  %w{staging.kidguard.com}

set :ssh_options, {
  user: fetch(:user),
  auth_methods: %w(publickey),
  keys: [
    File.join(ENV['HOME'], '.ssh', 'id_rsa'),
    File.join(ENV['HOME'], '.ssh', 'kid-guard.pem')
  ],
}
