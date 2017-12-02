import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('picture', {
      orderBy: 'title',
    });
  },
});
