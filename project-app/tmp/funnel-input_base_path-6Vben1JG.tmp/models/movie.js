import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  rating: DS.attr('number'),
  created: DS.attr('string', {
    defaultValue: function(){
      return new Date();
    }
  })
});
