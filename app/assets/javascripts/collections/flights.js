var app = app || {};

app.Flights = Backbone.Collection.extend({
  url: function () {
    return '/airplanes/' + 'burning_airlines_sucks' + '/flights';
  }
});

// Hardcoded aeroplane ID --> might need to update this later
// /airplanes/:airplane_id/flights/:id(.:format)