/// MySQL API Test

describe("MySQL API", () => {
  it("should insert task", async () => {
    const res = await request(app)
      .post("/api/mysql/task")
      .send({ title: "Task 1" });

    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBeDefined();
  });
});


