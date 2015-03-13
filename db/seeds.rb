User.destroy_all

# Seed data for Users
u1 = User.create(:name => 'Liam', :email => 'liamdarmody@gmail.com', :password => 'chicken', :password_confirmation => 'chicken')
u2 = User.create(:name => 'Tom', :email => 'tom@tom.com', :password => 'chicken', :password_confirmation => 'chicken')
u3 = User.create(:name => 'Julia', :email => 'julia@julia.com', :password => 'chicken', :password_confirmation => 'chicken')
admin = User.create(:name => 'admin', :email => 'admin@admin.com', :password => 'chicken', :password_confirmation => 'chicken', :is_admin => true)