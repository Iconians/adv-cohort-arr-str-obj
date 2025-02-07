import { describe, expect, it } from "vitest";
import {
  mergeIntervals,
  groupAnagrams,
  longestPalindrome,
  flattenNestedObject,
  deepObjectComparison,
  maxSubArraySum,
} from "../problems/medium";

describe("test mergeIntervals", () => {
  it("should return [[1,6],[8,10],[15,18]]", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it("should return [[1,6],[8,10],[15,18]]", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [15, 18],
        [2, 6],
        [8, 10],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it("should return [[1,5]]", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([[1, 5]]);
  });

  it("should return [[1,4],[5,6]]", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [5, 6],
      ])
    ).toEqual([
      [1, 4],
      [5, 6],
    ]);
  });
});

describe("test groupAnagrams function", () => {
  it("should return [['eat','tea','ate'],['tan','nat'],['bat']]", () => {
    expect(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual([
      ["eat", "tea", "ate"],
      ["tan", "nat"],
      ["bat"],
    ]);
  });

  it("should return [['']]", () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });

  it("should return [['a']]", () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });

  it("should return [['ab','ba'],['abc','cab'],['xyz']]", () => {
    expect(groupAnagrams(["ab", "ba", "abc", "cab", "xyz"])).toEqual([
      ["ab", "ba"],
      ["abc", "cab"],
      ["xyz"],
    ]);
  });
});

describe("test longestPalindrome function", () => {
  it("should return babad", () => {
    expect(longestPalindrome("babad")).toBeOneOf(["bab", "aba"]);
  });

  it("should return cbbd", () => {
    expect(longestPalindrome("cbbd")).toEqual("bb");
  });

  it("should return a", () => {
    expect(longestPalindrome("a")).toEqual("a");
  });

  it("should return ac", () => {
    expect(longestPalindrome("ac")).toBeOneOf(["a", "c"]);
  });

  it("should return racecar", () => {
    expect(longestPalindrome("racecar")).toEqual("racecar");
  });

  it("should return aba or aca", () => {
    expect(longestPalindrome("abacdfgdcaba")).toBeOneOf(["aba", "aca"]);
  });
});

describe("test flattenNestedObject function", () => {
  it("should flatten a nested object with one level of nesting", () => {
    expect(flattenNestedObject({ a: { b: 1 }, c: 2 })).toEqual({
      "a.b": 1,
      c: 2,
    });
  });

  it("should flatten a nested object with multiple levels of nesting", () => {
    expect(flattenNestedObject({ a: { b: { c: 1 } }, d: 2 })).toEqual({
      "a.b.c": 1,
      d: 2,
    });
  });

  it("should handle an empty object", () => {
    expect(flattenNestedObject({})).toEqual({});
  });

  it("should handle a non-nested object", () => {
    expect(flattenNestedObject({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 });
  });

  it("should handle an object with arrays", () => {
    expect(flattenNestedObject({ a: { b: [1, 2, 3] }, c: 4 })).toEqual({
      "a.b": [1, 2, 3],
      c: 4,
    });
  });
});

describe("test deepObjectComparison function", () => {
  it("should return true", () => {
    expect(deepObjectComparison({ a: { b: 1 } }, { a: { b: 1 } })).toEqual(
      true
    );
  });

  it("should return false", () => {
    expect(deepObjectComparison({ a: { b: 1 } }, { a: { b: 2 } })).toEqual(
      false
    );
  });

  it("should return false", () => {
    expect(
      deepObjectComparison({ a: { b: 12 } }, { a: { b: { c: 12 } } })
    ).toEqual(false);
  });

  it("should return true", () => {
    expect(
      deepObjectComparison({ one: { two: 5 } }, { one: { two: 5 } })
    ).toEqual(true);
  });
});

describe("test maxSubArraySum", () => {
  it("should return 6 for input [-2, 1, -3, 4, -1, 2, 1, -5, 4]", () => {
    expect(maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
  });

  it("should return 15 for input [1, 2, 3, 4, 5]", () => {
    expect(maxSubArraySum([1, 2, 3, 4, 5])).toEqual(15);
  });

  it("should return -1 for input [-1, -2, -3, -4]", () => {
    expect(maxSubArraySum([-1, -2, -3, -4])).toEqual(-1);
  });

  it("should return 23 for input [5, 4, -1, 7, 8]", () => {
    expect(maxSubArraySum([5, 4, -1, 7, 8])).toEqual(23);
  });

  it("should return 4 for input [0, -3, 1, 1, -1, 2, 1, -5, 4]", () => {
    expect(maxSubArraySum([0, -3, 1, 1, -1, 2, 1, -5, 4])).toEqual(4);
  });

  it("should return 7 for input [-2, -3, 4, -1, -2, 1, 5, -3]", () => {
    expect(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
  });

  it("should return 6 for input [3, -2, 5, -1]", () => {
    expect(maxSubArraySum([3, -2, 5, -1])).toEqual(6);
  });

  it("should return 1 for input [1]", () => {
    expect(maxSubArraySum([1])).toEqual(1);
  });

  it("should return -1 for input [-1]", () => {
    expect(maxSubArraySum([-1])).toEqual(-1);
  });

  it("should return 0 for input [0, 0, 0, 0]", () => {
    expect(maxSubArraySum([0, 0, 0, 0])).toEqual(0);
  });
});
