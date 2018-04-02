import DS from 'ember-data';

export default DS.Model.extend({
   // id: DS.attr('string'),
    name: DS.attr('string'),
    dateOfBirth: DS.attr('date'),
    dateOfDeath: DS.attr('date'),
    books: DS.hasMany('book'),


});
