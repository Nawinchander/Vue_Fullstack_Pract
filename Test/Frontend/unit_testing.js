//// Unit Testing (Component Level)

import { mount } from "@vue/test-utils";
import MongoUser from "../components/MongoUser.vue";

test("renders input", () => {
  const wrapper = mount(MongoUser);
  expect(wrapper.find("input").exists()).toBe(true);
});


