import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('computer-scientists', 'Integration | Component | computer scientists', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{computer-scientists}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#computer-scientists}}
      template block text
    {{/computer-scientists}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
