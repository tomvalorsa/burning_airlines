var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: 'tr',
  events: {
    'click': 'showFlight'
  },
  render: function() {
     var flightListViewTemplate = $('#flightListView-template').html();
     var flightListViewHTML = _.template(flightListViewTemplate);

     this.$el.html(flightListViewHTML(this.model.toJSON()));

     $('#flights').append(this.$el);
  },
  showFlight: function () {
    app.appRouter.navigate('/flights/' + this.model.get('id'), true);
  }
});