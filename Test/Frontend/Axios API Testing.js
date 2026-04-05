//// Axios API Testing (Mocking)

import api from "../services/api";
vi.mock("../services/api");

test("calls API", async () => {
  const wrapper = mount(MongoUser);

  await wrapper.find("button").trigger("click");

  expect(api.post).toHaveBeenCalled();
});

