import page from 'page';

/**
 * @typedef {Object} PageContext
 * @property {typeof page} page
 * @property {UserSession} user
 * @property {(TemplateResult) => void} render
 * @property {any=} data
 */

/**
 * @typedef {Object} UserSession
 * @property {string} objectId
 * @property {string} username
 * @property {string} sessionToken
 */