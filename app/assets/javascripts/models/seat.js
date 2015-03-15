var app = app || {};

app.Seat = Backbone.Model.extend({
  defaults: {
    flightID: '',
    row: '',
    column: '',
    reserved: '',
    userID: ''
  }
});