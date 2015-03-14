var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {}, // Add events later
  render: function () {
    var flightViewTemplate = $('#flightView-template').html();
    var flightViewHTML = _.template(flightViewTemplate);

    this.$el.html(flightViewHTML(this.model.toJSON()));
  }
});