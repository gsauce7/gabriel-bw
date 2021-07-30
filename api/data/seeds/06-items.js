
exports.seed = function (knex) {
    return knex('items').insert([

        {
            item_name: "Milk",
            image: "https://i.imgur.com/4iRINNJ.jpg",
            description: "Delicious milk from cows that roam free",
            suggested_price_id: 3,
            category_id: 5,
            user_id: 2
        },

        {
            item_name: "Honey",
            image: "https://i.imgur.com/L65zYph.jpg",
            description: "Raw Honey",
            suggested_price_id: 2,
            category_id: 12,
            user_id: 2
        },


    ])

};
