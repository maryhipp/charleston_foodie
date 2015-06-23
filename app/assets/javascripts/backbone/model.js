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
    return 'http://young-island-3325.herokuapp.com/?q=' + this.searchTerm;
  },

  sync : function(method, collection, options) {
    // By setting the dataType to "jsonp", jQuery creates a function
    // and adds it as a callback parameter to the request, e.g.:
    // [url]&callback=jQuery19104472605645155031_1373700330157&q=bananarama
    // If you want another name for the callback, also specify the
    // jsonpCallback option.
    // After this function is called (by the JSONP response), the script tag
    // is removed and the parse method is called, just as it would be
    // when AJAX was used.
    options.dataType = "jsonp";
    return Backbone.sync(method, collection, options);
  },

  search: function(query) {
    this.searchTerm = query;
    this.fetch();
  },

  parse: function(response) {
    return response.businesses;
  }
});

