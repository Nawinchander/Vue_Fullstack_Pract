// Combined API Test (MOST IMPORTANT)

// This is what impresses interviewers.


describe("Combined API", () => {
  it("should write to Mongo + MySQL", async () => {
    const res = await request(app)
      .post("/api/combined/register")
      .send({ name: "Nawin", email: "n@mail.com" });

    expect(res.statusCode).toBe(200);

    // Mongo validation
    expect(res.body.user.email).toBe("n@mail.com");

    // MySQL validation
    expect(res.body.taskId).toBeDefined();
  });
});




