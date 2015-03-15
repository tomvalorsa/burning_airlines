var app = app || {};

app.burningFlights = new app.Flights();
app.burningAirplanes = new app.Airplanes();
app.burningSeats = new app.Seats();

$(document).ready(function() {
  if ($('#main').length === 0) {
    return;
  };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };
  app.burningSeats.fetch();
  
  app.burningFlights.fetch().done(function () {
    app.burningAirplanes.fetch().done(function() {
      app.appRouter = new app.AppRouter();
      Backbone.history.start()
    })

  });
});