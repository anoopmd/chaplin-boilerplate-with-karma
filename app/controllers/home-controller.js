var HomePageView = require('views/home-page-view');

module.exports = Chaplin.Controller.extend({
  index: function() {
    this.view = new HomePageView({region: 'main'});
  }
});