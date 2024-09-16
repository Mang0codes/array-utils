// lib/arrayUtils.js

/**
 * Splits an array into chunks of a specified size.
 * @param {Array} array - The array to chunk.
 * @param {number} size - The size of each chunk.
 * @returns {Array} - The array of chunks.
 */
function chunk(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }
  
  /**
   * Flattens a nested array.
   * @param {Array} array - The array to flatten.
   * @returns {Array} - The flattened array.
   */
  function flatten(array) {
    return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
  }
  
  /**
   * Removes duplicate values from an array.
   * @param {Array} array - The array to remove duplicates from.
   * @returns {Array} - The array with unique values.
   */
  function unique(array) {
    return [...new Set(array)];
  }
  
  /**
   * Shuffles an array in place.
   * @param {Array} array - The array to shuffle.
   * @returns {Array} - The shuffled array.
   */
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // Export the utilities as a module
  module.exports = {
    chunk,
    flatten,
    unique,
    shuffle
  };
  