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
    "./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js",
    "./bower_components/requirejs/require.js",
    "./bower_components/requirejs-text/text.js",
    "./bower_components/backbone-amd/backbone-min.js",
    "./bower_components/backbone-amd/backbone-min.map",
    "./bower_components/underscore-amd/underscore-min.js",
    "./bower_components/underscore-amd/underscore-min.map",
    "./bower_components/chaplin/chaplin.min.js",
    "./bower_components/require-handlebars-plugin/hbs/handlebars.js"
  ].each do |file|
    cp(file, "./client/js/vendor")
  end
end

multitask :serve => ['client:serve', 'server:serve']

namespace :server do
  task :serve do
    Dir.chdir 'server' do
      sh "padrino start -p 4567"
    end
  end
end

namespace :client do
  task :serve do
    sh "ruby app.rb"
  end
end
