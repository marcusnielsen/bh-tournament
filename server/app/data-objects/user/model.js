// TODO: Implement.
// var bookshelf = require('../../bookshelf');
// var Promise  = require('bluebird');
// var bcrypt = require('bcrypt');
// var bcryptGenSalt = Promise.promisify(bcrypt.genSalt);
// var bcryptHash = Promise.promisify(bcrypt.hash);
// var bcryptCompare  = Promise.promisify(bcrypt.compare);
//
// var states = ['active', 'locked', 'invited'];
//
// var model = Bookshelf.Model.extend({
//     tableName: 'users'
// });
//
// var schema =  {
//   id: {type: 'increments', nullable: false, primary: true},
//   uuid: {type: 'string', maxlength: 36, nullable: false, validations: {isUUID: true}},
//   name: {type: 'string', maxlength: 150, nullable: false},
//   password: {type: 'string', maxlength: 60, nullable: false},
//   email: {type: 'string', maxlength: 254, nullable: false, unique: true, validations: {isEmail: true}},
//   status: {type: 'string', maxlength: 150, nullable: false, defaultTo: 'active'},
//   language: {type: 'string', maxlength: 6, nullable: false, defaultTo: 'en_US'},
//   last_login: {type: 'dateTime', nullable: true},
//   created_at: {type: 'dateTime', nullable: false},
//   created_by: {type: 'integer', nullable: false},
//   updated_at: {type: 'dateTime', nullable: true},
//   updated_by: {type: 'integer', nullable: true}
// };
//
// module.exports = {
//   model: model,
//   schema: schema,
// };
