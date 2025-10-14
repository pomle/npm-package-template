import { describe, it, expect } from "vitest";
import { noop } from "../index";

describe("index", () => {
  it("runs a test", () => {
    expect(noop()).toBe(undefined);
  });
});
