var app = app || {};

app.burningFlights = new app.Flights();
app.burningAirplanes = new app.Airplanes();

$(document).ready(function() {
  if ($('#main').length === 0) {
    return;
  };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  app.burningFlights.fetch().done(function () {
    app.burningAirplanes.fetch().done(function() {
      app.appRouter = new app.AppRouter();
      Backbone.history.start()
    })

  });
});