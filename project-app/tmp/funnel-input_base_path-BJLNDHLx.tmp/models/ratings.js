import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  votes: DS.attr('number'),
  idNum: DS.attr('number')
});
