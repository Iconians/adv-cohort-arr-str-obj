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

export const mergeIntervals = (arr: number[][]): number[][] => {
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

export const groupAnagrams = (arr: string[]) => {
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

export const longestPalindrome = (str: string): string => {
  let transformedStr = "#" + str.split("").join("#") + "#";
  let length = transformedStr.length;
  let palindromeStr = new Array(length).fill(0);
  let center = 0;
  let right = 0;
  let maxLen = 0;
  let centerIndex = 0;

  for (let i = 0; i < length; i++) {
    let mirror = 2 * center - i;
    if (i < right) {
      palindromeStr[i] = Math.min(right - i, palindromeStr[mirror]);
    }
    while (
      i + palindromeStr[i] + 1 < length &&
      i - palindromeStr[i] - 1 >= 0 &&
      transformedStr[i + palindromeStr[i] + 1] ===
        transformedStr[i - palindromeStr[i] - 1]
    ) {
      palindromeStr[i]++;
    }

    if (i + palindromeStr[i] > right) {
      center = i;
      right = i + palindromeStr[i];
    }

    if (palindromeStr[i] > maxLen) {
      maxLen = palindromeStr[i];
      centerIndex = i;
    }
  }

  let start = (centerIndex - maxLen) / 2;
  return str.substring(start, start + maxLen);
};

// const isPalindrome = (str: string, left: number, right: number) => {
//   while (left >= 0 && right < str.length && str[left] === str[right]) {
//     left--;
//     right++;
//   }
//   return str.slice(left + 1, right);
// };

// export const longestPalindrome = (str: string): string => {
//   let longest = "";

//   for (let i = 0; i < str.length; i++) {
//     let odd = isPalindrome(str, i, i);
//     let even = isPalindrome(str, i, i + 1);
//     // play with this part to shorten it to add the odd to longest first then do the if statement
//     if (odd.length > longest.length) longest = odd;
//     if (even.length > longest.length) longest = even;
//   }

//   return longest;
// };

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

export const flattenNestedObject = (
  obj: { [key: string]: any },
  str = "",
  flatObj: { [key: string]: any } = {}
): object => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      flattenNestedObject(obj[key], `${str}${key}.`, flatObj);
    } else flatObj[`${str}${key}`] = obj[key];
  }

  return flatObj;
};

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

export const deepObjectComparison = (
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

export const maxSubArraySum = (arr: number[]): number => {
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
