/**
 * Storage layer of Join.
 *
 * The app used to save all data on the Developer Akademie remote storage server
 * (remote-storage.developerakademie.org). That server is no longer usable: its TLS
 * certificate expired in May 2026, so every request from the browser fails.
 *
 * All data now lives in the browser's localStorage. Both functions keep their
 * async signature, so the code that calls them did not have to change.
 */

// Prefix keeps Join's keys apart from other apps on the same domain (e.g. GitHub Pages).
const STORAGE_PREFIX = 'join:';


/**
 * Saves a key-value pair in localStorage
 *
 * @param {string} key - The key for the item
 * @param {string} value - The value to be stored (already JSON-stringified by the caller)
 * @returns {Promise<void>} A promise that resolves when the item is stored
 */
async function setItem(key, value) {
  localStorage.setItem(STORAGE_PREFIX + key, value);
}


/**
 * Loads a value from localStorage based on the provided key
 *
 * @param {string} key - The key to retrieve the value
 * @returns {Promise<string>} A promise that resolves with the stored JSON string,
 *   or an empty list ("[]") if nothing has been saved under this key yet
 */
async function getItem(key) {
  const value = localStorage.getItem(STORAGE_PREFIX + key);
  if (value !== null) {
    return value;
  }
  return '[]';
}
