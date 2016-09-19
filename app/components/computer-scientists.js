import Ember from 'ember';

export default Ember.Component.extend({
  columns: [
    { name: 'First Name', sortCol: 'fName', sortOrder: 'asc' },
    { name: 'Last Name', sortCol: 'lName' }
  ],
  sortCol: null,
  sortOrder: null,
  sortBy: Ember.computed(
    'sortCol',
    'sortOrder',
    function() {
      return [ this.get('sortCol') + ':' + this.get('sortOrder') ];
    }
  ),
  sortedModel: Ember.computed.sort('model', 'sortBy'),

  actions: {
    resetSort(sortCol, sortOrder) {
      this.set('sortCol', sortCol);
      this.set('sortOrder', sortOrder);

      this.get('columns').setEach('sortOrder', null);
    }
  }
});
