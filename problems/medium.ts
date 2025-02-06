// this one threw me,I had to ask gpt to explain the prompt without giving me code snippets and took a couple minutes
// before I understood what I needed to do
/*
 * Problem: Merge Intervals
 *
 * Given an array of intervals, merge overlapping intervals.
 *
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 *
 */

const mergeIntervals = (arr: number[][]): number[][] => {
  arr.sort((a, b) => a[0] - b[0]);
  let newArr: number[][] = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let subArr = arr[i];
    let merged = newArr[newArr.length - 1];

    if (subArr[0] <= merged[1]) {
      merged[1] = Math.max(merged[1], subArr[1]);
    } else {
      newArr.push(subArr);
    }
  }

  return newArr;
};

// console.log(
//   mergeIntervals([
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [15, 18],
//   ])
// ); // [[1,6],[8,10],[15,18]]
// console.log(
//   mergeIntervals([
//     [1, 3],
//     [15, 18],
//     [2, 6],
//     [8, 10],
//   ])
// ); // [[1,6],[8,10],[15,18]]

/*
 * Problem: Group Anagrams
 *
 * Given an array of words, group anagrams together.
 *
 * Example:
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 */

const groupAnagrams = (arr: string[]) => {
  const map = new Map();

  for (let str of arr) {
    const sort = str.split("").sort().join("");
    if (map.has(sort)) {
      map.get(sort).push(str);
    } else {
      map.set(sort, [str]);
    }
  }
  return Array.from(map.values());
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// output
/*
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
*/

/*
 * Problem: Longest Palindromic Substring
 *
 * Find the longest palindromic substring in a given string.
 *
 * Example:
 * Input: "babad"
 * Output: "bab" (or "aba")
 *
 */

// I modified a function I did for a different palindrome algo but palindrome problems throw me a little as I have to look up what
// a palindrome is then figure out how to build it with code and I don't particular like this code I wrote for time and space
// complexity

const isPalindrome = (str: string, left: number, right: number) => {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.slice(left + 1, right);
};

const longestPalindrome = (str: string): string => {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let odd = isPalindrome(str, i, i);
    let even = isPalindrome(str, i, i + 1);
    if (odd.length > longest.length) longest = odd;
    if (even.length > longest.length) longest = even;
  }

  return longest;
};

// console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
// console.log(longestPalindrome("cbbd")); // Output: "bb"
// console.log(longestPalindrome("a")); // Output: "a"
// console.log(longestPalindrome("ac")); // Output: "a" or "c"
// console.log(longestPalindrome("racecar")); // Output: "racecar"
// console.log(longestPalindrome("")); // Output: ""
// console.log(longestPalindrome("abacdfgdcaba")); // Output: "aba" or "aca"

/*
 * Problem: Flatten Nested Object
 *
 * Convert a deeply nested object into a flat key-value map.
 *
 * Example:
 * Input: { a: { b: { c: 1 } }, d: 2 }
 * Output: { "a.b.c": 1, d: 2 }
 *
 * Hint: Use recursion + a helper function.
 */

const flattenNestedObject = (
  obj: { [key: string]: any },
  str = "",
  flatObj: { [key: string]: any } = {}
): object => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      flattenNestedObject(obj[key], `${str}${key}.`, flatObj);
    } else flatObj[`${str}${key}`] = obj[key];
  }

  return flatObj;
};

// console.log(flattenNestedObject({ a: { b: { c: 1 } }, d: 2 }));

/*
 * Problem: Deep Object Comparison
 *
 * Write a function to deeply compare two objects.
 *
 * Example:
 * Input: obj1 = { a: { b: 1 } }, obj2 = { a: { b: 1 } }
 * Output: true
 *
 * Hint: Use recursion and check nested properties.
 */

const deepObjectComparison = (
  obj1: Record<string, unknown>,
  obj2: Record<string, unknown>
): boolean => {
  if (obj1 === obj2) return true;
  if (typeof obj1 !== "object" || typeof obj2 !== "object") return false;

  const map1 = new Map(Object.entries(obj1));
  const map2 = new Map(Object.entries(obj2));

  if (map1.size !== map2.size) return false;

  for (let [key, value] of map1) {
    if (
      !map2.has(key) ||
      !deepObjectComparison(
        value as Record<string, unknown>,
        map2.get(key) as Record<string, unknown>
      )
    ) {
      return false;
    }
  }
  return true;
};

// console.log(deepObjectComparison({ a: { b: 1 } }, { a: { b: 1 } }));
// console.log(deepObjectComparison({ a: { b: 1 } }, { a: { b: 2 } }));
// console.log(deepObjectComparison({ a: { b: 12 } }, { a: { b: { c: 12 } } }));
// console.log(deepObjectComparison({ one: { two: 5 } }, { one: { two: 5 } }));

/*
 * Problem: Maximum Subarray Sum
 *
 * Find the contiguous subarray with the largest sum.
 *
 * Example:
 * Input: [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6  // Subarray: [4,-1,2,1]
 *
 */

const maxSubArraySum = (arr: number[]): number => {
  let maxGlobal = arr[0];
  let maxCurrent = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
    if (maxCurrent > maxGlobal) {
      maxGlobal = maxCurrent;
    }
  }

  return maxGlobal;
};

// console.log(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Output: 6
// console.log(maxSubArraySum([1, 2, 3, 4, 5])); // Output: 15
// console.log(maxSubArraySum([-1, -2, -3, -4])); // Output: -1
// console.log(maxSubArraySum([5, 4, -1, 7, 8])); // Output: 23
// console.log(maxSubArraySum([0, -3, 1, 1, -1, 2, 1, -5, 4])); // Output: 4
// console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: 7
// console.log(maxSubArraySum([3, -2, 5, -1])); // Output: 6
// console.log(maxSubArraySum([1])); // Output: 1
// console.log(maxSubArraySum([-1])); // Output: -1
// console.log(maxSubArraySum([0, 0, 0, 0])); // Output: 0
