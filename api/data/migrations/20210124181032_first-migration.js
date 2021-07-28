exports.up = async (knex) => {
  await knex.schema

    // USERS TABLE
    .createTable('users', table => {
      table.increments() // id is auto generated
      table.string('username', 200).notNullable().unique()
      table.string('password', 200).notNullable()
      table.string('first_name', 128)
      table.string('last_name', 128)
      table.string('email', 200).notNullable().unique()
      table.boolean('isOwner')
      table.timestamps(false, true)
    })


    // LOCATIONS TABLE
    .createTable('locations', table => {
      table.increments()
      table.string('location_name').notNullable().unique()
    })


    // ITEMS TABLE
    .createTable('items', table => {
      table.increments()
      table.string('item_name', 128).notNullable()
      table.binary('image', 255)
      table.string('description', 255)
      table.integer('price').notNullable()
      table.integer('suggested_price')
      table.string('category').notNullable().unique()
    })

    // ITEM LISTING TABLE
    .createTable('item_listing', table => {
      table.increments('item_listing_id')
      table.integer('user_id') //FK
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('item_id') //FK
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('items')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
      table.integer('location_id') //FK
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('locations')
        .onDelete('RESTRICT')
        .onUpdate('RESTRICT')
    })

}


exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('item_listing')
    .dropTableIfExists('items')
    .dropTableIfExists('locations')
    .dropTableIfExists('users')
}
