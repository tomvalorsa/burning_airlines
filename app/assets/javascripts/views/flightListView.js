var app = app || {};

app.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {}, // Need to add events
  render: function() {
     var flightListViewTemplate = $('#flightListView-template').html();
     var flightListViewHTML = _.template(flightListViewTemplate);
     debugger
     this.$el.html(flightListViewHTML(this.model.toJSON()));
     
     $('#flights').append(this.$el);
  },
  showFlight: function () {
    app.appRouter.navigate('/flights/' + this.model.get('id'), true);
  }
});