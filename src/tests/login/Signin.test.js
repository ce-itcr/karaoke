import { multiply, makeLowerCase } from "./../../components/utils/HelperFunctions";

test("HelperFunctions.js -> multiply", () => {
  expect(multiply(2,10)).toBe(20);
});

test("HelperFunctions.js -> makeLowerCase", () => {
  expect(makeLowerCase("DuMMYTesting")).toBe("dummytesting");
});