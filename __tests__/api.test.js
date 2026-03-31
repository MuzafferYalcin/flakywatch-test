describe("API response handling", () => {
  test("parses JSON response", () => {
    const json = '{"status": "ok", "count": 42}';
    const parsed = JSON.parse(json);
    expect(parsed.status).toBe("ok");
    expect(parsed.count).toBe(42);
  });

  test("handles empty response", () => {
    const json = "{}";
    const parsed = JSON.parse(json);
    expect(Object.keys(parsed)).toHaveLength(0);
  });

  test("flaky timeout check", () => {
    const timeout = Math.random() > 0.5 ? 100 : 5000;
    expect(timeout).toBeLessThan(1000);
  });
});
