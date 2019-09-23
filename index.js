/**
 * https://leetcode.com/problems/defanging-an-ip-address/
 */
const defangingIpAddress = ip => {
  return ip.replace(/[.*+?^${}()|[\]\\]/g, '[.]');
};

/**
 * https://leetcode.com/problems/jewels-and-stones/
 */
const numJewelsInStones = (J, S) => {
  let count = 0;
  J.split('').forEach(j => {
    S.split('').forEach(s => {
      if (j === s) count++;
    });
  });
  return count;
};

/**
 * https://leetcode.com/problems/range-sum-of-bst/
 */
const rangeSumBST = (root, L, R) => {
  return root.filter(i => i >= L && i <= R).reduce((acc, next) => acc + next);
};

module.exports = { defangingIpAddress, numJewelsInStones, rangeSumBST };
