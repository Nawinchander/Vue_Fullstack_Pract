/// Two-Way Binding (v-model)


test("v-model updates", async () => {
  const wrapper = mount(MongoUser);

  const input = wrapper.find("input");
  await input.setValue("Nawin");

  expect(input.element.value).toBe("Nawin");
});

// Interview highlight:

// “I verify reactivity using v-model binding tests.”


