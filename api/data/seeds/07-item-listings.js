exports.seed = function (knex) {

    return knex('item_listings').insert([
        { item_id: 1, user_id: 1, location_id: 1, item_listing_description: 'description', quantity_available: 10, price: 22.22, pricing_unit: 'each' },
        { item_id: 2, user_id: 2, location_id: 2, item_listing_description: 'description', quantity_available: 10, price: 33.12, pricing_unit: 'bag of 5' }


    ]);

};

