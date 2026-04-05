/// MongoDB API Test (Isolation + DB Mock)

const request = require("supertest");
const app = require("../index");

describe("Mongo API", () => {
  it("should create a user", async () => {
    const res = await request(app)
      .post("/api/mongo/user")
      .send({ name: "Test", email: "test@mail.com" });

    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe("Test");
  });

  it("should fail for invalid input", async () => {
    const res = await request(app)
      .post("/api/mongo/user")
      .send({});

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });
});




