set :branch, :master
set :user, :work1

role :app, %w{www.kidguard.com}
role :web, %w{www.kidguard.com}
role :db,  %w{www.kidguard.com}

set :ssh_options, {
  user: fetch(:user),
  auth_methods: %w(publickey),
  keys: [
    File.join(ENV['HOME'], '.ssh', 'id_rsa'),
    File.join(ENV['HOME'], '.ssh', 'kid-guard-production.pem')
  ],
}
