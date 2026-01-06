import { computeCB, TARGET_INTENSITY } from "../src/core/domain/Compliance";

describe("Compute Compliance Balance", () => {
  it("returns positive CB when intensity below target", () => {
    const cb = computeCB(88, 1000);
    expect(cb).toBeGreaterThan(0);
  });

  it("returns negative CB when intensity above target", () => {
    const cb = computeCB(95, 1000);
    expect(cb).toBeLessThan(0);
  });

  it("matches formula exactly", () => {
    const fuel = 1000;
    const ghg = 90;
    const energy = fuel * 41000;
    const expected = (TARGET_INTENSITY - ghg) * energy;
    expect(computeCB(ghg, fuel)).toBeCloseTo(expected);
  });
});
