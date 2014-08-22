$(function() {
  var restaurants = new RestaurantsCollection();
  var listView = new ListView({collection: restaurants});
  var formView = new FormView({collection: restaurants});
  restaurants.fetch();
  console.log('main running');
})
