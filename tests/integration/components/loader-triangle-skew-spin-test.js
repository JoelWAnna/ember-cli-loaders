import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loader-triangle-skew-spin', 'Integration | Component | loader triangle skew spin', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{loader-triangle-skew-spin}}`);

  assert.equal(this.$().text().trim(), '');
});
