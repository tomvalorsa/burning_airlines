User.destroy_all
Airplane.destroy_all
Flight.destroy_all

# Seed data for Users
u1 = User.create(:name => 'Liam', :email => 'liamdarmody@gmail.com', :password => 'chicken', :password_confirmation => 'chicken')
u2 = User.create(:name => 'Tom', :email => 'tom@tom.com', :password => 'chicken', :password_confirmation => 'chicken')
u3 = User.create(:name => 'Julia', :email => 'julia@julia.com', :password => 'chicken', :password_confirmation => 'chicken')
admin = User.create(:name => 'admin', :email => 'admin@admin.com', :password => 'chicken', :password_confirmation => 'chicken', :is_admin => true)

p1 = Airplane.create(:name => 'Boeing 747', :rows => 2, :columns => 2)
p2 = Airplane.create(:name => 'Boeing 777', :rows => 4, :columns => 4)

f1 = p1.flights.create(:flight_name => 'MH-370', :origin => 'SYD', :destination => 'UKR', :flight_date => 'Fri, 13 Mar 2015 05:50:00 UTC +00:00')

f1.airplane_id = p1.id
f1.save