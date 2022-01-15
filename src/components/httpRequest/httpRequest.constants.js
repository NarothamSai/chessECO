"use strict";
/**
 * @typedef {String} HttpMethods
 */

/**
 *
 * @enum {HttpMethods}
 */
const httpMethod = {
  GET: "get",
  POST: "post",
  PUT: "put",
};

const requestTimeoutMS = 30000;

module.exports = {
  httpMethod,
  requestTimeoutMS,
};
