"use strict";

const { default: axios } = require("axios");
const { requestTimeoutMS } = require("./httpRequest.constants");

/**
 *
 * @typedef {import("./httpRequest.constants").HttpMethods} HttpMethod
 */

/**
 *
 * @typedef Response
 * @type {Object}
 * @property {Number} statusCode
 * @property {} body
 * @property {object} headers
 * @property {object} config
 */

/**
 *
 * @typedef {Object} RequestConfig
 * @property {HttpMethod} method
 * @property {String} url
 * @property {object} [queryParams]
 * @property {object} [headers]
 * @property {Number} [timeout] Response timeout in ms
 */

/**
 *
 *
 * @param {RequestConfig} requestConfig
 * @returns {Promise<Response>}
 * @throws Error
 */
async function httpRequest({
  method,
  url,
  queryParams,
  headers,
  timeout = requestTimeoutMS,
}) {
  return axios(url, {
    method: method,
    headers: headers,
    params: queryParams,
    timeout: timeout,
  }).then((response) => {
    return {
      status: response.status,
      body: response.data,
      headers: response.headers,
      config: response.config,
    };
  });
}

module.exports = httpRequest;
