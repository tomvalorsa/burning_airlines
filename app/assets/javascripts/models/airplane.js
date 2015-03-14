var app = app || {};

app.Airplane = Backbone.Model.extend({
  defaults: {
    name: '',
    rows: '',
    columns: ''
  }
});