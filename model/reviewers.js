const { Model } = require('objection');

class  reviewers extends Model {
     
    static get tableName() {
        return 'reviewers';
    }

    // static get idColumn() {
    //     return 'id';
    // }
}
    module.exports = reviewers