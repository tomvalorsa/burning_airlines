var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: 'tr',
  events: {
    'click': 'showFlight'
  }, // Need to add events
  render: function() {
     var flightListViewTemplate = $('#flightListView-template').html();
     var flightListViewHTML = _.template(flightListViewTemplate);

     this.$el.html(flightListViewHTML(this.model.toJSON()));

     $('#flights').append(this.$el);
  },
  showFlight: function (event) {
    event.preventDefault();
    app.appRouter.navigate('/flights/' + this.model.get('id'), true);
    var seats = _.each()
  }
});