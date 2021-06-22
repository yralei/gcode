'use strict';

/**
 * @param {object} obj
 * @return {object}
 */
function copyObj(obj) {
      if (null == obj || "object" != typeof obj) return obj;
    let copy = obj.constructor();
    for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}
