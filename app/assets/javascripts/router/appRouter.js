var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'viewFlight'
  },
  index: function() {
    var appView = new app.AppView({collection: app.burningFlights});
    appView.render();
  },
  viewFlight: function (id) {
    var flight = app.burningFlights.get(id);
    var flightView = new app.FlightView({model: flight});
    flightView.render();
  }
});