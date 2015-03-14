var app = app || {};

app.burningFlights = new app.Flights();

$(document).ready(function() {
  if ($('#main').length === 0) {
    return;
  };

  _.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
  };

  app.burningFlights.fetch().done(function () {
    app.appRouter = new app.AppRouter();
    Backbone.history.start()
  });

});