
exports.seed = function (knex) {
    return knex('items').insert([

        {
            item_name: "Milk",
            image: "https://i.imgur.com/4iRINNJ.jpg",
            description: "Delicious milk from cows that roam free",
            price: 6,
            suggested_price: 8,
            category: "dairy"
        },

        {
            item_name: "Honey",
            image: "https://i.imgur.com/L65zYph.jpg",
            description: "Raw Honey",
            price: 12,
            suggested_price: 12,
            category: "other animal products"
        },


    ])

};
