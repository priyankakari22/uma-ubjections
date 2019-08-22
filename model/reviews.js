const { Model } = require('objection');

class reviews extends Model {
     
    static get tableName() {
        return 'reviews';
    }

    // static get idColumn() {
    //     return 'id';
    // }

    static get relationMappings() {
        // Importing models here is a one way to avoid require loops.
        const seriestabl = require('./series')
        const reviewerstabl = require('./reviewers')
      
        return {
          reviewlist: {
            relation: Model.ManyToManyRelation,
            modelClass: reviewerstabl,
            join: {
              from: 'reviews.id',

              through: {
                  from: 'reviews.series_id',
                  to: 'reviews.reviewer_id'
              },
              to: 'reviewers.id'
            }
          },
        }
    }

    // static relationMappings = {
    //   movies: {
    //     relation: Model.ManyToManyRelation,
    //     modelClass: Movie,
    //     join: {
    //       from: 'persons.id',
    //       through: {
    //         // persons_movies is the join table.
    //         from: 'persons_movies.personId',
    //         to: 'persons_movies.movieId'
    //       },
    //       to: 'movies.id'
    //     }
    //   }
    // }

    
  static get jsonSchema() {
    return {
        type: 'object',
        required: [],

        properties: {

           

            // Properties defined as objects or arrays are
            // automatically converted to JSON strings when
            // writing to database and back to objects and arrays
            // when reading from database. To override this
            // behaviour, you can override the
            // Model.jsonAttributes property.
        }
    };
}

 
}
module.exports=reviews;