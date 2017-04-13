exports.seed = function(knex) {
  return knex('snacks').del()
    .then(() => {
      return knex('snacks').insert([{
        id: 1,
        name: 'Graham Cracker Bunnies',
        img_url: 'http://www.technobuffalo.com/wp-content/uploads/2014/04/fast-food.jpg',
        review_description: 'This is a great snack',
        rating: 5,
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 2,
        name: 'Chocolate',
        img_url: 'https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg',
        review_description: 'This is a great snack',
        rating: 5,
        created_at: new Date(),
        updated_at: new Date()

      },{
        id: 3,
        name: 'Fruit Snacks',
        img_url: 'http://trichilofoods.com/site/wp-content/uploads/2015/06/veggies.jpg',
        review_description: 'This is a great snack',
        rating: 5,
        created_at: new Date(),
        updated_at: new Date()
      }]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('snacks_id_seq', (SELECT MAX(id) FROM snacks));"
      );
    });
};
