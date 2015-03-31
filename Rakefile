task :default do
  Rake::Task["bower:install"].invoke
  Rake::Task["copy"].invoke
end

namespace :bower do
  desc "Install components from bower"
  task :install do
    sh "bower install"
  end
end

task :copy do
  [ "./bower_components/jquery/dist/jquery.min.js",
    "./bower_components/jquery/dist/jquery.min.map",
    "./bower_components/requirejs/require.js",
    "./bower_components/backbone-amd/backbone-min.js",
    "./bower_components/backbone-amd/backbone-min.map",
    "./bower_components/underscore-amd/underscore-min.js",
    "./bower_components/underscore-amd/underscore-min.map",
    "./bower_components/chaplin/chaplin.min.js",
    "./bower_components/handlebars/handlebars.js"
  ].each do |file|
    cp(file, "./client/js/vendor")
  end
end

multitask :serve => ['server:serve', 'client:serve']

namespace :server do
  task :serve do
    sh "ruby server/app.rb"
  end
end

namespace :client do
  task :serve do
    sh "ruby app.rb"
  end
end
