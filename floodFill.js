// Time Complexity : O(m*n) where m*n is matrix length
// Space Complexity : O(m*n) where m*n is matrix length
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */

//DFS Solution
let color;
let dirs;
var floodFill = function (image, sr, sc, newColor) {
  if (image === null || image[sr][sc] === newColor) return image;
  let m = image.length;
  let n = image[0].length;
  dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  color = image[sr][sc];
  dfs(image, sr, sc, newColor, m, n);
  return image;
};

var dfs = function (image, i, j, newColor, m, n) {
  // base case
  if (i < 0 || i === m || j < 0 || j === n || image[i][j] !== color) return;
  // logic
  image[i][j] = newColor;
  for (dir of dirs) {
    let r = i + dir[0];
    let c = j + dir[1];
    dfs(image, r, c, newColor, m, n);
  }
};

//BFS Solution
// let color;
// let dirs;
// var floodFill = function(image, sr, sc, newColor) {
//     if(image === null || image[sr][sc] === newColor) return image;
//     let m = image.length;
//     let n = image[0].length;
//     queue = [];
//     dirs = [[0,1],[0,-1],[1,0],[-1,0]];
//     color = image[sr][sc];
//     queue.push([sr,sc]);
//     image[sr][sc] = newColor;
//     console.log(queue);
//     while(queue.length !== 0) {
//         let index = queue.pop();
//         let cr = index[0];
//         let cc = index[1];
//         for(dir of dirs) {
//             let nr = cr + dir[0];
//             let nc = cc + dir[1];
//             if(nr >= 0 && nr < m && nc >= 0 && nc < n && image[nr][nc] === color) {
//                 queue.push([nr,nc]);
//                 image[nr][nc] = newColor;
//             }
//         }
//     }
//     return image;
// }
