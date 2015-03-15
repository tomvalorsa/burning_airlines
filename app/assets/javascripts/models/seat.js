var app = app || {};

app.Seat = Backbone.Model.extend({

  // if the seat has this row and this column then use that seat's id
  url: '/seats',
  defaults: {
    flightID: '',
    row: '',
    column: '',
    reserved: '',
    userID: ''
  }
});