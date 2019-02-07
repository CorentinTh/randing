'use strict';

/**
 * Generate a random integer in the interval [0, max[
 * @param {number} max - Upper bound of the random number
 * @return {number} - Random integer in the interval [0, max[
 */
const random = (max) => Math.floor(Math.random() * max);

/**
 * Generate a random string (token)
 * @param {number} length - Length (in character) of the returned string
 * @param {object} [config] - Configuration for the token generation
 * @param {boolean} [config.lowercase=true] - Allow lowercase letters in the token
 * @param {boolean} [config.uppercase=true] - Allow uppercase letters in the token
 * @param {boolean} [config.figures=true] - Allow figures in the token
 * @param {boolean} [config.special=false] - Allow special characters in the token
 * @param {string} [config.alphabet=undefined] - A string of characters to generate the random token from
 */
const randing = (length = 50, config = {}) => {

    // Default config
    config = Object.assign({}, {
        lowercase: true,
        uppercase: true,
        figures: true,
        special: false,
        alphabet: undefined,
    }, config);


    let alphabet = '';
    let result = '';

    // Generating alphabet according to config
    if (config.alphabet) {
        alphabet = config.alphabet;
    } else {
        if (config.lowercase) alphabet += 'abcdefghijklmnopqrstuvwxyz';
        if (config.uppercase) alphabet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (config.figures) alphabet += '0123456789';
        if (config.special) alphabet += '+-*/={}[]|@!:.,?<>';
    }

    // Generating random string according to alphabet
    for (let i = 0; i < length; ++i) {
        result += alphabet.charAt(random(alphabet.length));
    }

    return result;
};

(function (root, name, factory) {

    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory;
    } else {
        root[name] = factory;
    }

}(this, 'randing', randing));
