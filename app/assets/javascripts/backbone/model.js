var Restaurant = Backbone.Model.extend({
  defaults: {
    name: '',
    rating_img_url_large: '',
    image_url: '',
    url: '',
    neighborhoods: ''
  }
});

var RestaurantsCollection = Backbone.Collection.extend({
  model: Restaurant,

  searchTerm: '',

  url: function() {
    return 'https://young-island-3325.herokuapp.com/?q=' + this.searchTerm;
  },

  search: function(query) {
    this.searchTerm = query;
    this.fetch();
  },

  parse: function(response) {
    return response.businesses;
  }
});

