describe("Flaky tests (intentionally unstable)", () => {
  test("random network simulation", () => {
    const success = Math.random() > 0.3;
    expect(success).toBe(true);
  });

  test("timing-sensitive operation", () => {
    const start = Date.now();
    let sum = 0;
    for (let i = 0; i < 1000000; i++) sum += i;
    const elapsed = Date.now() - start;
    expect(elapsed).toBeLessThan(50);
  });

  test("race condition simulation", () => {
    const values = [1, 2, 3, 4, 5];
    const shuffled = values.sort(() => Math.random() - 0.5);
    expect(shuffled[0]).toBeLessThan(3);
  });
});
