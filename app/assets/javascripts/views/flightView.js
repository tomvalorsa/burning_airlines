var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .column': 'reserveSeat'
  },
  render: function () {
    var flightViewTemplate = $('#flightView-template').html();
    var flightViewHTML = _.template(flightViewTemplate);
    // debugger;
    this.$el.html(flightViewHTML(this.model.toJSON()));

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

    for (i = 0; i < rows; i++) {
      // make div for the row, give id of row-i
      // might need to be i + 1
      var row = $('<div id="row-' + (i + 1) + '" class="row"></div>');

      for (j = 0; j < columns; j++) {
        // make div for each column, give id of column-j
        // append each to div with id=row-i
        var column = $('<div class="column unreserved" data-row="' + (i + 1) + '" data-column="' + (j + 1) + '" id="column-' + (j + 1) + '"></div>');
        $(row).append(column);
      }
      $('#main').append(row);
    }
    // give the rows and columns ids using the value of i so they are all unique
    // all need to be appended to seat-grid
    // columns need to be appended to relevant row

  },
  reserveSeat: function (e) {
    var target = e.target;
    // Toggles class of 'reserved'.
    target.classList.toggle('reserved')

    // Needs to send user_id and seat row and col back to the server.

    // Gets user ID.
    var $p = $('#current-user-id')[0].innerText;

    // Gets the seat row and column values.
    var seatRow = target.getAttribute('data-row');
    var seatColumn = target.getAttribute('data-column');

    // Saves the desired value for 'reserved' in the db into a variable.
    var isReserved;
    if (target.classList.contains('reserved')) {
      isReserved = true;
    } else {
      isReserved = false;
    }

   var newSeat = new app.Seat({
      row: seatRow,
      column: seatColumn,
      user_id: $p,
      reserved: isReserved
    });
   newSeat.save({patch:true});
  }
});
