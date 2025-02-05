/*
 * Problem: Two Sum
 *
 * Given an array of numbers and a target sum, return indices of two numbers that add up to the target.
 * Assume exactly one solution exists, and the same element cannot be used twice.
 *
 * Example:
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]  // Because nums[0] + nums[1] = 2 + 7 = 9
 *
 */

const twoSum = (arr: number[], sum: number): number[] => {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let num = sum - arr[i];
    if (map.has(num)) {
      return [map.get(num), i];
    }
    map.set(arr[i], i);
  }
  return [];
};

// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // [1, 2]
// console.log(twoSum([3, 3], 6)); // [0, 1]
// console.log(twoSum([3, 2, 3], 6)); // [0, 2]
/*
 * Problem: Reverse Words in a String
 *
 * Given a string, reverse the order of words.
 *
 * Example:
 * Input: "the sky is blue"
 * Output: "blue is sky the"
 *
 */
const reverseStr1 = (str: string): string => str.split(" ").reverse().join(" ");

const reverseStr2 = (str: string): string => {
  let reversed = "";
  const split = str.split(" ");

  for (let i = split.length - 1; i >= 0; i--) {
    if (i === 0) {
      reversed += split[i];
    } else {
      reversed += split[i] + " ";
    }
  }

  return reversed;
};

// console.log(reverseStr1("the sky is blue"));
// console.log(reverseStr2("the sky is blue"));
// console.log(reverseStr1("Reverse Words in a String"));
// console.log(reverseStr2("Reverse Words in a String"));
/*
 * Problem: Most Common Character
 *
 * Given a string, find the most frequently occurring character.
 *
 * Example:
 * Input: "banana"
 * Output: "a"
 *
 */

const mostCommonChar = (str: string): string => {
  const map = new Map();
  let mostCommon = "";
  let count = 0;

  for (let char of str) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else map.set(char, 1);
  }

  for (let [key, value] of map.entries()) {
    if (value > count) {
      count = value;
      mostCommon = key;
    }
  }

  return mostCommon;
};

// console.log(mostCommonChar("banana"));
// console.log(mostCommonChar("Problem: Most Common Character"));

/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */

const findDuplicates = (arr: number[]): number[] => {
  const map = new Map();
  let returnArr = [];

  for (let num of arr) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else map.set(num, 1);
  }

  for (let [key, value] of map.entries()) {
    if (value > 1) {
      returnArr.push(key);
    }
  }
  return returnArr;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Expected output: [2, 3] but because of map it returns [3, 2]
console.log(findDuplicates([1, 2, 3, 4, 5, 6, 1, 2])); // Expected output: [1, 2]
console.log(findDuplicates([10, 20, 30, 40, 50])); // Expected output: []
console.log(findDuplicates([5, 5, 5, 5, 5])); // Expected output: [5]
console.log(findDuplicates([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 10])); // Expected output: [4, 9]

/*
 * Problem: First Unique Character
 *
 * Given a string, return the index of the first unique character.
 *
 * Example:
 * Input: "leetcode"
 * Output: 0
 *
 */

const fistUniqueChar = (str: string): number => {
  const map = new Map();
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1] && !map.has(str[i])) {
      return i;
    } else map.set(str[i], 1);
  }
  return index;
};

// console.log(fistUniqueChar("leetcode"));
// console.log(fistUniqueChar("aabbc"));
// console.log(fistUniqueChar("aaaaaaazaa"));

/*
 * Problem: Find All Duplicates in an Array
 *
 * Given an array, return all duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 *
 */
