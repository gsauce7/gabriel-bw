const db = require('../data/db-config')

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove
}

function find() {
    return db('items').select(
        "id",
        'item_name',
        'description',
        'category',
        'price'
    );
}

function findBy(filter) {
    return db('items').where(filter);
}

function add(product) {
    return db('items')
        .insert(item, 'id')
        .then(ids => {
            const [id] = ids;
            return findById(id);
        });
}

function findById(id) {
    return db("items").where({ id }).first();
}

function update(id, changes) {
    return db('items')
        .where({ id })
        .update(changes);
}

function remove(id) {
    return db('items')
        .where('id', id)
        .del();
}