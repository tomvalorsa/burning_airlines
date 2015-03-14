var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url: function () {
    return '/airplanes';
  }
});