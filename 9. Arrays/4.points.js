'use strict';

/**
 * @param {number[]} points
 * @param {number} homeTeam
 * @param {number} awayTeam
 * @param {string} result
 * @return {number[]}
 */
function addPoints(points, homeTeam, awayTeam, result) {
    let copyPoint = points.slice();
    if (result === 'Win') {
        copyPoint[homeTeam - 1] += 3;
    } else if (result === 'Lose') {
        copyPoint[awayTeam - 1] += 3;
    } else {
        copyPoint[homeTeam - 1] += 1;
        copyPoint[awayTeam - 1] += 1;
    }
    return copyPoint;
}
const points = [44, 41, 40, 35, 30, 19, 10, 7];
const res = addPoints(points, 5, 2, 'Win');
console.log(res);
console.log(points);