'use strict';

function getById(id) {
  // TODO: Implement.

  return {
    name: 'guest',
    id: id,
  };
}

function create(userObject) {
  // TODO: Implement.
  return userObject;
}

function login(email, password) {
  // TODO: Implement.
  if (!email) {
    return new Error('Missing E-mail');
  }
  if (!password) {
    return new Error('Missing password');
  }

  return true;
}

function logout() {
  // TODO: Implement.

  return true;
}

var repository = {
  getById: getById,
  create: create,
  login: login,
  logout: logout,
};

module.exports = repository;
