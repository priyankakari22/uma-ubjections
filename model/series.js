const { Model } = require('objection');

class  series extends Model {
     
    static get tableName() {
        return 'series';
    }

    // static get idColumn() {
    //     return 'id';
    // }

    static get relationMappings() {
        // Importing models here is a one way to avoid require loops.
        const reviewstabl = require('./reviews')
        const reviewerstabl = require('./reviewers')
      
        return {
          reviewers: {
            relation: Model.ManyToManyRelation,
            modelClass: reviewerstabl,
            join: {
              from: 'series.id',

              through: {
                  from: 'reviews.series_id',
                  to: 'reviews.reviewer_id'
              },
              to: 'reviewers.id'
            }
          },
        }
    }
}
    module.exports = series