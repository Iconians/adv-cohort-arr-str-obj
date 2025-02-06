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

export const twoSum = (arr: number[], sum: number): number[] => {
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
export const reverseStr1 = (str: string): string =>
  str.split(" ").reverse().join(" ");

export const reverseStr2 = (str: string): string => {
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

export const mostCommonChar = (str: string): string => {
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

/*
 * Problem: Find Duplicates
 *
 * Given an array, return all the duplicate elements.
 *
 * Example:
 * Input: [4,3,2,7,8,2,3,1]
 * Output: [2,3]
 * because of map it returns [3, 2]
 */

export const findDuplicates = (arr: number[]): number[] => {
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

export const fistUniqueChar = (str: string): number => {
  const map = new Map();
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[i + 1] && !map.has(str[i])) {
      return i;
    } else map.set(str[i], 1);
  }
  return index;
};

// looks like the same problem as the one above
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
