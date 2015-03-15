var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click': 'drawSeats'
  },
  render: function () {
    var flightViewTemplate = $('#flightView-template').html();
    var flightViewHTML = _.template(flightViewTemplate);
    // debugger;
    this.$el.html(flightViewHTML(this.model.toJSON()));


    // // Save the actual flight object to a var
    // var flightDetails = this.model.toJSON();

    // // Airplane ID in a var
    // var airplane = flightDetails.airplane_id;
  },
  drawSeats: function () {
    var seatViewTemplate = $('#seatView-template').html();
    var seatViewHTML = _.template(seatViewTemplate);

    var flight = this.model.toJSON();
    var planeID = flight.airplane_id
    var plane = app.burningAirplanes.get({id: planeID});
    var rows = plane.attributes.rows
    console.log(rows)
    var columns = plane.attributes.columns
    console.log(columns);

    _.each(rows, function(row) {
      _.each(row.columns, function(column){
        console.log('hello');
      });
    });
  }
});