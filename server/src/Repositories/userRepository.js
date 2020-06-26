const {db} = require('../../models/index');

class UserRepository {
    constructor() {
        this.user = db.user;
    }
    getAll() {
        return this.user.findAll();
    }
    getBy(params) {
        return this.user.findOne({where: {...params}});
    }
    create(params) {
        return this.user.create(params);
    }
    update(id, params) {
        return this.user.update({where: {id}}, {...params});
    }
    delete(id, params) {
        return this.user.destroy({where: {id}});
    }
}

module.exports = new UserRepository();