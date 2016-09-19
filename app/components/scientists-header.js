import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'th',
  classNameBindings: [ 'sortOrderClass' ],
  sortOrder: Ember.computed.alias('column.sortOrder'),
  sortOrderClass: Ember.computed(
    'sortOrder',
    function() {
      let sortOrder = this.get('sortOrder');
      return Ember.isPresent(sortOrder) ? sortOrder : '';
    }
  ),

  actions: {
    toggleSortOrder() {
      let sortOrder = this.get('sortOrder'),
        newSortOrder = Ember.isEqual(sortOrder, 'asc') ? 'desc' : 'asc';

      this.sendAction('action', this.get('column.sortCol'), newSortOrder);

      this.set('sortOrder', newSortOrder);
    }
  }
});
