/*
 * Marketplace specific configuration.
 */

/*For the categories, the client wants to to the same thing that is done currently with amenities.
 He wants to have a checkbox of categories so products can be put into, and filtered by more than one category
 */

export const amenities = [
  {
    key: 'towels',
    label: 'Towels',
  },
  {
    key: 'bathroom',
    label: 'Bathroom',
  },
  {
    key: 'swimming_pool',
    label: 'Swimming pool',
  },
  {
    key: 'own_drinks',
    label: 'Own drinks allowed',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];

export const categories = [
  { key: 'household', label: 'Household' },
  { key: 'office', label: 'Office' },
  { key: 'diy/construction', label: 'DIY/Construction' },
  { key: 'sports/recreation', label: 'Sports/Recreation' },
  { key: 'specialEvent', label: 'Special Event' },
  { key: 'miscellaneous', label: 'Miscellaneous' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 1000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

//Testing data extention
export const capacityOptions = [
  { key: '1to3', label: '1 to 3' },
  { key: '4to6', label: '4 to 6' },
  { key: '7to9', label: '7 to 9' },
  { key: '10plus', label: '10 plus' },
];
