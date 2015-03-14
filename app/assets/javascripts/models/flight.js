var app = app || {};

app.Flight = Backbone.Model.extend({
  // urlRoot: function () {
  //   return '/airplanes/' + this.get('airplane_id') + '/flights';
  // },
  defaults: {
    flightName: '',
    origin: '',
    destination: '',
    flightDate: '',
    airplaneID: ''
  }
});