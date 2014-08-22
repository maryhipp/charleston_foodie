var ListView = Backbone.View.extend({
  el: "#list",

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    // this.render();
  },

  render: function(restaurant) {
    console.log('list render');
    var html = '';
    this.collection.each(function(restaurant) {
      html += '<li><img src=' + restaurant.get('image_url') + ' class="restaurant-image"><div class="restaurant-info"><a href=' + restaurant.get('url') + ' target=_blank>' + restaurant.get('name') + ' </a><br><img src=' + restaurant.get('rating_img_url_small') + '></div></li>';
    })
    this.$el.html(html);
  }
})

var FormView = Backbone.View.extend({
  el: 'form',

  events: {
    'submit' : 'search'
  },

  search: function(evt) {
    evt.preventDefault();
    var query = this.$('[name ="search"]').val();
    console.log(query);
    this.collection.search(query);
  }
});
