var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: function () {
    return '/airplanes/' + this.airplaneID + '/flights';
  },
  model: app.Flight,
  initialize: function (options) {

    this.airplaneID = options.airplane_id;
    this.on('add', function (flight) {
      var flightView = new app.FlightView({model: flight});
      flightView.render();
    });
  }
});

// Hardcoded aeroplane ID --> might need to update this later
// /airplanes/:airplane_id/flights/:id(.:format)