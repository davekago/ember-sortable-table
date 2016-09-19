import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        fName: 'Patty',
        lName: 'Gilbert'
      },
      {
        fName: 'David',
        lName: 'Kago'
      },
      {
        fName:  'John',
        lName: 'Young'
      }
    ];
  }
});
