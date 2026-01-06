import { createPool } from "../src/core/application/CreatePool";

describe("Pooling logic", () => {
  it("balances deficit using surplus", () => {
    const members = [
      { shipId: "A", cbBefore: 5000, cbAfter: 5000 },
      { shipId: "B", cbBefore: -3000, cbAfter: -3000 }
    ];

    const result = createPool(members);
    const deficit = result.find(m => m.shipId === "B")!;

    expect(deficit.cbAfter).toBe(0);
  });

  it("rejects negative total CB", () => {
    expect(() =>
      createPool([
        { shipId: "A", cbBefore: -1000, cbAfter: -1000 },
        { shipId: "B", cbBefore: -500, cbAfter: -500 }
      ])
    ).toThrow();
  });
});
