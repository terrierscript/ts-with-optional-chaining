// @ts-nocheck

/**
 * 
 * @param {*} obj 
 * @returns {string | undefined}
 */
export const getFooBaz = (obj) => {
  // @ts-ignore
  return obj?.foo?.baz?
}