import { describe, expect, it } from "vitest";
import {
  twoSum,
  reverseStr1,
  reverseStr2,
  mostCommonChar,
  findDuplicates,
  fistUniqueChar,
} from "../problems/easy";

describe("test twoSum function", () => {
  it("should return [0, 1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("should return [1, 2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });

  it("should return [0, 1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("should return [0, 2]", () => {
    expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
  });
});

describe("test reverseStr1 function", () => {
  it("should return blue is sky the", () => {
    expect(reverseStr1("the sky is blue")).toEqual("blue is sky the");
  });

  it("should return string a in words Reverse", () => {
    expect(reverseStr1("Reverse Words in a String")).toEqual(
      "String a in Words Reverse"
    );
  });
});

describe("test reverseStr2 function", () => {
  it("should return blue is sky the", () => {
    expect(reverseStr2("the sky is blue")).toEqual("blue is sky the");
  });

  it("should return string a in words Reverse", () => {
    expect(reverseStr2("Reverse Words in a String")).toEqual(
      "String a in Words Reverse"
    );
  });
});

describe("test mostCommonChar function", () => {
  it("should return a", () => {
    expect(mostCommonChar("banana")).toEqual("a");
  });

  it("should return o", () => {
    expect(mostCommonChar("Problem: Most Common Character")).toEqual("o");
  });
});

describe("test findDuplicates function", () => {
  it("should return [3, 2]", () => {
    expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([3, 2]);
  });

  it("should return [1, 2]", () => {
    expect(findDuplicates([1, 2, 3, 4, 5, 6, 1, 2])).toEqual([1, 2]);
  });

  it("should return []", () => {
    expect(findDuplicates([10, 20, 30, 40, 50])).toEqual([]);
  });

  it("should return [5]", () => {
    expect(findDuplicates([5, 5, 5, 5, 5])).toEqual([5]);
  });

  it("should return [1, 2]", () => {
    expect(findDuplicates([1, 2, 3, 4, 4, 5, 6, 7, 8, 9, 9, 10])).toEqual([
      4, 9,
    ]);
  });
});

// console.log(fistUniqueChar("leetcode"));
// console.log(fistUniqueChar("aabbc"));
// console.log(fistUniqueChar("aaaaaaazaa"));

describe("test fistUniqueChar function", () => {
  it("should return 0", () => {
    expect(fistUniqueChar("leetcode")).toEqual(0);
  });

  it("should return 4", () => {
    expect(fistUniqueChar("aabbc")).toEqual(4);
  });

  it("should return 7", () => {
    expect(fistUniqueChar("aaaaaaazaa")).toEqual(7);
  });
});
