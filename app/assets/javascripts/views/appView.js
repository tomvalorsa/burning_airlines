var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function () {
    var appViewHTML = $('#appView-template').html(); 
    this.$el.html(appViewHTML);

    this.collection.each(function (flight) {
      var flightListView =  new app.FlightListView({model: flight});
      flightListView.render();
    });
  }
});