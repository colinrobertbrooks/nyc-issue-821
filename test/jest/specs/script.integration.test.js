import { baz } from "../../../script";

test("baz returns val via bar", () => {
  expect(baz(2)).toBe(2);
});
