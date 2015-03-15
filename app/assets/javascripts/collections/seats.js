var app = app || {};

app.Seats = Backbone.Collection.extend({
    url: function () {
    return '/seats'
  },
  model: app.Seat
});
