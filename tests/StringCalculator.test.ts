import { StringCalculator } from "../src/StringCalculator";

describe("StringCalculator", () => {
  let calc: StringCalculator;

  beforeEach(() => {
    calc = new StringCalculator();
  });

  test("returns 0 for empty string", () => {
    expect(calc.add("")).toBe(0);
  });

  test("returns number for single value", () => {
    expect(calc.add("1")).toBe(1);
  });

  test("returns sum of comma-separated numbers", () => {
    expect(calc.add("1,5")).toBe(6);
  });
  
  test("returns sum of comma-separated numbers", () => {
    expect(calc.add("1,2,3,4,5")).toBe(15);
  });

  test("supports newline delimiter", () => {
    expect(calc.add("1\n2,3")).toBe(6);
  });

  test("supports custom single-char delimiter", () => {
    expect(calc.add("//;\n1;2")).toBe(3);
  });

  test("throws on negative numbers", () => {
    expect(() => calc.add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
  });
  
});