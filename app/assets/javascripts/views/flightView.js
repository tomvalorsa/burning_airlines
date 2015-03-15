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

    var seatViewTemplate = $('#seatView-template').html();
    var seatViewHTML = _.template(seatViewTemplate);

    var flight = this.model.toJSON();
    var planeID = flight.airplane_id
    // Object passed in to 'get' function makes sure we're finding the right one.
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

    var i, j;

    for (i = 0; i < rows; i++) {
      // make div for the row, give id of row-i
      // might need to be i + 1
      var row = $('<div class="row" id="row-' + (i + 1) + '"></div>');

      for (j = 0; j < columns; j++) {
        // make div for each column, give id of column-j
        // append each to div with id=row-i
        var column = $('<div class="column" id="column-' + (j + 1) + '"></div>');
        var rowID = '#row-' + (i.toString());
        console.log('i', i);
        console.log('j', j);
        console.log('row ID', rowID);
        console.log(column);
        $(rowID).append(column);
      }

      $('#main').append(row);
    }


    // give the rows and columns ids using the value of i so they are all unique
    // all need to be appended to seat-grid
    // columns need to be appended to relevant row

  }
});