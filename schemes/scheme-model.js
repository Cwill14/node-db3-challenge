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

function findById(id) {
    return db('schemes').where({ id }); 
}

function findSteps(id) {
    /*
    select st.id, st.step_number, st.instructions, sc.scheme_name 
    from steps as st 
    join schemes as sc 
    on st.scheme_id = sc.id;
    */
    return db('steps as st')
        .innerJoin('schemes as sc', 'st.scheme_id', '=', 'sc.id')
        .select('st.id', 'st.step_number', 'st.instructions', 'sc.scheme_name')
        .where('sc.id', '=', id)
        .orderBy('st.step_number')
        // .where({ sc.id: id })       
}

function add(scheme) {
    return db('schemes').insert(scheme) 
}

function update(changes, id) {
    return db('schemes').where({ id }).update(changes);
}

function remove() {
    return db() 
}

