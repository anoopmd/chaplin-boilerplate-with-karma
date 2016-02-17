require('helpers/view-helper');

module.exports = Chaplin.View.extend({
  optionNames: Chaplin.View.prototype.optionNames.concat(['template']),

  getTemplateFunction: function(){
    return this.template;
  },
  container: 'body',

  regions: {
    main: '#main-container'
  },

  autoRender: true,
  className: 'home-page',
  template: require('./home-page')
});
