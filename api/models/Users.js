/**
 * Users.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type:"integer",
      autoIncrement: true
    },
    
    name: {
  		type: 'string'
    },

    lastName: {
      type: 'string'
    },
    
    email: {
      type: 'string',
      required: true
    },

    password: {
      type: 'string',
      required: true
    }
  }
};

