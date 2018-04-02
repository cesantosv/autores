import DS from 'ember-data';

export default DS.Model.extend({

    datePublished: DS.attr('date'),
    title: DS.attr('string'),
    author: DS.belongsTo('author'),
    chapters:DS.hasMany('chapter'),


});
