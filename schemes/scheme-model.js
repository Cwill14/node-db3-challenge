const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes') 
}

function findById() {
    return db() 
}

function findSteps() {
    return db() 
}

function add() {
    return db() 
}

function update() {
    return db() 
}

function remove() {
    return db() 
}

