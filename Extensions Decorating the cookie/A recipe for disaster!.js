let adjective = prompt('Adjective:');
let measurement = prompt('Measurement:');
let verb = prompt('Verb:');
let utensil = prompt('Utensil:');
let textElementio = document.querySelector("pre");

textElementio.textContent = `${adjective} ANZAC Biscuit Recipe

Ingredients:
 * 1 cup oats
 * 3/4 cup flaked coconut
 * 1 cup flour
 * 1 ${measurement} baking soda
 * 1 cup brown sugar
 * 1/2 cup butter
 * 1 tablespoon golden syrup

Steps:
  1. Mix oats, flour, sugar and coconut together.

  2. In a small saucepan over low heat, ${verb} the syrup and butter together. Mix the baking soda and the boiling water and add to the melted butter and syrup.

  3. Add butter mixture to the dry ingredients. Roll into balls, place on baking paper and squash slightly with a ${utensil}.

  4. Bake at 175 degrees Celcius for 18 to 20 minutes.`