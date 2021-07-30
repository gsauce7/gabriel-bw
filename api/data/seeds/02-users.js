const bcrypt = require("bcryptjs");

exports.seed = function (knex) {

    return knex('users').insert([
        {
            username: 'admin',
            password: bcrypt.hashSync("password"),
            first_name: 'admin',
            last_name: 'admin',
            email: 'admin@admin.com',
            isOwner: true,
            isAdmin: true
        },
        {
            username: 'ownertest',
            password: bcrypt.hashSync("password"),
            first_name: 'test',
            last_name: 'owner',
            email: 'test@owner.com',
            isOwner: true
        },
        {
            username: 'usertest',
            password: bcrypt.hashSync("password"),
            first_name: 'test',
            last_name: 'user',
            email: 'test@user.com'
        },
    ])

};
