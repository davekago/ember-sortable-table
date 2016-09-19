import Ember from 'ember';

export function scientistAttr(params/*, hash*/) {
  let scientist = params[0] || {},
    column = params[1] || {};
  return scientist[column.sortCol || ''];
}

export default Ember.Helper.helper(scientistAttr);
