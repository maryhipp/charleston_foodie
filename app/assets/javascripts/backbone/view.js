var ListView = Backbone.View.extend({
  el: "#list",

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
    // this.render();
  },

  render: function(restaurant) {
    var html = '';
    this.collection.each(function(restaurant) {
      html += '<div class="result"><a href=' + restaurant.get('url') + ' target=_blank><img src=' + restaurant.get('image_url') + ' class="restaurant-image"></a><div class="restaurant-info"><a href=' + restaurant.get('url') + ' target=_blank>' + restaurant.get('name') + ' </a><br><img src=' + restaurant.get('rating_img_url_small') + '></div></div>';
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
